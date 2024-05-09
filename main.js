// nav background
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0)
})

//Filter
$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");
        if (value == "all"){
            $(".post-box").show("1000")
        } else{
            $(".post-box")
                .not("." + value)
                .hide(1000);
            $(".post-box")
            .filter("." + value)
            .show("1000")
        }
    });
    $(".filter-item").click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter")
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Function to fetch and display existing reviews
    function displayExistingReviews() {
        // Fetch existing reviews from server/database
        // For demonstration, let's assume we have an array of reviews
        const existingReviews = [
            { name: 'John Doe', comment: 'Great website!', rating: 5 },
            { name: 'Jane Smith', comment: 'Could use some improvements.', rating: 3 }
        ];

        const existingReviewsContainer = document.getElementById('existing-reviews');

        // Clear existing reviews container
        existingReviewsContainer.innerHTML = '';

        // Display each review
        existingReviews.forEach(review => {
            const reviewElement = document.createElement('div');
            reviewElement.innerHTML = `
                <div>
                    <strong>${review.name}</strong> - Rating: ${review.rating}
                </div>
                <p>${review.comment}</p>
                <hr>
            `;
            existingReviewsContainer.appendChild(reviewElement);
        });
    }

    // Call the function to display existing reviews
    displayExistingReviews();

    // Event listener for form submission
    document.getElementById('review-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Get form inputs
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const comment = document.getElementById('comment').value;
        const rating = document.getElementById('rating').value;

        // Validate inputs (not implemented in this example)

        // Construct review object
        const newReview = {
            name: name,
            email: email,
            comment: comment,
            rating: rating
        };

        // Here, you would typically send the new review data to the server for storage

        // For demonstration, log the new review to console
        console.log('New Review:', newReview);

        // Clear form inputs
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('comment').value = '';
        document.getElementById('rating').selectedIndex = 0; // Reset rating dropdown
    });
});
