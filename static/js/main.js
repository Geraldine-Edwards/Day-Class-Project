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
    about: `
            <div class = "max-w-5xl mx-auto">
                <h1 class="text-3xl font-bold mb-4"> About Us</h1>
                <p class="mb-4">
                    We are a small but passionate charity dedicated to making a meaningful difference in the lives of those who need it most. 
                </p>
                <p class="mb-4">
                    Founded in 2025, our mission is to [briefly state your purpose — e.g., "support vulnerable children", "provide meals for the homeless", or "promote education in undeserved communities"].
                </p>
                <p class="mb-4">
                    We believe that everyone deserves dignity, opportunity, and hope. That's why we work closely with communities, volunteers, and partners to deliver real impact where it matters most.
                </p>
                <p class="mb-4">
                    Every donation we receive goes directly toward programs that change lives — whether it's through [examples: "emergency aid", "educational support", "health services", or "skill-building workshops"].
                </p>
                <p class="mb-4">
                    Thank you for being part of our journey. Together, we can build a more compassionate and fair world.
                </p>
            </div>`,
    contact: `
                <div class="max-w-5xl mx-auto">
                    <h1 class="text-3xl font-bold mb-4">Contact Us</h1>
                    <p class="mb-4">If you have any questions, want to volunteer, or would like to support our cause, we'd love to hear from you.</p>
                    
                    <address class="not-italic mb-4">
                        📧 Email: <a href="mailto:info@YouAreNotalone.org">info@YouAreNotalone.org</a><br>
                        ☎️ Phone: <a href="tel:+441234567890">+44 1234 567 632</a><br>
                        📍 Address: James building, Manchester, UK
                    </address>
                    <p class="mb-4">Or fill out our contact form below:</p>
                    <form>
                        <label for="name">Name:</label><br>
                        <input type="text" id="name" name="name" required class="border border-gray-300 rounded px-3 py-2 mb-4"><br><br>
                        <label for="email">Email:</label><br>
                        <input type="email" id="email" name="email" required class="border border-gray-300 rounded px-3 py-2 mb-4"><br><br>
                        <label for="message">Message:</label><br>
                        <textarea id="message" name="message" rows="5" required class="border border-gray-300 rounded px-3 py-2 mb-4"></textarea><br><br>
                        <button type="submit" class="bg-blue-600 text-white rounded px-4 py-2">Send Message</button>
                    </form>
                    </div>`
        }
        document.getElementById("content").innerHTML = content[page]
    }

