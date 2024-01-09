function Footer() {
    return (
        <footer>
        <div style={{ width: '100%', height: 194, display: "flex", backgroundColor: '#EBEEEF' }}>
            <div style={{ marginLeft: '2rem', fontSize: 11, textAlign: "left", color: "black" }}>
                <h2>POPULAR CATEGORIES</h2>
                <p style={{ margin: '0 0 5px 0' }}>Cars</p>
                <p style={{ margin: '0 0 5px 0' }}>Flats for rent</p>
                <p style={{ margin: '0 0 5px 0' }}>Mobile Phones</p>
                <p style={{ margin: '0 0 5px 0' }}>Jobs</p>
            </div>
            <div style={{ marginLeft: '5rem', fontSize: 11, textAlign: "left", color: "black" }}>
                <h2>TRENDING SEARCHES</h2>
                <p style={{ margin: '0 0 5px 0' }}>Bikes</p>
                <p style={{ margin: '0 0 5px 0' }}>Watches</p>
                <p style={{ margin: '0 0 5px 0' }}>Books</p>
                <p style={{ margin: '0 0 5px 0' }}>Dogs</p>
            </div>
            <div style={{ marginLeft: '5rem', fontSize: 11, textAlign: "left", color: "black" }}>
                <h2>ABOUT US</h2>
                <p style={{ margin: '0 0 5px 0' }}>About Dubizzle Group</p>
                <p style={{ margin: '0 0 5px 0' }}>OLX Blog</p>
                <p style={{ margin: '0 0 5px 0' }}>Contact Us</p>
                <p style={{ margin: '0 0 5px 0' }}>OLX for Businesses</p>
            </div>
            <div style={{ marginLeft: '5rem', fontSize: 11, textAlign: "left", color: "black" }}>
                <h2>OLX</h2>
                <p style={{ margin: '0 0 5px 0' }}>Help</p>
                <p style={{ margin: '0 0 5px 0' }}>Sitemap</p>
                <p style={{ margin: '0 0 5px 0' }}>Terms of use</p>
                <p style={{ margin: '0 0 5px 0' }}>Privacy Policy</p>
            </div>

        </div>

        <div style={{ width: '100%', height: 50, backgroundColor: '#002F34', color: "white", fontSize: 12.4 }}>
            <p style={{ textAlign: "right", marginRight: 30, padding: '1rem' }}>Free Classifieds in Pakistan . © 2006-2024 OLX</p>

        </div>

    </footer>
    )
}

export default Footer;