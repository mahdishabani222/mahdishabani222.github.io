(function () {
  'use strict';

  const networks = [
    {
      key: 'youtube',
      url: 'https://www.youtube.com/@mahdishabaniAI',
      en: 'YouTube',
      fa: 'یوتیوب',
      icon: '<rect x="2" y="5" width="20" height="14" rx="4"/><path d="m10 9 5 3-5 3Z"/>'
    },
    {
      key: 'telegram',
      url: 'https://t.me/mahdii_shabanii',
      en: 'Telegram',
      fa: 'تلگرام',
      icon: '<path d="m22 3-4 18-6-5-4 4 1-7L22 3ZM9 13l9-7M3 10l19-7-13 10-6-3Z"/>'
    },
    {
      key: 'instagram',
      url: 'https://www.instagram.com/l_am_mahdi874/',
      en: 'Instagram',
      fa: 'اینستاگرام',
      icon: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".7" fill="currentColor" stroke="none"/>'
    },
    {
      key: 'linkedin',
      url: 'https://www.linkedin.com/in/mahdi-shabani1/',
      en: 'LinkedIn',
      fa: 'لینکدین',
      icon: '<path d="M4 9v12M4 4v.1M10 21V9h4v2c1-3 7-3 7 3v7M14 21v-7"/>'
    },
    {
      key: 'email',
      url: 'mailto:mshabani544@gmail.com',
      en: 'Email',
      fa: 'ایمیل',
      icon: '<rect x="2.5" y="4.5" width="19" height="15" rx="2.5"/><path d="m3 6 9 7 9-7"/>'
    }
  ];

  function createLink(network, showLabel) {
    const link = document.createElement('a');
    link.href = network.url;
    link.dataset.social = network.key;
    link.className = showLabel ? 'social-link' : 'icon-link';
    if (network.key !== 'email') {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
    link.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + network.icon + '</svg>';
    if (showLabel) link.appendChild(document.createElement('span'));
    return link;
  }

  function updateLabels() {
    const language = document.documentElement.lang === 'fa' ? 'fa' : 'en';
    document.querySelectorAll('[data-social]').forEach(link => {
      const network = networks.find(item => item.key === link.dataset.social);
      if (!network) return;
      link.setAttribute('aria-label', network[language]);
      link.title = network[language];
      const label = link.querySelector('span');
      if (label) label.textContent = network[language];
    });
    const navigation = document.getElementById('social-links');
    if (navigation) navigation.setAttribute('aria-label', language === 'fa' ? 'راه‌های ارتباط با مهدی شعبانی' : 'Connect with Mahdi Shabani');
  }

  function initialize() {
    if (document.getElementById('social-links')) return;
    const style = document.createElement('style');
    style.textContent = `
      .profile-box .icon-row{flex-wrap:wrap;justify-content:center}
      .profile-box .icon-link{flex-shrink:0}
      .social-links{display:flex;flex-wrap:wrap;justify-content:center;gap:10px;margin:36px auto 0}
      .social-link{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:44px;padding:8px 14px;border:1px solid var(--hairline,#c3cede);border-radius:24px;color:var(--ink,#101419);background:var(--surface,#f8fbfd);text-decoration:none;font:inherit;font-size:.85rem;transition:background .2s,border-color .2s}
      .social-link svg{width:19px;height:19px;flex-shrink:0}
      .social-link:hover{background:var(--accent-tint,#dfebf8);border-color:var(--accent,#2a78d6)}
      .social-link:focus-visible,.profile-box .icon-link:focus-visible{outline:2px solid var(--accent,#2a78d6);outline-offset:4px}
      .social-links+.site-footer{margin-top:24px}
    `;
    document.head.appendChild(style);

    const profileRow = document.querySelector('.profile-box .icon-row');
    if (profileRow) {
      const additions = document.createDocumentFragment();
      networks.forEach(network => {
        const existing = document.getElementById('profile-' + network.key);
        if (existing) {
          existing.href = network.url;
          existing.dataset.social = network.key;
          if (network.key !== 'email') {
            existing.target = '_blank';
            existing.rel = 'noopener noreferrer';
          }
        } else {
          const link = createLink(network, false);
          link.id = 'profile-' + network.key;
          additions.appendChild(link);
        }
      });
      profileRow.prepend(additions);
    }

    const footer = document.querySelector('.site-footer');
    if (footer) {
      const navigation = document.createElement('nav');
      navigation.id = 'social-links';
      navigation.className = 'social-links';
      networks.forEach(network => navigation.appendChild(createLink(network, true)));
      footer.before(navigation);
    }
    updateLabels();
    const observer = new MutationObserver(updateLabels);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialize);
  else initialize();
})();
