<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>hackathon</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f9;
        }

        .visualization-container {
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin: 50px auto;
            flex-wrap: wrap;
            width: 80%;
        }

        /* Updated Image card with larger dimensions */
        .image-card {
            position: relative;
            width: 500px;
            height: 600px;
            margin: 40px 20px;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            cursor: pointer;
            transition: transform 0.3s ease-in-out;
        }

        .image-card:hover {
            transform: translateY(-10px);
        }

        /* Ensure the PNG images fit the card properly */
        .image-card img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            border-radius: 20px;
            background-color: white;
        }

        /* Glass effect on hover */
        .glass-effect {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: none;
            justify-content: center;
            align-items: center;
            text-align: center;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            backdrop-filter: blur(10px);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
            border: 1px solid rgba(255, 255, 255, 0.18);
            transition: all 0.4s ease;
        }

        .image-card:hover .glass-effect {
            display: flex;
        }

        .glass-effect p {
            color: white;
            font-size: 1.3rem;
            padding: 20px;
            background-color: rgba(214, 177, 242, 0.6);
            border-radius: 10px;
        }

        /* Back Button */
        .back-button {
            margin-bottom: 20px;
            padding: 10px 20px;
            background-color: rgb(214, 177, 242);
            border: none;
            color: white;
            border-radius: 5px;
            cursor: pointer;
        }

        .back-button:hover {
            background-color: #c29ae1;
        }

        /* Hide the visualization section initially */
        #visualization-section {
            display: none;
        }

        .transactions-container {
            margin: 20px auto;
            width: 80%;
        }

        h1 {
            text-align: center;
            color: #333;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            background-color: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        th, td {
            padding: 15px;
            text-align: left;
        }

        th {
            background-color: rgb(214, 177, 242);
            color: white;
            text-transform: uppercase;
        }

        tr:nth-child(even) {
            background-color: #f2f2f2;
        }

        tr:hover {
            background-color: #ddd;
        }

        .transaction-details {
            text-align: left;
        }

        .amount-cell {
            text-align: right;
            position: relative;
        }

        .amount {
            cursor: pointer;
            display: inline-block;
            padding: 5px 10px;
            border-radius: 8px;
        }

        .amount:hover {
            background-color: #ddd;
        }

        .circle {
            height: 10px;
            width: 10px;
            border-radius: 50%;
            display: inline-block;
            margin-right: 10px;
        }

        .circle.credit {
            background-color: green;
        }

        .circle.debit {
            background-color: red;
        }

        .draggable {
            background-color: #d6b1f2;
            padding: 5px;
            border-radius: 8px;
            cursor: grab;
            display: inline-block;
        }

        /* For hidden transaction rows */
        .hidden-row {
            display: none;
        }

        .expanded {
            display: table-row;
        }

        /* Stock Analysis Section */
        .stock-analysis-container {
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            margin: 50px auto;
            width: 80%;
        }

        /* Dropdown styling */
        select {
            width: 300px;
            padding: 10px;
            margin: 20px;
            font-size: 1.2rem;
        }

        /* Loading message styling */
        .loading {
            font-size: 1.5rem;
            color: #666;
            display: none; /* Hidden initially */
        }

        /* Animation for loading */
        .loading-animation {
            border: 16px solid #f3f3f3; /* Light grey */
            border-top: 16px solid #3498db; /* Blue */
            border-radius: 50%;
            width: 80px;
            height: 80px;
            animation: spin 2s linear infinite;
            margin-bottom: 20px;
            position: relative;
            left: 47%;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        /* Stock analysis results */
        .analysis {
            margin-top: 20px;
            display: none; /* Hidden initially */
            text-align: center;
        }

        .analysis img {
            width: 500px;
            height: 300px;
            margin: 20px;
        }

        .analysis p {
            font-size: 1.2rem;
            color: #333;
        }

        /* Navbar Styling Fix */
        #nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: rgb(229, 226, 226);
            color: black;
            padding: 1rem 2rem;
            text-transform: uppercase;
            position: fixed;
            top: 0;
            width: 100%;
            height: 8vh;
            z-index: 11;
        }
        #nav_content {
            display: flex;
            justify-content: space-between;
            gap: 3rem;
        }
        #nav_content h3 {
            position: relative;
            cursor: pointer;
        }
        #nav_content h3::after {
            content: "";
            width: 0;
            height: 2px;
            background: #c29ae1;
            transition: width 0.3s;
            position: absolute;
            left: 0;
            bottom: -5px;
        }
        #nav_content h3:hover::after {
            width: 100%;
        }

        /* Page layout fix */
        #main {
            min-height: 100vh;
            padding-top: 8vh;
            position: relative;
            background-color: rgba(0, 0, 0, 0.35);
            overflow: hidden;
            overflow-y: auto;
        }

        #stock-analysis-section {
            padding-top: 100px;
            text-align: center;
            display: none;
        }

        /* Upload PDF button */
        #upload-section {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 50px auto;
            flex-direction: column;
        }

        #upload-button {
            padding: 10px 20px;
            background-color: rgb(214, 177, 242);
            color: white;
            border-radius: 8px;
            cursor: pointer;
            font-size: 1.2rem;
            border: none;
            margin-bottom: 20px;
        }

        #upload-button:hover {
            background-color: #c29ae1;
        }
    </style>
</head>
<body>
    <div id="nav">
        <h3>5neophytes</h3>
        <div id="nav_content">
            <h3>Home</h3>
            <h3>Contact Us</h3>
            <h3>About</h3>
        </div>
    </div>
    <div id="cursor"></div>
    <div id="cursor-blur"></div>
    <video id="background-video" src="/8284354-hd_1080_1920_30fps.mp4" infinite autoplay loop muted></video>

    <!-- Main Content -->
    <div id="main">
        <div id="page1">
            <h1>FinVisor</h1>
            <h2>Banking Made Easier</h2>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Deserunt sit ducimus non ullam officia obcaecati totam. Voluptatem, 
                porro omnis. Esse nesciunt harum a temporibus explicabo corrupti dolorem qui blanditiis natus!
            </p>
        </div>

        <!-- Upload PDF Section -->
        <div id="upload-section">
            <h1>Upload PDF</h1>
            <input type="file" id="upload-input" accept=".pdf">
            <button id="upload-button">Upload PDF</button>
            <div id="loading-message" style="text-align: center;" class="loading">
                <div class="loading-animation"></div>
                Uploading...
            </div>
        </div>

        <div id="page2">
            <div id="features">
                <h1>Features</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam doloremque laudantium libero rem consequuntur ducimus! Aliquam doloribus at laborum odio.</p>
            </div>

            <div class="features-container">
                <div class="left-section">
                    <p style="font-size:1.25rem"><strong>Benefits</strong></p>
                    <div class="info-box">
                        <p><strong>Satisfactory</strong><br>Experience</p>
                        <p><strong>5.0</strong><br>Trust pilot</p>
                    </div>
                    <p class="see-more">See More</p>
                </div>

                <div class="right-section">
                    <h1>Best features provided by us</h1>
                    <p class="description">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, quos.
                    </p>
                    
                    <div class="features-grid">
                        <div class="feature-card purple" data-feature="transactions">
                            <h3>Transactions</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nobis illum quasi. Atque, nostrum itaque.</p>
                        </div>
                        <div class="feature-card" data-feature="visualization">
                            <h3>Visualization</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nobis illum quasi. Atque, nostrum itaque.</p>
                        </div>
                        <div class="feature-card" data-feature="chatbot">
                            <h3>Chatbot</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nobis illum quasi. Atque, nostrum itaque.</p>
                        </div>
                        <div class="feature-card" data-feature="stock-analysis">
                            <h3>Stock Analysis</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam itaque beatae id facere est velit voluptatibus ducimus rem consequatur cupiditate.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Stock Analysis Section -->
    <div id="stock-analysis-section" class="stock-analysis-container">
        <h1>Stock Analysis</h1>
        <p>Select a stock to analyze:</p>
        
        <!-- Dropdown for selecting stock -->
        <select id="stock-select">
            <option value="" disabled selected>Select a stock</option>
            <option value="AAPL">Apple (AAPL)</option>
            <option value="GOOGL">Google (GOOGL)</option>
            <option value="AMZN">Amazon (AMZN)</option>
            <option value="TSLA">Tesla (TSLA)</option>
        </select>

        <!-- Loading message for Stock Analysis -->
        <div id="loading-message-stock" style="text-align: center;" class="loading">
            <div class="loading-animation"></div>
            Analyzing...
        </div>

        <!-- Stock Analysis Results -->
        <div id="stock-analysis-result" class="analysis">
            <h2>Stock Analysis for <span id="stock-name"></span></h2>
            <img id="line-chart" src="assets/image1.png" alt="Line Chart">
            <img id="pie-chart" src="assets/image2.png" alt="Pie Chart">
            <p id="stock-description"></p>
        </div>
        <button class="back-button">Back to Main Page</button>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>

    <script>
    var crsr = document.querySelector("#cursor");
    var blur = document.querySelector("#cursor-blur");
    var video = document.querySelector("#background-video");

    document.addEventListener("mousemove", function (dets) {
      crsr.style.left = dets.x + "px";
      crsr.style.top = dets.y + "px";
      blur.style.left = dets.x - 250 + "px";
      blur.style.top = dets.y - 250 + "px";
    });

    // Handle feature card clicks
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('click', function () {
            const feature = this.getAttribute('data-feature');
            showFeatureDetail(feature);
        });
    });

    // Function to show the detailed feature view
    function showFeatureDetail(feature) {
        // Hide main content and background elements
        document.getElementById('main').style.display = 'none';
        crsr.style.display = 'none';
        blur.style.display = 'none';
        video.style.display = 'none';

        // Hide all feature sections first
        document.querySelectorAll('.feature-section').forEach(section => section.style.display = 'none');

        // Show the corresponding section based on which card was clicked
        switch (feature) {
            case 'transactions':
                document.getElementById('transactions-section').style.display = 'block';
                initializeTransactions(); // Initialize transactions when the section is clicked
                break;
            case 'visualization':
                document.getElementById('visualization-section').style.display = 'block';
                break;
            case 'chatbot':
                document.getElementById('chatbot-section').style.display = 'block';
                break;
            case 'stock-analysis':
                document.getElementById('stock-analysis-section').style.display = 'block';
                break;
        }
    }

    // Handle back button clicks
    document.querySelectorAll('.back-button').forEach(button => {
        button.addEventListener('click', function () {
            document.querySelectorAll('.feature-section').forEach(section => section.style.display = 'none');
            document.getElementById('main').style.display = 'block';
            crsr.style.display = 'block';
            blur.style.display = 'block';
            video.style.display = 'block';
        });
    });

    // Upload PDF Button Handling
    document.getElementById('upload-button').addEventListener('click', function () {
        const fileInput = document.getElementById('upload-input');

        if (fileInput.files.length > 0) {
            // Show loading animation for upload
            document.getElementById('loading-message').style.display = 'block';

            // Simulate upload time (10 seconds)
            setTimeout(function () {
                // Hide loading after 10 seconds
                document.getElementById('loading-message').style.display = 'none';
                alert('PDF Uploaded Successfully!');
            }, 10000);
        } else {
            alert('Please select a PDF file to upload.');
        }
    });

    // Initialize the transactions when the document loads
    window.onload = function () {
        initializeTransactions();
    };

    // GSAP ScrollTrigger animations
    gsap.to("#nav", {
        backgroundColor: "lightgrey",
        duration: 0.5,
        height: "100px",
        scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
        },
    });

    gsap.to("#main", {
        backgroundColor: "rgb(238, 236, 236)",
        scrollTrigger: {
          trigger: "#main",
          scroller: "body",
          start: "top -10%",
          end: "top -11%",
          scrub: 2,
        },
    });

    </script>

    <style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body {
        height: 100vh;
        width: 100vw;
    }
    
    #cursor {
        height: 20px;
        width: 20px;
        background-color: rgb(214, 177, 242);
        border-radius: 50%;
        position: fixed;
        z-index: 99;
        transition: all linear 0.1s;
    }
    #cursor-blur {
        height: 500px;
        width: 500px;
        background-color: rgba(214, 177, 242, 0.7);
        border-radius: 50%;
        position: fixed;
        filter: blur(80px);
        z-index: 9;
        transition: all linear 0.4s;
    }
    #background-video {
        height: 100%;
        width: 100%;
        object-fit: cover;
        z-index: -1;
        position: fixed;
    }
    #nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: rgb(229, 226, 226);
        color: black;
        padding: 1rem 2rem;
        text-transform: uppercase;
        position: fixed;
        top: 0;
        width: 100%;
        height: 8vh;
        z-index: 11;
    }
    #nav_content {
        display: flex;
        justify-content: space-between;
        gap: 3rem;
    }
    #nav_content h3 {
        position: relative;
        cursor: pointer;
    }
    #nav_content h3::after {
        content: "";
        width: 0;
        height: 2px;
        background: #bc66fe;
        transition: width 0.3s;
        position: absolute;
        left: 0;
        bottom: -5px;
    }
    #nav_content h3:hover::after {
        width: 100%;
    }
    #main {
        min-height: 100vh;
        padding-top: 8vh;
        position: relative;
        background-color: rgba(0, 0, 0, 0.35);
        overflow: hidden;
        overflow-y: auto;
    }
    #page1 {
        height: 100vh;
        width: 100%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        z-index: 10;
    }
    #page1 h1 {
        font-size: 7.5vw;
        font-weight: 900;
        position: relative;
    }
    #page1 h1::before {
        content: "FinVisor";
        position: absolute;
        color: #000;
        top: -5px;
        left: -5px;
        -webkit-text-stroke: 1.5px rgb(238, 236, 236);
        z-index: -1;
    }
    #page1 h2 {
        font-size: 35px;
        font-weight: 800;
        margin-top: 10px;
        margin-bottom: 90px;
        color: black;
    }
    #page1 p {
        color: white;
        font-size: 1.2vw;
        font-weight: 500;
        width: 40%;
    }
    #page2 {
        position: relative;
        height: 100vh;
        z-index: 10;
    }
    #page2 #features {
        background-color: #d6b1f2;
        height: 25vh;
        display: flex;
        border-radius: 20px;
        transform: translateX(8%);
        justify-content: space-around;
        align-items: center;
        font-weight: 900;
    }
    #page2 #features p {
        width: 40%;
        font-weight: 200;
        font-size: 1.5rem;
    }
    .features-container {
        display: flex;
        width: 80%;
        height: 65vh;
        margin: 200px auto;
    }
    .left-section {
        width: 20%;
        text-align: left;
        margin: 0 auto;
    }
    .left-section p {
        margin-bottom: 20px;
        font-size: 18px;
    }
    .info-box p {
        font-size: 33px;
        margin-bottom: 30px;
    }
    .see-more {
        color: #666;
        cursor: pointer;
    }
    .right-section {
        width: 75%;
    }
    .right-section h1 {
        font-size: 2.3rem;
        margin-bottom: 20px;
    }
    .description {
        font-size: 1.5rem;
        color: #666;
        margin-bottom: 60px;
    }
    .features-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 40px;
    }
    .feature-card {
        background-color: #f2f2f2;
        padding: 1.5rem;
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        transition: background-color 0.3s ease;
    }
    .feature-card:hover {
        background-color: #d6b1f2;
    }
    .feature-card h3 {
        font-size: 2rem;
        margin-bottom: 1.2rem;
    }
    .feature-card p {
        font-size: 1.2rem;
        color: #333;
    }

    /* New Styles for Transactions Table */
    .transactions-container {
        margin: 20px auto;
        width: 80%;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        background-color: white;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    th, td {
        padding: 15px;
        text-align: left;
    }

    th {
        background-color: #d6b1f2;
        color: white;
        text-transform: uppercase;
    }

    tr:nth-child(even) {
        background-color: #f2f2f2;
    }

    tr:hover {
        background-color: #ddd;
    }

    .transaction-details {
        text-align: left;
    }

    .amount-cell {
        text-align: right;
        position: relative;
    }

    .amount {
        cursor: pointer;
        display: inline-block;
        padding: 5px 10px;
        border-radius: 8px;
    }

    .amount:hover {
        background-color: #ddd;
    }

    .circle {
        height: 10px;
        width: 10px;
        border-radius: 50%;
        display: inline-block;
        margin-right: 10px;
    }

    .circle.credit {
        background-color: green;
    }

    .circle.debit {
        background-color: red;
    }

    .draggable {
        background-color: #d6b1f2;
        padding: 5px;
        border-radius: 8px;
        cursor: grab;
        display: inline-block;
    }

    /* Back Button */
    .back-button {
        margin-top: 40px;
        padding: 10px 20px;
        height: 2.6rem;
        font-size: 0.8rem;
        background-color: #d6b1f2;
        border: none;
        color: white;
        border-radius: 5px;
        cursor: pointer;
    }

    .back-button:hover {
        background-color: #c29ae1;
    }

    /* For hidden transaction rows */
    .hidden-row {
        display: none;
    }

    .expanded {
        display: table-row;
    }

    .feature-section{
    padding-top:150px;
    text-align: center;
  }

    </style>
</body>
</html>
