 const params = new URLSearchParams(window.location.search);
        const bookId = parseInt(params.get('id'));
        const book = books.find(b => b.id === bookId);

        const detailContainer = document.getElementById('book-detail');
        const breadcrumbCategory = document.getElementById('breadcrumb-category');
        const breadcrumbTitle = document.getElementById('breadcrumb-title');
        const relatedGrid = document.getElementById('related-grid');

        if (book) {
            // Update page title
            document.title = `${book.title} — DoughTwist Library`;
            document.querySelector('meta[name="description"]').setAttribute('content', `Book details for ${book.title} by ${book.author}. Available now at DoughTwist Library.`);

            // Update breadcrumb
            breadcrumbCategory.textContent = book.category;
            breadcrumbTitle.textContent = book.title;

            // Render book detail
            detailContainer.innerHTML = `
                <div class="detail-media">
                    <div class="cover-frame">
                        <span class="badge ${book.badge}">${badgeText(book.badge)}</span>
                        <img src="../${book.img}" alt="${book.title} cover">
                    </div>
                </div>

                <div class="detail-info">
                    <div class="detail-header">
                        <span class="tag ${book.style}">${book.category}</span>
                        <h1>${book.title}</h1>
                        <p class="author">by <strong>${book.author}</strong></p>
                        <div class="rating-bar">
                            <div class="stars" aria-label="${book.rating} out of 5 stars">
                                ${renderStars()}
                            </div>
                            <span class="rating-score">${book.rating}</span>
                            <span class="rating-count">(${book.reviews} reviews)</span>
                        </div>
                    </div>

                    <p class="description">${book.description}</p>

                    <div class="meta-grid">
                        <div class="meta-item">
                            <span class="meta-label">Published</span>
                            <span class="meta-value">${book.published}</span>
                        </div>
                        <div class="meta-item">
                            <span class="meta-label">Pages</span>
                            <span class="meta-value">${book.pages}</span>
                        </div>
                        <div class="meta-item">
                            <span class="meta-label">Language</span>
                            <span class="meta-value">${book.language}</span>
                        </div>
                        <div class="meta-item">
                            <span class="meta-label">ISBN</span>
                            <span class="meta-value">${book.isbn}</span>
                        </div>
                    </div>

                    <div class="detail-actions">
                        <button class="btn btn-primary">Borrow Now</button>
                        <button class="btn btn-secondary">Read Sample</button>
                        <button class="btn btn-ghost" aria-label="Add to favorites">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                            </svg>
                            Save
                        </button>
                    </div>
                </div>
            `;

            // Render related books (exclude current book)
            const relatedBooks = books.filter(b => b.id !== book.id).slice(0, 4);
            relatedGrid.innerHTML = relatedBooks.map(b => `
                <a href="book-detail.html?id=${b.id}" class="collection-link">
                    <div class="collection-card">
                        <div class="card-img-wrapper">
                            <img src="../${b.img}" alt="${b.title} cover">
                        </div>
                        <div class="card-content">
                            <span class="tag ${b.style}">${b.category}</span>
                            <h3>${b.title}</h3>
                            <p><strong>Author:</strong> ${b.author}</p>
                        </div>
                    </div>
                </a>
            `).join('');

            if (typeof initReveal === 'function') initReveal();
        } else {
            // Book not found
            breadcrumbTitle.textContent = 'Not Found';
            detailContainer.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 80px 0;">
                    <h1 style="font-size: 2rem; margin-bottom: 16px;">Book not found</h1>
                    <p style="color: var(--text-muted); margin-bottom: 24px;">The book you are looking for does not exist in our collection.</p>
                    <a href="../index.html" class="btn btn-secondary">&larr; Back to Home</a>
                </div>
            `;
            relatedGrid.innerHTML = '';
        }

        // Helper: badge text based on status
        function badgeText(badge) {
            switch (badge) {
                case 'available': return 'Available';
                case 'not-available': return 'Not Available';
                case 'up-coming': return 'Upcoming';
                case 'borrowed': return 'Borrowed';
                default: return 'Available';
            }
        }

        // Helper: render 5 stars
        function renderStars() {
            const starPath = 'M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.133 9.21l8.2-1.192z';
            return Array(5).fill(`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="${starPath}"/></svg>`).join('');
        }

        // Mobile menu toggle
        const toggle = document.querySelector('.menu-toggle');
        const nav = document.querySelector('.main-nav');

        toggle.addEventListener('click', () => {
            const expanded = toggle.getAttribute('aria-expanded') === 'true';
            toggle.setAttribute('aria-expanded', !expanded);
            toggle.classList.toggle('open', !expanded);
            nav.classList.toggle('open', !expanded);
        });