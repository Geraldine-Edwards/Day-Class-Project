 const showTheContent = (page)=>{
          let content = {
            home:`
            <div class = "flex items-center justify-between gap-6 mt-4 ml-4 mr-4 mb-4">
                <div class = "w-1/2 text-gray-700 mt"
                    <h1> WELCOME TO <strong>You're not alone!</strong></h1>
                    <p>Whether you’re facing food insecurity, housing issues, or financial hardship —<strong>you’re not alone</strong>. Discover the support available near you.</p>
                </div>
                <img src="/static/images/help.jpg" alt="Example image" class="w-1/2 max-w-sm object-contain ">

            </div>`,
            about:`
            <div class = "m-8,m-8,m-8,m-8">
                <p>
                    We are a small but passionate charity dedicated to making a meaningful difference in the lives of those who need it most. 
                </p>
                <p>
                    Founded in 2025, our mission is to [briefly state your purpose — e.g., "support vulnerable children", "provide meals for the homeless", or "promote education in underserved communities"].
                </p>
                <p>
                    We believe that everyone deserves dignity, opportunity, and hope. That's why we work closely with communities, volunteers, and partners to deliver real impact where it matters most.
                </p>
                <p>
                    Every donation we receive goes directly toward programs that change lives — whether it's through [examples: "emergency aid", "educational support", "health services", or "skill-building workshops"].
                </p>
                <p>
                    Thank you for being part of our journey. Together, we can build a more compassionate and fair world.
                </p>
            </div>`
          ,
          contact:`
                <div>
                    <h1>Contact Us</h1>
                    <p>If you have any questions, want to volunteer, or would like to support our cause, we'd love to hear from you.</p>
                    
                    <p>
                        📧 Email: <a href="mailto:info@YouAreNotalone.org">info@YouAreNotalone.org</a><br>
                        ☎️ Phone: <a href="tel:+441234567890">+44 1234 567 632</a><br>
                        📍 Address: James building, Manchester, UK
                    </p>

                    <p>Or fill out our contact form below:</p>

                    <form>
                        <label for="name">Name:</label><br>
                        <input type="text" id="name" name="name" required><br><br>

                        <label for="email">Email:</label><br>
                        <input type="email" id="email" name="email" required><br><br>

                        <label for="message">Message:</label><br>
                        <textarea id="message" name="message" rows="5" required></textarea><br><br>

                        <button type="submit">Send Message</button>
                    </form>
                    </div>`
        }
        document.getElementById("content").innerHTML = content[page]


    if (page === "home") {
    const supportBtn = document.getElementById("GetSupportNow");
    if (supportBtn) {
     supportBtn.addEventListener("click", () => {
  
    window.location.href = 'eligibility.html'; 
  });

     
    }
  }
 }

