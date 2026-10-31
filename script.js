(() => {
  const menuButton = document.querySelector('.mobile-menu');
  const navigation = document.querySelector('#main-navigation');
  const year = document.querySelectorAll('[data-current-year]');

  year.forEach((node) => { node.textContent = String(new Date().getFullYear()); });

  if (menuButton && navigation) {
    const setMenuOpen = (isOpen) => {
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
      navigation.classList.toggle('nav-open', isOpen);
      menuButton.classList.toggle('is-open', isOpen);
    };
    menuButton.addEventListener('click', () => {
      setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
    });
    navigation.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => setMenuOpen(false));
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    });
  }

  // Public repository directory search and category filters.
  const repoSearch = document.querySelector('[data-repo-search]');
  const repoCards = [...document.querySelectorAll('[data-repo-card]')];
  const repoCount = document.querySelector('[data-result-count]');
  const repoFilters = [...document.querySelectorAll('[data-repo-filter]')];
  let activeRepoFilter = 'all';

  const applyRepoFilter = () => {
    if (!repoCards.length) return;
    const query = repoSearch?.value.trim().toLowerCase() ?? '';
    let visible = 0;
    repoCards.forEach((card) => {
      const matchesQuery = !query || card.textContent.toLowerCase().includes(query);
      const matchesCategory = activeRepoFilter === 'all'
        || card.dataset.category === activeRepoFilter
        || (activeRepoFilter === 'licensed' && card.dataset.licenseState === 'listed')
        || (activeRepoFilter === 'no-license' && card.dataset.licenseState === 'none');
      const show = matchesQuery && matchesCategory;
      card.hidden = !show;
      if (show) visible += 1;
    });
    if (repoCount) repoCount.textContent = `Showing ${visible} of ${repoCards.length} repositories`;
  };

  repoSearch?.addEventListener('input', applyRepoFilter);
  repoFilters.forEach((button) => {
    button.addEventListener('click', () => {
      activeRepoFilter = button.dataset.repoFilter;
      repoFilters.forEach((filter) => filter.setAttribute('aria-pressed', String(filter === button)));
      applyRepoFilter();
    });
  });

  // Product discovery: client-side search and category filters; no data leaves the browser.
  const productSearch = document.querySelector('[data-product-search]');
  const productCards = [...document.querySelectorAll('[data-product-card]')];
  const productCount = document.querySelector('[data-product-count]');
  const productEmpty = document.querySelector('[data-product-empty]');
  const productFilters = [...document.querySelectorAll('[data-product-filter]')];
  let activeProductFilter = 'all';

  const applyProductFilter = () => {
    if (!productCards.length) return;
    const query = productSearch?.value.trim().toLowerCase() ?? '';
    let visible = 0;
    productCards.forEach((card) => {
      const haystack = `${card.dataset.search ?? ''} ${card.textContent}`.toLowerCase();
      const matchesQuery = !query || haystack.includes(query);
      const matchesCategory = activeProductFilter === 'all' || card.dataset.category === activeProductFilter;
      const show = matchesQuery && matchesCategory;
      card.hidden = !show;
      if (show) visible += 1;
    });
    if (productCount) productCount.textContent = `Showing ${visible} of ${productCards.length} listings`;
    if (productEmpty) productEmpty.hidden = visible !== 0;
  };

  productSearch?.addEventListener('input', applyProductFilter);
  productFilters.forEach((button) => {
    button.addEventListener('click', () => {
      activeProductFilter = button.dataset.productFilter;
      productFilters.forEach((filter) => filter.setAttribute('aria-pressed', String(filter === button)));
      applyProductFilter();
    });
  });

  // A deliberately limited comparison: listing metadata only, never a feature or security score.
  const compareChecks = [...document.querySelectorAll('[data-compare-product]')];
  const compareShow = document.querySelector('[data-compare-show]');
  const compareClear = document.querySelector('[data-compare-clear]');
  const compareOutput = document.querySelector('[data-compare-output]');
  const compareHelp = document.querySelector('[data-compare-help]');

  const selectedProducts = () => compareChecks.filter((check) => check.checked).map((check) => check.closest('[data-product-card]')).filter(Boolean);
  const refreshCompareControls = () => {
    const chosen = selectedProducts().length;
    if (compareShow) compareShow.disabled = chosen < 2 || chosen > 3;
    if (compareHelp) compareHelp.textContent = chosen === 0
      ? 'Select two or three cards above to compare their public references.'
      : `${chosen} selected. Choose ${Math.max(0, 2 - chosen)} more to compare; up to three listings.`;
  };

  compareChecks.forEach((check) => {
    check.addEventListener('change', () => {
      const chosen = selectedProducts();
      if (chosen.length > 3) {
        check.checked = false;
        if (compareHelp) compareHelp.textContent = 'Compare up to three listings at a time.';
      }
      refreshCompareControls();
    });
  });

  const appendCell = (row, tag, text, isHeader = false) => {
    const cell = document.createElement(tag);
    cell.textContent = text;
    row.append(cell);
    return cell;
  };

  compareShow?.addEventListener('click', () => {
    const chosen = selectedProducts();
    if (!compareOutput || chosen.length < 2 || chosen.length > 3) return;
    const wrapper = document.createElement('div');
    wrapper.className = 'compare-table-wrap';
    const table = document.createElement('table');
    table.className = 'compare-table';
    const head = document.createElement('thead');
    const headRow = document.createElement('tr');
    appendCell(headRow, 'th', 'Public listing detail');
    chosen.forEach((card) => appendCell(headRow, 'th', card.dataset.name || 'Project'));
    head.append(headRow);
    const body = document.createElement('tbody');
    const fields = [
      ['Category', (card) => card.querySelector('.product-category')?.textContent.trim() || 'Not listed'],
      ['Platforms', (card) => (card.dataset.platform || 'Not listed').split(' ').filter(Boolean).join(', ')],
      ['Separate website', (card) => card.dataset.listedSite === 'yes' ? 'Portal URL listed; live operation not checked' : 'No separate app website listed'],
      ['Public source repository', (card) => card.dataset.source === 'yes' ? 'One or more public repository links listed' : 'No matching public repository found in the reviewed list'],
    ];
    fields.forEach(([label, getValue]) => {
      const row = document.createElement('tr');
      appendCell(row, 'th', label);
      chosen.forEach((card) => appendCell(row, 'td', getValue(card)));
      body.append(row);
    });
    const detailsRow = document.createElement('tr');
    appendCell(detailsRow, 'th', 'Project information');
    chosen.forEach((card) => {
      const cell = document.createElement('td');
      const link = document.createElement('a');
      link.href = card.querySelector('h2 a')?.getAttribute('href') || '/products/';
      link.textContent = 'Open listing';
      cell.append(link);
      detailsRow.append(cell);
    });
    body.append(detailsRow);
    table.append(head, body);
    wrapper.append(table);
    compareOutput.replaceChildren(wrapper);
    compareOutput.hidden = false;
  });

  compareClear?.addEventListener('click', () => {
    compareChecks.forEach((check) => { check.checked = false; });
    if (compareOutput) {
      compareOutput.replaceChildren();
      compareOutput.hidden = true;
    }
    refreshCompareControls();
  });

  refreshCompareControls();

  // Guided catalogue discovery. All filtering stays in the current browser tab.
  const finderCards = [...document.querySelectorAll('[data-finder-card]')];
  const finderCount = document.querySelector('[data-finder-count]');
  const finderEmpty = document.querySelector('[data-finder-empty]');
  const goalButtons = [...document.querySelectorAll('[data-finder-goal]')];
  const platformButtons = [...document.querySelectorAll('[data-finder-platform]')];
  let selectedGoal = 'all';
  let selectedPlatform = 'all';

  const applyFinder = () => {
    if (!finderCards.length) return;
    let visible = 0;
    finderCards.forEach((card) => {
      const goals = (card.dataset.goal || '').split(/\s+/);
      const platforms = (card.dataset.platform || '').split(/\s+/);
      const goalMatches = selectedGoal === 'all' || goals.includes(selectedGoal);
      const platformMatches = selectedPlatform === 'all'
        || (selectedPlatform === 'tv' && platforms.includes('tv'))
        || (selectedPlatform !== 'tv' && platforms.includes(selectedPlatform));
      const show = goalMatches && platformMatches;
      card.hidden = !show;
      if (show) visible += 1;
    });
    if (finderCount) finderCount.textContent = `Showing ${visible} of ${finderCards.length} public listings`;
    if (finderEmpty) finderEmpty.hidden = visible !== 0;
  };

  goalButtons.forEach((button) => {
    button.addEventListener('click', () => {
      selectedGoal = button.dataset.finderGoal || 'all';
      goalButtons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
      applyFinder();
    });
  });
  platformButtons.forEach((button) => {
    button.addEventListener('click', () => {
      selectedPlatform = button.dataset.finderPlatform || 'all';
      platformButtons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
      applyFinder();
    });
  });
})();
