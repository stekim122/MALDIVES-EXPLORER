const atollsData = [
    {
        name: "Ihavandhippolhu Atoll",
        region: "North",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
        attraction: "Northern reef channels & rich historic maritime heritage",
        hotels: ["JA Manafaru", "Hideaway Beach Resort & Spa"]
    },
    {
        name: "Thiladhunmathi Atoll (North)",
        region: "North",
        image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=600&q=80",
        attraction: "Utheemu Ganduvaru (Historic Palace of Sultan Thakurufaanu)",
        hotels: ["Barefoot Eco Hotel", "Hondaafushi Island Resort"]
    },
    {
        name: "Thiladhunmathi Atoll (South)",
        region: "North",
        image: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=600&q=80",
        attraction: "Vaikaradhoo Buddhist ruins & lush island mangroves",
        hotels: ["Nolhi Lagoon Resort", "Hanimadhoo Horizon Lodge"]
    },
    <br></br>
    {
        name: "Miladhunmadulu Atoll (North)",
        region: "North",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
        attraction: "Shaviyani turtle nesting beaches & preserved coral reefs",
        hotels: ["JW Marriott Maldives Resort", "Fairmont Maldives Sirru Fen Fushi"]
    },
    {
        name: "Miladhunmadulu Atoll (South)",
        region: "North",
        image: "https://images.unsplash.com/photo-1582972236019-ea4af5db5288?auto=format&fit=crop&w=600&q=80",
        attraction: "Landhoo ancient Buddhist Stupa ('Mondhu')",
        hotels: ["Soneva Jani", "Mövenpick Resort Kuredhivaru"]
    },
    {
        name: "Maalhosmadulu Atoll (North)",
        region: "North",
        image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=600&q=80",
        attraction: "Traditional lacquerware craftsmanship in Tholhendhoo",
        hotels: ["You & Me by Cocoon", "Emerald Maldives Resort & Spa"]
    },
    {
        name: "Maalhosmadulu Atoll (South / Baa)",
        region: "Central",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=600&q=80",
        attraction: "UNESCO Biosphere Reserve & Hanifaru Bay Manta Rays",
        hotels: ["Soneva Fushi", "Anantara Kihavah Maldives Villas"]
    },
    {
        name: "Fasdhūtherē Atoll",
        region: "Central",
        image: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=600&q=80",
        attraction: "Deep lagoon channels & vibrant house-reefs",
        hotels: ["Vakkaru Maldives", "Four Seasons Landaa Giraavaru"]
    },
    {
        name: "Goidhoo Atoll",
        region: "Central",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80",
        attraction: "Goidhoo freshwater lakes & isolated sandbanks",
        hotels: ["Horsburgh Atoll Guesthouse", "Olive Goidhoo"]
    },
    {
        name: "Faadhippolhu Atoll (Lhaviyani)",
        region: "Central",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=600&q=80",
        attraction: "Fushifaru Thila marine protected sanctuary",
        hotels: ["Hurawalhi Island Resort", "Atmosphere Kanifushi"]
    },
    {
        name: "North Malé Atoll",
        region: "Central",
        image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=600&q=80",
        attraction: "Banana Reef & Malé City (Historic Grand Friday Mosque)",
        hotels: ["One&Only Reethi Rah", "Gili Lankanfushi"]
    },
    {
        name: "South Malé Atoll",
        region: "Central",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
        attraction: "Kandooma Right world-class surfing point",
        hotels: ["Waldorf Astoria Ithaafushi", "COMO Cocoa Island"]
    },
    {
        name: "Gaafaru Atoll",
        region: "Central",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
        attraction: "Historic shipwrecks & shallow turquoise lagoon",
        hotels: ["Mirian Sky Gaafaru", "Old Town Inn"]
    },
    {
        name: "Kaashidhoo Atoll",
        region: "Central",
        image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=600&q=80",
        attraction: "Buddhist monastery ruins (Kuruhinna Tharaagadu)",
        hotels: ["Kaashidhoo View Inn", "Koko Palm Beach"]
    },
    {
        name: "Ari Atoll (North)",
        region: "Central",
        image: "https://images.unsplash.com/photo-1582972236019-ea4af5db5288?auto=format&fit=crop&w=600&q=80",
        attraction: "Rasdhoo Hammerhead Shark diving point",
        hotels: ["W Maldives", "Constance Halaveli"]
    },
    {
        name: "Ari Atoll (South)",
        region: "Central",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80",
        attraction: "Year-round Whale Shark marine sanctuary",
        hotels: ["LUX* South Ari Atoll", "Conrad Maldives Rangali Island"]
    },
    {
        name: "Felidhu Atoll (Vaavu)",
        region: "Central",
        image: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=600&q=80",
        attraction: "Alimatha Night Snorkeling with Nurse Sharks",
        hotels: ["Cinnamon Velifushi Maldives", "Nakai Dhiggiri Resort"]
    },
    {
        name: "Vattaru Reef Atoll",
        region: "Central",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=600&q=80",
        attraction: "Uninhabited coral ring with pelagic dive routes",
        hotels: ["Plumeria Maldives (Boat Access)", "Kuredhi Beach Inn"]
    },
    {
        name: "Mulaku Atoll (Meemu)",
        region: "South",
        image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=600&q=80",
        attraction: "Medhufushi windsurfing & vibrant reef breaks",
        hotels: ["Medhufushi Island Resort", "Cinnamon Hakuraa Huraa"]
    },
    {
        name: "Nilandhe Atoll (North / Faafu)",
        region: "South",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
        attraction: "Aasaari Miskiiy (Historical Coral-Stone Mosque)",
        hotels: ["Baglioni Resort Maldives", "Filitheyo Island Resort"]
    },
    {
        name: "Nilandhe Atoll (South / Dhaalu)",
        region: "South",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
        attraction: "Kudahuvadhoo mystery mounds (Hawittas)",
        hotels: ["The St. Regis Vommuli Resort", "Kandima Maldives"]
    },
    {
        name: "Kolhumadulu Atoll (Thaa)",
        region: "South",
        image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=600&q=80",
        attraction: "Fushi Kandu deep-channel ocean diving",
        hotels: ["COMO Maalifushi", "Kalhudhiyafushi Resort"]
    },
    {
        name: "Haddhunmathi Atoll (Laamu)",
        region: "South",
        image: "https://images.unsplash.com/photo-1582972236019-ea4af5db5288?auto=format&fit=crop&w=600&q=80",
        attraction: "Yin Yang surf break & ancient Buddhist stupas",
        hotels: ["Six Senses Laamu", "Reveries Diving Village"]
    },
    {
        name: "Huvadhu Atoll (North)",
        region: "South",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80",
        attraction: "Deep southern channels with schooling reef sharks",
        hotels: ["Park Hyatt Maldives Hadahaa", "Raffles Maldives Meradhoo"]
    },
    {
        name: "Huvadhu Atoll (South)",
        region: "South",
        image: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=600&q=80",
        attraction: "Bioluminescent beaches of Vaadhoo Island",
        hotels: ["Ayada Maldives", "Outrigger Maafushivaru"]
    },
    {
        name: "Addu Atoll (Seenu)",
        region: "South",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=600&q=80",
        attraction: "British Loyalty Wreck & Equator Crossing Point",
        hotels: ["Shangri-La's Villingili Resort", "Equator Village"]
    }
];

let selectedRegion = 'all';

// Render Atolls to DOM
function renderAtolls(data) {
    const grid = document.getElementById('atollGrid');
    const noResults = document.getElementById('noResults');
    grid.innerHTML = '';

    if (data.length === 0) {
        noResults.style.display = 'block';
        return;
    }

    noResults.style.display = 'none';

    data.forEach(atoll => {
        const card = document.createElement('div');
        card.className = 'atoll-card';
        card.innerHTML = `
            <div class="card-img-wrapper">
                <img src="${atoll.image}" alt="${atoll.name}" loading="lazy">
                <span class="region-tag">${atoll.region}</span>
            </div>
            <div class="card-content">
                <h2 class="atoll-title">${atoll.name}</h2>
                <div class="attraction-box">
                    <label><i class="fa-solid fa-star"></i> Major Attraction</label>
                    <p>${atoll.attraction}</p>
                </div>
                <div class="hotels-title">Premier Resorts / Hotels</div>
                <ul class="hotel-list">
                    <li class="hotel-item"><i class="fa-solid fa-hotel"></i> ${atoll.hotels[0]}</li>
                    <li class="hotel-item"><i class="fa-solid fa-hotel"></i> ${atoll.hotels[1]}</li>
                </ul>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Filter and Search Logic
function filterData() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const clearBtn = document.getElementById('clearSearchBtn');

    clearBtn.style.display = searchInput ? 'block' : 'none';

    const filtered = atollsData.filter(item => {
        const matchesRegion = selectedRegion === 'all' || item.region.toLowerCase() === selectedRegion.toLowerCase();
        const matchesSearch = item.name.toLowerCase().includes(searchInput) ||
                              item.attraction.toLowerCase().includes(searchInput) ||
                              item.hotels.some(h => h.toLowerCase().includes(searchInput));
        
        return matchesRegion && matchesSearch;
    });

    renderAtolls(filtered);
}

// Event Listeners
document.getElementById('searchInput').addEventListener('input', filterData);

document.getElementById('clearSearchBtn').addEventListener('click', () => {
    document.getElementById('searchInput').value = '';
    filterData();
});

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        selectedRegion = e.target.getAttribute('data-region');
        filterData();
    });
});

// Initial Render
renderAtolls(atollsData);