const navigationItems = [
  {
    label: "კატეგორიები",
    path: "/category",
  },
  {
    label: "საზოგადოება",
    path: "/society",
  },
  {
    label: "პოლიტიკა",
    path: "/politics",
  },
  {
    label: "ეკონომიკა",
    path: "/economy",
  },
  {
    label: "სპორტი",
    path: "/sports",
  },
  {
    label: "მეცნიერება",
    path: "/science",
  },
  {
    label: "კულტურა",
    path: "/culture",
  },
  {
    label: "მოდა",
    path: "/fashion",
  },
  {
    label: "ჯანმრთელობა",
    path: "/health",
  },
  {
    label: "კულტურა",
    path: "/culture",
  },
  {
    label: "მოდა",
    path: "/fashion",
  },
  {
    label: "ჯანმრთელობა",
    path: "/health",
  },
  {
    label: "მეტი",
    path: "/more",
  },
];

const BREAKPOINTS = {
  DESKTOP: 1468,
  LAPTOP: 1268,
  TABLET: 1068,
  SMALL_TABLET: 968,
  LARGE_MOBILE: 768,
  MOBILE: 600,
  SMALL_MOBILE: 500
};

const VISIBLE_ITEMS = {
  [BREAKPOINTS.DESKTOP]: 10,
  [BREAKPOINTS.LAPTOP]: 9,
  [BREAKPOINTS.TABLET]: 8,
  [BREAKPOINTS.SMALL_TABLET]: 7,
  [BREAKPOINTS.LARGE_MOBILE]: 5,
  [BREAKPOINTS.MOBILE]: 4,
  [BREAKPOINTS.SMALL_MOBILE]: 3
};

function getVisibleItemsCount() {
  const width = window.innerWidth;
  for (const [breakpoint, count] of Object.entries(VISIBLE_ITEMS)) {
    if (width < breakpoint) return count;
  }
  return navigationItems.length;
}

function createDropdownOptions() {
  const dropdown = document.createElement("div");
  dropdown.className = "dropdown-options";

  navigationItems.forEach((item) => {
    if (item.path !== "/more" && item.path !== "/category") {
      const option = document.createElement("a");
      option.href = item.path;
      option.textContent = item.label;
      dropdown.appendChild(option);
    }
  });

  return dropdown;
}

function createDropdownButton(button, item) {
  const arrow = document.createElement("img");
  arrow.src = "../assets/arrow_drop_down.svg";
  arrow.alt = "arrow_drop_down";
  button.appendChild(arrow);

  const dropdown = createDropdownOptions();
  button.appendChild(dropdown);

  button.addEventListener("click", () => {
    dropdown.classList.toggle("show");
  });

  document.addEventListener("click", (e) => {
    if (!button.parentElement.contains(e.target)) {
      dropdown.classList.remove("show");
    }
  });

  return button;
}

function createNavItem(item) {
  const li = document.createElement("li");
  const button = document.createElement("button");
  button.textContent = item.label;
  button.classList = "button-text";

  const showCategory = window.innerWidth <= BREAKPOINTS.LAPTOP;
  const isDropdownItem = (showCategory && item.path === "/category") || 
                        (!showCategory && item.path === "/more");

  if (isDropdownItem) {
    createDropdownButton(button, item);
  }

  if (item.path === "/category") {
    button.classList.add("nav-item-category");
  }

  li.appendChild(button);
  return li;
}

function initialize() {
  const desktopNavList = document.getElementById("nav-list");
  const mobileNavList = document.getElementById("mobile-nav-list");
  const navList = window.innerWidth <= BREAKPOINTS.MOBILE ? mobileNavList : desktopNavList;
  
  if (!navList) return;

  navList.innerHTML = "";
  const visibleCount = getVisibleItemsCount();
  const showCategory = window.innerWidth <= BREAKPOINTS.LAPTOP;

  navigationItems.forEach((item, index) => {
    if ((showCategory && item.path === "/more") || 
        (!showCategory && item.path === "/category")) {
      return;
    }
    
    if (index >= visibleCount && item.path !== "/more" && item.path !== "/category") return;
    const navItem = createNavItem(item);
    navList.appendChild(navItem);
  });
}

// Initialize on load and resize
const observer = new MutationObserver((mutations) => {
  const desktopNavList = document.getElementById("nav-list");
  const mobileNavList = document.getElementById("mobile-nav-list");
  if (desktopNavList || mobileNavList) {
    observer.disconnect();
    initialize();
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});

window.addEventListener("resize", () => {
  initialize();
});
