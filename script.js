document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup');
    const closeBtn = document.getElementById('close-btn');
    const card = document.querySelector('.card');
    const popupTitle = document.getElementById('popup-title');
    const popupDescription = document.getElementById('popup-description');
    const backgroundContent = document.getElementById('background-content');

    const content = {
        education: {
            title: 'Education',
            description: `<br>
            <br>
            <br><br><br>
            
                <p>Master of Computer Application (MCA) [2024]<br>
                Bapuji Institute of Engineering and Technology, Davanagere<br>
                Aggregate: 80%</p>
                <p>Bachelor of Science (PCM) [2019]<br>
                G.M.S Academy First Grade College, Davanagere<br>
                Aggregate: 69%</p>
                <p>Intermediate Level (PCMB) [2016]<br>
                D.R.M Science P U College, Davanagere<br>
                Aggregate: 71%</p>
                <p>High School (X) [2014]<br>
                Mothi Veerappa High School, Davanagere<br>
                Aggregate: 79%</p>`
        },
        skills: {
            title: 'Technical Skills',
            description: `<p>• Programming: Python, Java</p>
                          <p>• Database Management System (DBMS): MySQL</p>`
        },
        certificates: {
            title: 'Certificates & Internships',
            description: `<p>• Python, Machine Learning and IoT<br>
                          Sirintel Technologies Private Limited<br>
                          Duration: 30/10/2023 – 15/12/2023</p>`
        },
        projects: {
            title: 'Projects',
            description: `<p>• Flipkart Review Sentiment Analysis<br>
                          Team: 04<br>
                          Role: Developer<br>
                          Duration: 05/12/2023 – 03/01/2024<br>
                          Description: It’s a Machine Learning Project used to check the positive and negative
                          responses using sentiment analysis, which is helpful for the consumer in just one click.</p>`
        }
    };

    document.querySelectorAll('.grid-item').forEach(item => {
        item.addEventListener('click', () => {
            const id = item.id;
            popupTitle.textContent = content[id].title;
            popupDescription.innerHTML = content[id].description;
            backgroundContent.classList.add('blur'); // Apply the blur effect
            popup.classList.add('active'); // Activate zoom and flip
            setTimeout(() => {
                card.classList.add('flip'); // Start the flip animation
            }, 500); // Start flipping after the zoom-in effect
        });
    });

    closeBtn.addEventListener('click', () => {
        card.classList.remove('flip'); // Reset the flip animation
        popup.classList.remove('active'); // Close the popup
        backgroundContent.classList.remove('blur'); // Remove the blur effect
    });

    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            card.classList.remove('flip'); // Reset the flip animation
            popup.classList.remove('active'); // Close the popup
            backgroundContent.classList.remove('blur'); // Remove the blur effect
        }
    });
});
