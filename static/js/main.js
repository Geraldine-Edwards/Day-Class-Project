window.addEventListener("DOMContentLoaded", () => {
  showTheContent("home");
});
const showTheContent = (page) => {
  let content = {
    home: `
   
            <div class="w-full h-screen bg-gray-100 bg-[url(/static/images/helping.jpg)] bg-cover bg-no-repeat p-12 relative"> 
            <div class="pt-[5rem]">
            <h1>hello Rahwa</h1></div>
              <div class="absolute bottom-[40px] left-[40px] h-[200px] w-[300px] border border-grey-100 overflow-hidden">
                <iframe class="w-full h-full" src="https://www.youtube.com/embed/We2ZD0-IXPM" title="Investigating the Tesla Robotaxi!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              </div>
            </div>
            
          `,
    about: `
            <div class = "">
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
              </div>
              <button
                  onclick="showTheContent('support')"
                  type="button"
                  class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Get Support Now
              </button>
      `,
    contact: `
                <div class="">
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
                    </div>`,
    support: `
                <div class="">
                  <h1 class="text-3xl font-bold mb-4">Support Services Available</h1>
                  <p class="mb-4">We offer a range of support services to help you in your time of need. Our dedicated team is here to assist you with:</p>
                  <ul class="list-disc list-inside mb-4">
                    <li><a href="#" class="text-blue-600 underline hover:text-blue-800" onclick="showTheContent('food'); renderOrganisations('food')">Food</a></li>
                    <li><a href="#" class="text-blue-600 underline hover:text-blue-800" onclick="showTheContent('housing');renderOrganisations('housing')">Housing</a></li>
                    <li><a href="#" class="text-blue-600 underline hover:text-blue-800" onclick="showTheContent('children'); renderOrganisations('children')">Children</a></li>
                    <li><a href="#" class="text-blue-600 underline hover:text-blue-800" onclick="showTheContent('benefits'); renderOrganisations('benefits')">Benefits</a></li>
                    <li><a href="#" class="text-blue-600 underline hover:text-blue-800" onclick="showTheContent('employment'); renderOrganisations('employment')">Employment</a></li>
                    <li><a href="#" class="text-blue-600 underline hover:text-blue-800" onclick="showTheContent('advice'); renderOrganisations('advice')">Advice</a></li>
                  </ul>
                  <p class="mb-4">If you or someone you know is in need of support, please don't hesitate to reach out to us. We're here to help!</p>
              </div>`,
    food: `
              <div class="flex flex-col md:flex-row items-start gap-x-6 mb-6 ">
                <button
                    onclick="showTheContent('support')"
                    type="button"
                    class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-4 md:mb-0 md:mr-6 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    Back to Support Services
                </button>
                <div class="flex-1">
                  <h1 class="text-3xl font-bold mb-4">Food Support Organisations</h1>
                  <p class="mb-4">Here you can find information about food support organisations in your area.</p>
                  <div id="org-list"></div>
                </div>
              </div>
          `,
    housing: `
              <div class="flex flex-col md:flex-row items-start gap-x-6 mb-6">
                <button
                    onclick="showTheContent('support')"
                    type="button"
                    class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-4 md:mb-0 md:mr-6 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    Back to Support Services
                </button>
                <div class="flex-1">
                  <h1 class="text-3xl font-bold mb-4">Housing Support Organisations</h1>
                  <p class="mb-4">Here you can find information about housing support organisations in your area.</p>
                  <div id="org-list"></div>
                </div>
              </div>
      `,
    children: `
              <div class="flex flex-col md:flex-row items-start gap-x-6 mb-6">
                <button
                    onclick="showTheContent('support')"
                    type="button"
                    class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-4 md:mb-0 md:mr-6 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    Back to Support Services
                </button>
                <div class="flex-1">
                  <h1 class="text-3xl font-bold mb-4">Children's Support Organisations</h1>
                  <p class="mb-4">Here you can find information about children's support organisations in your area.</p>
                  <div id="org-list"></div>
                </div>
              </div>
          `,
    benefits: `
              <div class="flex flex-col md:flex-row items-start gap-x-6 mb-6">
                <button
                    onclick="showTheContent('support')"
                    type="button"
                    class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-4 md:mb-0 md:mr-6 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    Back to Support Services
                </button>
                <div class="flex-1">
                  <h1 class="text-3xl font-bold mb-4">Benefits Support Organisations</h1>
                  <p class="mb-4">Here you can find information about benefits support organisations in your area.</p>
                  <div id="org-list"></div>
                </div>
              </div>
          `,
    employment: `
              <div class="flex flex-col md:flex-row items-start gap-x-6 mb-6">
                <button
                    onclick="showTheContent('support')"
                    type="button"
                    class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-4 md:mb-0 md:mr-6 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    Back to Support Services
                </button>
                <div class="flex-1">
                  <h1 class="text-3xl font-bold mb-4">Employment Support Organisations</h1>
                  <p class="mb-4">Here you can find information about employment support organisations in your area.</p>
                  <div id="org-list"></div>
                </div>
              </div>
          `,
    advice: `
              <div class="flex flex-col md:flex-row items-start gap-x-6 mb-6">
                <button
                    onclick="showTheContent('support')"
                    type="button"
                    class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-4 md:mb-0 md:mr-6 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    Back to Support Services
                </button>
                <div class="flex-1">
                  <h1 class="text-3xl font-bold mb-4">Advice Support Organisations</h1>
                  <p class="mb-4">Here you can find information about advice support organisations in your area.</p>
                  <div id="org-list"></div>
                </div>
              </div>
          `,
  };
  document.getElementById("content").innerHTML = content[page];
};

// fetch and cache the data for organisations (not using localStorage yet for MVP simplicity)
// use .then()/.catch() for simplicity while mvp functionality is minimal 0 may switch to async/await with try/catchlater if functionality increases
let organisationsData = null;

const fetchOrganisations = async (type) => {
  // if data is already cached, return it
  if (organisationsData) return organisationsData;
  //  or fetch it from the JSON file
  try {
    // wait for the fetch to complete
    const response = await fetch("organisations.JSON");
    // then parse the response as JSON
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    // cache the organisations data
    organisationsData = data.organisations;
    // return the organisations data
    return organisationsData;
  } catch (error) {
    // handle any errors that occur during the fetch
    console.error("Failed to fetch organisations:", error);
  }
};

// render organisations for a given type (e.g., "food", "housing")
function renderOrganisations(type) {
  // use the function to fetch organisations then pass the filtered results by organisation type to HTML
  fetchOrganisations().then((orgs) => {
    const filtered = orgs.filter((org) => org.type === type);
    const html = filtered
      .map(
        (org) => `
      <div class="border rounded p-4 mb-4 bg-white shadow">
        <h2 class="text-xl font-semibold mb-2">${org.name}</h2>
        <p><strong>Address:</strong> ${org.address}</p>
        <p><strong>Contact:</strong> ${org.contact}</p>
        <p><strong>Email:</strong> <a href="mailto:${org.email}" class="text-blue-600 underline">${org.email}</a></p>
        <p><strong>Website:</strong> <a href="${org.website}" target="_blank" class="text-blue-600 underline">${org.website}</a></p>
      </div>
    `
      )
      .join("");
    document.getElementById("org-list").innerHTML =
      html || "<p>No organisations found for this service.</p>";
  });
}
