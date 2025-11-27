document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Mobile Menu Logic ---
    const menuBtn = document.getElementById("menuBtn");
    const menu = document.getElementById("menu");

    if (menuBtn && menu) {
        menuBtn.onclick = () => {
            menu.classList.toggle("hidden");
            menu.classList.toggle("flex");
            menu.classList.toggle("flex-col");
            menu.classList.toggle("absolute");
            menu.classList.toggle("top-16");
            menu.classList.toggle("left-0");
            menu.classList.toggle("w-full");
            menu.classList.toggle("bg-slate-900");
            menu.classList.toggle("p-4");
            menu.classList.toggle("shadow-lg");
        };
    }

    // --- Pagination State ---
    let currentDisplayCount = 6; // Initially show 6 articles
    const articlesPerPage = 6;
    let isSearching = false; // Track if user is searching

    // --- 2. Data Source (Simulating a Database) ---
    const articles = [
        // --- A. 10 Main Themes ---
        {
            id: 1,
            title: "What Does It Mean to Dream About Flying?",
            excerpt: "Discover the hidden meanings behind flying dreams: freedom, escape, or spiritual ascension.",
            content: "Flying is one of the most common and exhilarating dream symbols...",
            category: "Dream Meanings",
            icon: "🦅",
            color: "text-primary",
            bg: "bg-indigo-100",
            link: "pages/keyword-1.html"
        },
        {
            id: 2,
            title: "What Does It Mean to Dream About Teeth Falling Out?",
            excerpt: "Explore the anxiety, powerlessness, and hidden growth behind this common dream.",
            content: "Dreaming about teeth falling out typically represents anxiety about appearance...",
            category: "Anxiety Dreams",
            icon: "🦷",
            color: "text-purple-600",
            bg: "bg-purple-100",
            link: "pages/keyword-2.html"
        },
        {
            id: 3,
            title: "What Does It Mean to Dream About Being Chased?",
            excerpt: "Are you running from a monster or yourself? Uncover the meaning of the chase.",
            content: "Dreaming about being chased typically represents avoidance...",
            category: "Nightmares",
            icon: "🏃",
            color: "text-pink-600",
            bg: "bg-pink-100",
            link: "pages/keyword-3.html"
        },
        {
            id: 4,
            title: "What Does It Mean to Dream About Falling?",
            excerpt: "A look into the fear of losing control and the need for grounding.",
            content: "Dreaming about falling is one of the most common dream symbols...",
            category: "Common Symbols",
            icon: "📉",
            color: "text-yellow-600",
            bg: "bg-yellow-100",
            link: "pages/keyword-4.html"
        },
        {
            id: 5,
            title: "What Does It Mean to Dream About Snakes?",
            excerpt: "Uncover the truth about snake dreams: fear, transformation, or healing?",
            content: "Snakes are powerful symbols of the unconscious...",
            category: "Symbolism",
            icon: "🐍",
            color: "text-green-600",
            bg: "bg-green-100",
            link: "pages/keyword-5.html"
        },
        {
            id: 6,
            title: "What Does It Mean to Dream About Your Ex?",
            excerpt: "Why is your ex back in your dreams? It might be about you, not them.",
            content: "Dreaming about an ex rarely means you should get back together...",
            category: "Relationships",
            icon: "💔",
            color: "text-red-500",
            bg: "bg-red-100",
            link: "pages/keyword-6.html"
        },
        {
            id: 7,
            title: "What Does It Mean to Dream About Death?",
            excerpt: "Don't panic. Death in dreams is usually a symbol of transformation and rebirth.",
            content: "Dreaming about death is rarely a prophecy...",
            category: "Transformation",
            icon: "💀",
            color: "text-gray-600",
            bg: "bg-gray-200",
            link: "pages/keyword-7.html"
        },
        {
            id: 8,
            title: "What Does It Mean to Dream About Pregnancy?",
            excerpt: "You might be 'giving birth' to a new idea, project, or phase of life.",
            content: "Dreaming about pregnancy usually symbolizes creativity...",
            category: "Growth",
            icon: "🤰",
            color: "text-pink-500",
            bg: "bg-pink-100",
            link: "pages/keyword-8.html"
        },
        {
            id: 9,
            title: "What Does It Mean to Dream About Someone Dying?",
            excerpt: "Understanding the fear of loss and the evolution of relationships.",
            content: "Dreaming about someone dying usually reflects a fear of losing them...",
            category: "Loss",
            icon: "🕯️",
            color: "text-gray-700",
            bg: "bg-gray-100",
            link: "pages/keyword-9.html"
        },
        {
            id: 10,
            title: "What Does It Mean to Dream About Water?",
            excerpt: "Water reflects your emotional state. Is it calm, turbulent, or muddy?",
            content: "Water is the universal symbol of emotions...",
            category: "Elements",
            icon: "🌊",
            color: "text-blue-500",
            bg: "bg-blue-100",
            link: "pages/keyword-10.html"
        },

        // --- B. 20 Long-Tail Variations ---

        // Snakes
        {
            id: 11,
            title: "Dreaming of a Black Snake",
            excerpt: "Black snakes often symbolize hidden threats or deep unconscious wisdom.",
            category: "Snakes",
            icon: "🐍",
            color: "text-gray-800",
            bg: "bg-gray-200",
            link: "pages/keyword-11.html"
        },
        {
            id: 12,
            title: "Dreaming of a Snake Biting Me",
            excerpt: "A wake-up call! What toxic situation is 'poisoning' your life?",
            category: "Snakes",
            icon: "🩸",
            color: "text-red-600",
            bg: "bg-red-100",
            link: "pages/keyword-12.html"
        },

        // Teeth
        {
            id: 13,
            title: "Dreaming of Teeth Crumbling",
            excerpt: "Feeling weak? Crumbling teeth suggest your confidence is eroding.",
            category: "Teeth",
            icon: "🦷",
            color: "text-gray-500",
            bg: "bg-gray-100",
            link: "pages/keyword-13.html"
        },
        {
            id: 14,
            title: "Dreaming of Pulling Your Own Teeth Out",
            excerpt: "You are trying to force a change or remove something painful from your life.",
            category: "Teeth",
            icon: "🔧",
            color: "text-orange-600",
            bg: "bg-orange-100",
            link: "pages/keyword-14.html"
        },

        // Falling
        {
            id: 15,
            title: "Dreaming of Falling into Water",
            excerpt: "A deep dive into overwhelming emotions. Are you drowning or floating?",
            category: "Falling",
            icon: "🌊",
            color: "text-blue-600",
            bg: "bg-blue-100",
            link: "pages/keyword-15.html"
        },
        {
            id: 16,
            title: "Dreaming of Falling from the Sky",
            excerpt: "A 'fall from grace' or a reality check after aiming too high.",
            category: "Falling",
            icon: "☁️",
            color: "text-sky-500",
            bg: "bg-sky-100",
            link: "pages/keyword-16.html"
        },

        // Chased
        {
            id: 17,
            title: "Dreaming of Being Chased by a Dog",
            excerpt: "Are you running from loyalty, friendship, or a betrayal?",
            category: "Chased",
            icon: "🐕",
            color: "text-orange-700",
            bg: "bg-orange-100",
            link: "pages/keyword-17.html"
        },
        {
            id: 18,
            title: "Dreaming of Being Chased by a Monster",
            excerpt: "The monster is you. It represents the scary parts of yourself you deny.",
            category: "Chased",
            icon: "👹",
            color: "text-red-800",
            bg: "bg-red-100",
            link: "pages/keyword-18.html"
        },

        // Ex
        {
            id: 19,
            title: "Dreaming of Ex Wanting to Get Back Together",
            excerpt: "Do you miss them, or do you just miss being in a relationship?",
            category: "Ex",
            icon: "❤️",
            color: "text-pink-600",
            bg: "bg-pink-100",
            link: "pages/keyword-19.html"
        },
        {
            id: 20,
            title: "Dreaming of Fighting with Your Ex",
            excerpt: "Internal conflict. You are still fighting the battles of the past.",
            category: "Ex",
            icon: "⚔️",
            color: "text-red-600",
            bg: "bg-red-100",
            link: "pages/keyword-20.html"
        },

        // Death
        {
            id: 21,
            title: "Dreaming of Your Own Death",
            excerpt: "The ultimate transformation. The old you is dying to make way for the new.",
            category: "Death",
            icon: "⚰️",
            color: "text-gray-800",
            bg: "bg-gray-200",
            link: "pages/keyword-21.html"
        },
        {
            id: 22,
            title: "Dreaming of a Funeral",
            excerpt: "Saying goodbye. You are grieving a lost opportunity or phase of life.",
            category: "Death",
            icon: "💐",
            color: "text-purple-700",
            bg: "bg-purple-100",
            link: "pages/keyword-22.html"
        },

        // Flying
        {
            id: 23,
            title: "Dreaming of Flying Without Wings",
            excerpt: "Pure willpower. You have the internal strength to rise above.",
            category: "Flying",
            icon: "🦸",
            color: "text-blue-600",
            bg: "bg-blue-100",
            link: "pages/keyword-23.html"
        },
        {
            id: 24,
            title: "Dreaming of Flying in a Plane",
            excerpt: "A guided journey. You are going places, but you are not the pilot.",
            category: "Flying",
            icon: "✈️",
            color: "text-sky-600",
            bg: "bg-sky-100",
            link: "pages/keyword-24.html"
        },

        // Pregnancy
        {
            id: 25,
            title: "Dreaming of Being Pregnant with Twins",
            excerpt: "Double the creativity, or double the responsibility?",
            category: "Pregnancy",
            icon: "👶",
            color: "text-pink-500",
            bg: "bg-pink-100",
            link: "pages/keyword-25.html"
        },
        {
            id: 26,
            title: "Dreaming of Giving Birth",
            excerpt: "Manifestation. Your hard work is finally becoming reality.",
            category: "Pregnancy",
            icon: "🐣",
            color: "text-green-500",
            bg: "bg-green-100",
            link: "pages/keyword-26.html"
        },

        // Someone Dying
        {
            id: 27,
            title: "Dreaming of a Parent Dying",
            excerpt: "Growing up. You are stepping into your own authority.",
            category: "Loss",
            icon: "👴",
            color: "text-gray-600",
            bg: "bg-gray-200",
            link: "pages/keyword-27.html"
        },
        {
            id: 28,
            title: "Dreaming of a Partner Dying",
            excerpt: "Fear of abandonment or a shift in the relationship dynamic.",
            category: "Loss",
            icon: "💍",
            color: "text-indigo-600",
            bg: "bg-indigo-100",
            link: "pages/keyword-28.html"
        },

        // Water
        {
            id: 29,
            title: "Dreaming of a Flood or Tsunami",
            excerpt: "Emotional overwhelm. Feelings are crashing down on you.",
            category: "Water",
            icon: "🌊",
            color: "text-blue-800",
            bg: "bg-blue-200",
            link: "pages/keyword-29.html"
        },
        {
            id: 30,
            title: "Dreaming of Drowning",
            excerpt: "You are in over your head. It's time to ask for help.",
            category: "Water",
            icon: "🆘",
            color: "text-red-600",
            bg: "bg-red-100",
            link: "pages/keyword-30.html"
        }
    ];

    // --- 3. Render Function (with Pagination Support) ---
    const articleGrid = document.getElementById('article-grid');
    const searchInput = document.getElementById('search-input');
    const resultCount = document.getElementById('result-count');
    const loadMoreContainer = document.getElementById('load-more-container');
    const loadMoreBtn = document.getElementById('load-more-btn');

    function renderContent(articleData, dictionaryData, limit = null) {
        if (!articleGrid) return;

        articleGrid.innerHTML = ''; // Clear existing content

        // Apply limit only if not searching
        const articlesToShow = limit && !isSearching ? articleData.slice(0, limit) : articleData;
        const totalResults = articlesToShow.length + dictionaryData.length;

        if (totalResults === 0) {
            articleGrid.innerHTML = `
        <div class="col-span-full text-center py-12">
          <div class="text-6xl mb-4 opacity-50">🔍</div>
          <p class="text-xl text-gray-400">No interpretations found for this symbol.</p>
          <p class="text-gray-500 mt-2">Try searching for simple terms like "Snake", "Falling", or "Water".</p>
        </div>
      `;
            if (resultCount) resultCount.textContent = `0 results found`;
            if (loadMoreContainer) loadMoreContainer.classList.add('hidden');
            return;
        }

        if (resultCount) resultCount.textContent = `${totalResults} results found`;

        // Show/hide Load More button
        if (loadMoreContainer && !isSearching) {
            if (articleData.length > currentDisplayCount) {
                loadMoreContainer.classList.remove('hidden');
            } else {
                loadMoreContainer.classList.add('hidden');
            }
        } else if (loadMoreContainer) {
            loadMoreContainer.classList.add('hidden');
        }

        // 1. Render Dictionary Matches (Quick Definitions)
        if (dictionaryData.length > 0) {
            const dictSection = document.createElement('div');
            dictSection.className = 'col-span-full mb-8';
            dictSection.innerHTML = `<h3 class="text-xl font-bold text-white mb-4 flex items-center font-serif"><span class="bg-yellow-500/20 text-yellow-300 p-1 rounded mr-2 border border-yellow-500/30">⚡</span> Quick Dictionary Matches</h3>`;

            const dictGrid = document.createElement('div');
            dictGrid.className = 'grid md:grid-cols-2 lg:grid-cols-3 gap-4';

            dictionaryData.forEach(item => {
                const card = document.createElement('div');
                card.className = 'bg-slate-800/50 backdrop-blur-md border border-white/10 p-5 rounded-xl hover:bg-slate-800/70 transition-all';
                card.innerHTML = `
          <div class="flex justify-between items-start mb-2">
            <h4 class="font-bold text-lg text-white">${item.term}</h4>
            <span class="text-xs font-semibold bg-white/10 text-gray-300 px-2 py-1 rounded-full border border-white/5">${item.category}</span>
          </div>
          <p class="text-gray-300 text-sm leading-relaxed">${item.meaning}</p>
        `;
                dictGrid.appendChild(card);
            });

            dictSection.appendChild(dictGrid);
            articleGrid.appendChild(dictSection);
        }

        // 2. Render Article Matches (Deep Dives)
        if (articlesToShow.length > 0) {
            if (dictionaryData.length > 0) {
                const articleHeader = document.createElement('div');
                articleHeader.className = 'col-span-full mt-4 mb-2';
                articleHeader.innerHTML = `<h3 class="text-xl font-bold text-white flex items-center font-serif"><span class="bg-indigo-500/20 text-indigo-300 p-1 rounded mr-2 border border-indigo-500/30">📄</span> In-Depth Articles</h3>`;
                articleGrid.appendChild(articleHeader);
            }

            articlesToShow.forEach(article => {
                const card = document.createElement('div');
                // Use glass-card and glow-hover classes we defined in CSS
                card.className = 'group p-8 glass-card rounded-2xl glow-hover relative overflow-hidden flex flex-col transition-all duration-300';

                // Map the light theme colors to dark theme equivalents for the icon background
                // We'll just use a generic dark glass for simplicity, but tinted
                let iconBgClass = 'bg-white/5';
                if (article.bg.includes('indigo')) iconBgClass = 'bg-indigo-500/20';
                if (article.bg.includes('purple')) iconBgClass = 'bg-purple-500/20';
                if (article.bg.includes('pink')) iconBgClass = 'bg-pink-500/20';
                if (article.bg.includes('yellow')) iconBgClass = 'bg-yellow-500/20';
                if (article.bg.includes('green')) iconBgClass = 'bg-green-500/20';
                if (article.bg.includes('red')) iconBgClass = 'bg-red-500/20';
                if (article.bg.includes('blue')) iconBgClass = 'bg-blue-500/20';
                if (article.bg.includes('orange')) iconBgClass = 'bg-orange-500/20';

                // Text color mapping
                let iconColorClass = article.color.replace('text-', 'text-'); // Keep as is, usually works or update if needed. 
                // Actually, standard tailwind text colors like text-purple-600 might be too dark. 
                // Let's lighten them.
                iconColorClass = iconColorClass.replace('600', '400').replace('700', '400').replace('800', '400').replace('500', '400');
                if (iconColorClass === 'text-primary') iconColorClass = 'text-indigo-400';


                card.innerHTML = `
          <div class="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 ${iconBgClass} opacity-20 rounded-full transition-transform group-hover:scale-150 duration-500 blur-xl"></div>
          <div class="relative z-10 flex-1">
            <div class="w-12 h-12 ${iconBgClass} rounded-lg flex items-center justify-center ${iconColorClass} mb-6 text-2xl border border-white/5">
              ${article.icon}
            </div>
            <span class="text-xs font-bold tracking-wider uppercase ${iconColorClass} mb-2 block opacity-80">${article.category}</span>
            <h3 class="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors font-serif">${article.title}</h3>
            <p class="text-gray-400 leading-relaxed mb-6">${article.excerpt}</p>
          </div>
          <a href="${article.link}" class="relative z-10 inline-flex items-center text-primary font-semibold hover:text-indigo-300 transition-colors mt-auto">
            Read Article 
            <svg class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </a>
        `;

                articleGrid.appendChild(card);
            });
        }
    }

    // --- 4. Search Logic (Completely Rewritten) ---
    const searchButton = document.querySelector('button'); // The search button in the hero section

    function performSearch() {
        if (!searchInput) return;

        const searchTerm = searchInput.value.toLowerCase().trim();

        console.log('Search term:', searchTerm); // Debug log

        // If search is empty, reset to initial state
        if (searchTerm === '') {
            isSearching = false;
            currentDisplayCount = articlesPerPage; // Reset to initial count
            renderContent(articles, [], currentDisplayCount);
            console.log('Search cleared, showing', currentDisplayCount, 'articles'); // Debug log
            return;
        }

        // User is searching - show all matching results
        isSearching = true;
        console.log('Searching for:', searchTerm); // Debug log

        // Filter Articles
        const filteredArticles = articles.filter(article => {
            const matches = article.title.toLowerCase().includes(searchTerm) ||
                article.excerpt.toLowerCase().includes(searchTerm) ||
                article.category.toLowerCase().includes(searchTerm) ||
                (article.content && article.content.toLowerCase().includes(searchTerm));
            if (matches) {
                console.log('Matched article:', article.title); // Debug log
            }
            return matches;
        });

        // Filter Dictionary (Check if DREAM_DICTIONARY exists to avoid errors)
        let filteredDictionary = [];
        if (typeof DREAM_DICTIONARY !== 'undefined') {
            filteredDictionary = DREAM_DICTIONARY.filter(item => {
                const matches = item.term.toLowerCase().includes(searchTerm) ||
                    item.meaning.toLowerCase().includes(searchTerm);
                if (matches) {
                    console.log('Matched dictionary:', item.term); // Debug log
                }
                return matches;
            });
        }

        console.log('Found', filteredArticles.length, 'articles and', filteredDictionary.length, 'dictionary items'); // Debug log

        // Render filtered results (no limit when searching, pass null as third parameter)
        renderContent(filteredArticles, filteredDictionary, null);
    }

    // Search on input (real-time)
    if (searchInput) {
        searchInput.addEventListener('input', performSearch);
    }

    // Search button click handler with enhanced visual feedback
    if (searchButton) {
        searchButton.addEventListener('click', (e) => {
            e.preventDefault();

            // Multi-layered visual feedback
            const originalBg = searchButton.style.background;
            const originalShadow = searchButton.style.boxShadow;

            // 1. Scale down + Brighten
            searchButton.style.transform = 'scale(0.92)';
            searchButton.style.background = '#6366f1'; // Brighter indigo
            searchButton.style.boxShadow = '0 0 30px rgba(99, 102, 241, 0.8)';

            // 2. Bounce back with glow
            setTimeout(() => {
                searchButton.style.transform = 'scale(1.05)';
                searchButton.style.boxShadow = '0 0 40px rgba(99, 102, 241, 1)';
            }, 100);

            // 3. Return to normal
            setTimeout(() => {
                searchButton.style.transform = 'scale(1)';
                searchButton.style.background = originalBg || '';
                searchButton.style.boxShadow = originalShadow || '';
            }, 300);

            // Perform search
            performSearch();

            // Focus on search input if empty
            if (searchInput && searchInput.value.trim() === '') {
                searchInput.focus();
                // Shake the input to indicate it's empty
                searchInput.style.animation = 'shake 0.5s';
                setTimeout(() => {
                    searchInput.style.animation = '';
                }, 500);
            }
        });

        // Add hover effect enhancement
        searchButton.addEventListener('mouseenter', () => {
            searchButton.style.transition = 'all 0.3s ease';
        });

        searchButton.addEventListener('mouseleave', () => {
            searchButton.style.transition = 'all 0.3s ease';
        });
    }

    // --- 5. Load More Button Logic ---
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            currentDisplayCount += articlesPerPage;
            renderContent(articles, [], currentDisplayCount);

            // Smooth scroll to new content
            setTimeout(() => {
                const cards = articleGrid.querySelectorAll('.glass-card');
                if (cards.length > 0) {
                    // Calculate the index of the first newly loaded card
                    const firstNewCardIndex = currentDisplayCount - articlesPerPage;
                    const targetCard = cards[firstNewCardIndex];
                    if (targetCard) {
                        targetCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }
            }, 100);
        });
    }

    // Initial Render (Show first 9 articles, no dictionary items initially)
    renderContent(articles, [], currentDisplayCount);
});
