/**
 * Google Play Store Analytics - Portfolio Dashboard Script
 * Handles: mobile menu, stats counters, scroll reveal animations, and modal chart integration.
 */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================================================
    // MOBILE NAVIGATION DRAWER
    // ==========================================================================
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileNavToggle && navMenu) {
        mobileNavToggle.addEventListener('click', () => {
            mobileNavToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile drawer on navigation link click
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileNavToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Highlight active section link on scroll
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 150)) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });

    // ==========================================================================
    // SCROLL REVEAL ENTRY ANIMATIONS
    // ==========================================================================
    // Wrap sections/panels with a reveal class for smooth entry
    const animatedElements = [
        document.querySelector('.hero-content'),
        document.querySelector('.stats-panel'),
        document.querySelector('.dashboard-grid'),
        document.querySelector('.features-grid'),
        document.querySelector('.tech-grid'),
        document.querySelector('.about-info'),
        document.querySelector('.about-card')
    ];

    animatedElements.forEach(el => {
        if (el) el.classList.add('reveal');
    });

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(el => {
        if (el) revealObserver.observe(el);
    });

    // ==========================================================================
    // STATISTICS COUNTER ANIMATIONS
    // ==========================================================================
    const statCards = document.querySelectorAll('.stat-card');
    let statsAnimated = false;

    const animateStats = () => {
        const statValues = document.querySelectorAll('.stat-value');
        statValues.forEach(val => {
            const target = parseInt(val.getAttribute('data-target'), 10);
            const duration = 2000; // 2 seconds animation
            const stepTime = 20;
            const totalSteps = duration / stepTime;
            const stepIncrement = target / totalSteps;
            
            let current = 0;
            let step = 0;

            const counter = setInterval(() => {
                current += stepIncrement;
                step++;
                
                if (step >= totalSteps) {
                    clearInterval(counter);
                    // Formatting final numbers
                    if (target === 10841) {
                        val.textContent = '10,841';
                    } else if (target === 100) {
                        val.textContent = '100%';
                    } else {
                        val.textContent = target;
                    }
                } else {
                    if (target === 100) {
                        val.textContent = Math.round(current) + '%';
                    } else if (target === 10841) {
                        val.textContent = Math.round(current).toLocaleString();
                    } else {
                        val.textContent = Math.round(current);
                    }
                }
            }, stepTime);
        });
    };

    const statsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !statsAnimated) {
                statsAnimated = true;
                animateStats();
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    const statsGrid = document.querySelector('.stats-grid');
    if (statsGrid) {
        statsObserver.observe(statsGrid);
    }

    // ==========================================================================
    // DASHBOARD METADATA & DATA DICTIONARY
    // ==========================================================================
    const taskMetadata = {
        1: {
            taskBadge: 'Task 01',
            title: 'Top Categories Analysis',
            chartType: 'Grouped Dual-Axis Bar & Line Chart',
            objective: 'Compare average user rating and total review counts for the top 10 app categories (ranked by total installations) to determine category-level user engagement.',
            filters: [
                'Rating ≥ 4.0',
                'Size ≥ 10 MB (filtered and converted from raw text size values)',
                'Last Updated Month == January (only evaluating post-holiday app status)',
                'Top 10 Categories selected based on total installs after filters'
            ],
            insights: [
                'The FAMILY category accumulated the highest number of reviews (~4.54 million), demonstrating exceptionally high user interaction under these conditions.',
                'PERSONALIZATION achieved the highest average rating of 4.47, followed closely by FAMILY (4.40) and EDUCATION (4.40).',
                'PHOTOGRAPHY recorded the lowest average rating (4.15) among the top 10 categories.'
            ],
            assumptions: [
                'Rating, Size, and Last Updated criteria are derived directly from the dataset\'s cleaned values.',
                'The visualization is timezone-aware and only executes/renders between 3 PM and 5 PM IST.'
            ]
        },
        2: {
            taskBadge: 'Task 02',
            title: 'Interactive Choropleth Map',
            chartType: 'Plotly Choropleth Map',
            objective: 'Create an interactive choropleth map to visualize app installations across representative countries for the top 5 app categories satisfying required exclusions and thresholds.',
            filters: [
                'Exclude categories starting with the letters A, C, G, or S (e.g. Art & Design, Communication, Game, Social)',
                'Only include categories with installs greater than 1,000,000',
                'Filter and rank to select the Top 5 categories based on installs'
            ],
            insights: [
                'PRODUCTIVITY category recorded the highest volume of installs under these rules, exceeding 14 billion.',
                'Excluding gaming and social categories shifts the focus to utility-focused applications (Tools, Productivity, and Photography) which account for massive volumes of installations.'
            ],
            assumptions: [
                'The Google Play Store dataset does not contain geographical information.',
                'Representative countries were mapped solely for visualization purposes (PRODUCTIVITY → United States, TOOLS → Canada, FAMILY → India, PHOTOGRAPHY → Australia, NEWS_AND_MAGAZINES → Germany).',
                'The visualization is timezone-aware and only executes/renders between 6 PM and 8 PM IST.'
            ]
        },
        3: {
            taskBadge: 'Task 03',
            title: 'Installs vs Estimated Revenue',
            chartType: 'Grouped Dual-Axis Bar & Line Chart',
            objective: 'Compare average installations and estimated revenue for the top 3 categories of paid applications under strict business filtering rules.',
            filters: [
                'Installs ≥ 10,000',
                'Content Rating == "Everyone"',
                'App Name Length ≤ 30 characters',
                'Application Size > 15 MB',
                'Estimated Revenue ≥ $10,000'
            ],
            insights: [
                'PHOTOGRAPHY category generated the highest total estimated revenue (~$5.99 million) with an average of 1,000,000 installations per app.',
                'FAMILY category generated ~$796,900 in revenue with an average of ~381,429 installations.',
                'PERSONALIZATION generated ~$666,633 in revenue with an average of 670,000 installations.'
            ],
            assumptions: [
                'Revenue was estimated as Price × Installs because the original dataset does not contain revenue information.',
                'After applying the Revenue ≥ $10,000 filter, all Free applications were excluded because their price is $0, resulting in zero estimated revenue.',
                'The visualization is timezone-aware and only executes/renders between 1 PM and 2 PM IST.'
            ]
        },
        4: {
            taskBadge: 'Task 04',
            title: 'Time Series Install Growth',
            chartType: 'Line Chart with Markers',
            objective: 'Examine the month-over-month trend and growth of total installations for specific app categories using a professional time-series visualization.',
            filters: [
                'Reviews > 500',
                'App Name must not start with X, Y, or Z',
                'App Name must not contain the letter "S" (case-insensitive)',
                'Category must begin with the letters B, C, or E'
            ],
            insights: [
                'COMMUNICATION recorded the highest volume of total installations across all months.',
                'Significant month-over-month growth spikes (>20%) occurred in multiple categories and are highlighted on the chart.',
                'Category names were translated as required: Beauty → Hindi (सौंदर्य) and Business → Tamil (வணிகம்).'
            ],
            assumptions: [
                'Month-over-month growth was calculated using the Last Updated month.',
                'Growth greater than 20% was considered significant and highlighted on the visualization.',
                'Dating category translation was not displayed because it did not satisfy the category filter (categories starting with B, C, or E).',
                'The visualization is timezone-aware and only executes/renders between 6 PM and 9 PM IST.'
            ]
        },
        5: {
            taskBadge: 'Task 05',
            title: 'App Size vs Average Rating',
            chartType: 'Multi-Dimensional Bubble Chart',
            objective: 'Analyze the relationship between application size (in MB) and average rating using a multi-dimensional bubble chart that integrates user sentiment subjectivity.',
            filters: [
                'Rating > 3.5',
                'Installs > 50,000',
                'Reviews > 500',
                'Sentiment Subjectivity > 0.5 (calculated by merging with the User Reviews dataset)',
                'App Name must not contain the letter "S" (case-insensitive)',
                'Categories: GAME, BEAUTY, BUSINESS, COMICS, COMMUNICATION, DATING, ENTERTAINMENT, EVENTS, SOCIAL'
            ],
            insights: [
                'The GAME category (highlighted in pink) contains the highest density of qualifying applications.',
                'Application size (MB) is weakly correlated with user ratings; both small and large apps achieve high ratings.',
                'Apps with higher install counts appear as larger bubbles, making it easy to identify the most popular applications.'
            ],
            assumptions: [
                'Bubble size represents the total number of installations for each app.',
                'Sentiment Subjectivity was calculated as the average value per app from the User Reviews dataset before merging.',
                'Beauty, Comics, and Events categories are not displayed because no apps satisfied all filtering conditions.',
                'The visualization is timezone-aware and only executes/renders between 5 PM and 7 PM IST.'
            ]
        },
        6: {
            taskBadge: 'Task 06',
            title: 'Cumulative Installs Trend',
            chartType: 'Stacked Area Chart',
            objective: 'Visualize the monthly cumulative installations over time for specific app categories, highlighting key growth periods and translating category names.',
            filters: [
                'Rating ≥ 4.2',
                'App Name must not contain any numeric digits (no numbers)',
                'Category prefix starts with T or P (e.g. Tools, Travel & Local, Productivity, Photography)',
                'Reviews > 1,000',
                'App Size between 20 MB and 80 MB'
            ],
            insights: [
                'Productivity Dominance (Productividad): The Spanish-translated Productividad category experienced massive growth, reaching over 1.7 billion cumulative installations by August 2018.',
                'Photography Growth (写真): The Japanese-translated 写真 category accumulated over 691 million installations by August 2018, showing a strong upward trajectory with multiple high-growth months.',
                'Travel & Local (Voyage et Local): The French-translated Voyage et Local category achieved steady cumulative growth, reaching 76.1 million installations.'
            ],
            assumptions: [
                'Cumulative Installs were calculated as the running total of monthly installs for each category.',
                'Month-over-month growth was calculated independently for each category, and months with growth greater than 25% were highlighted.',
                'Category translations were applied as required: Travel & Local → Voyage et Local (French), Productivity → Productividad (Spanish), Photography → 写真 (Japanese).',
                'The visualization is timezone-aware and only executes/renders between 4 PM and 6 PM IST.'
            ]
        }
    };

    // ==========================================================================
    // INTERACTIVE OVERLAY VIEWER (Modal Dashboard Loader)
    // ==========================================================================
    const modal = document.getElementById('dashboardModal');
    const chartIframe = document.getElementById('chartIframe');
    const chartLoader = document.getElementById('chartLoader');
    const btnCloseModal = document.querySelector('.btn-close-modal');
    const modalBackdrop = document.querySelector('.modal-backdrop');
    
    // Modal Details Panels
    const modalTaskBadge = document.getElementById('modalTaskBadge');
    const modalChartTitle = document.getElementById('modalChartTitle');
    const modalChartType = document.getElementById('modalChartType');
    const detailObjective = document.getElementById('detailObjective');
    const detailFilters = document.getElementById('detailFilters');
    const detailInsights = document.getElementById('detailInsights');
    const detailAssumptions = document.getElementById('detailAssumptions');

    const openDashboard = (taskNum) => {
        const metadata = taskMetadata[taskNum];
        if (!metadata) return;

        // Reset and show loader
        chartLoader.classList.remove('hidden');
        chartIframe.src = `./charts/task${taskNum}_chart.html`;

        // Populate metadata side-panels
        modalTaskBadge.textContent = metadata.taskBadge;
        modalChartTitle.textContent = metadata.title;
        modalChartType.textContent = metadata.chartType;
        detailObjective.textContent = metadata.objective;

        // Reset colors of badge based on task
        modalTaskBadge.className = 'modal-badge'; // reset
        const colorsClassMap = {
            1: 'badge-blue',
            2: 'badge-purple',
            3: 'badge-emerald',
            4: 'badge-orange',
            5: 'badge-pink',
            6: 'badge-cyan'
        };
        modalTaskBadge.classList.add(colorsClassMap[taskNum]);

        // Helpers to populate lists
        const populateList = (element, list) => {
            element.innerHTML = '';
            list.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                element.appendChild(li);
            });
        };

        populateList(detailFilters, metadata.filters);
        populateList(detailInsights, metadata.insights);
        populateList(detailAssumptions, metadata.assumptions);

        // Open modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // disable page scroll
    };

    const closeDashboard = () => {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // restore page scroll
        chartIframe.src = ''; // reset iframe to clear memory
    };

    // Card click listeners
    const openButtons = document.querySelectorAll('.btn-open-dashboard');
    openButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const taskNum = parseInt(btn.getAttribute('data-task'), 10);
            openDashboard(taskNum);
        });
    });

    // Close listeners
    if (btnCloseModal) btnCloseModal.addEventListener('click', closeDashboard);
    if (modalBackdrop) modalBackdrop.addEventListener('click', closeDashboard);
    
    // Hide loader overlay once iframe finishes loading
    if (chartIframe) {
        chartIframe.addEventListener('load', () => {
            chartLoader.classList.add('hidden');
        });
    }

    // Keyboard ESC listener
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeDashboard();
        }
    });

});
