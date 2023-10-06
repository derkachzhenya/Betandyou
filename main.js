document.addEventListener('DOMContentLoaded', () => {
    // Fetch the data from the JSON file
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // Initialize the current data and the filtered data
            const currentData = data;
            let filteredData = data;

            // Function to update the displayed data
            const updateData = () => {
                const slide = document.getElementById('slide');
                slide.innerHTML = '';

                filteredData.forEach(item => {
                    const slideName = document.createElement('div');
                    slideName.classList.add('slide__name');
                    slideName.innerHTML = `<span>name:&nbsp</span><br><span class="data">${item.name}</span>`;
                    slide.appendChild(slideName);

                    const slideGender = document.createElement('div');
                    slideGender.classList.add('slide__gender');
                    slideGender.innerHTML = `<span>gender:&nbsp</span><br><span class="data">${item.gender}</span>`;
                    slide.appendChild(slideGender);

                    const slideAge = document.createElement('div');
                    slideAge.classList.add('slide__age');
                    slideAge.innerHTML = `<span>age:&nbsp</span><br><span class="data">${item.age}</span>`;
                    slide.appendChild(slideAge);

                    const slideProfession = document.createElement('div');
                    slideProfession.classList.add('slide__profession');
                    slideProfession.innerHTML = `<span>profession:&nbsp</span><br><span class="data">${item.profession}</span>`;
                    slide.appendChild(slideProfession);
                });
            };

            // Function to filter the data based on a filter function
            const filterData = filterFunc => {
                filteredData = currentData.filter(filterFunc);
                updateData();
            };

            // Add event listeners to the filter buttons
            document.getElementById('slider-btns').addEventListener('click', event => {
                event.preventDefault();

                if (event.target.tagName === 'A') {
                    const filterText = event.target.textContent;

                    if (filterText === '>30 years') {
                        filterData(item => parseInt(item.age) > 30);
                    } else if (filterText === '< 50 years') {
                        filterData(item => parseInt(item.age) < 50);
                    } else if (filterText === 'IT') {
                        filterData(item => item.profession === 'IT');
                    } else if (filterText === 'No IT') {
                        filterData(item => item.profession !== 'IT');
                    } else if (filterText === 'Men') {
                        filterData(item => item.gender === 'men');
                    } else if (filterText === 'Women') {
                        filterData(item => item.gender === 'women');
                    }
                }
            });

            // Initialize the displayed data
            updateData();
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});




