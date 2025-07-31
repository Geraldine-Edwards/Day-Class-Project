# User Stories for Support Services Website

This document outlines user stories for both individuals seeking support and support organisation workers. It follows the SDL structure and includes acceptance criteria and development tasks.

---

## User Stories: Individuals Seeking Support

---

### ✅ User Story 1: Account Creation & Access

**As an** individual seeking support,  
**I want to** create a simple account and log in,  
\*\*so that I can securely access personalised support recommendations based on my situation.

**Acceptance Criteria:**

- Users must create an account with email and password.
- Users must confirm they are 18 or older.
- After login, users are taken to a screening questionnaire.
- User sessions are securely handled.

**Tasks:**

- [ ] Set up user registration and login functionality.
- [ ] Enforce age check as part of account creation.
- [ ] Implement secure session handling.
- [ ] Redirect users to screening page after login.

---

### ✅ User Story 2: Screening Process

**As an** individual seeking support,  
**I want to** answer a short set of questions about my circumstances,  
\*\*so that the site can provide me with the most relevant support services.

**Acceptance Criteria:**

- Screening includes questions such as location, employment status, housing status, and family situation.
- Questions are clear, accessible, and skippable where appropriate.
- Based on answers, users are matched to filtered support categories (e.g. food, benefits, housing).
- Users can revisit and update their answers.

**Tasks:**

- [ ] Design screening questionnaire UX and backend logic.
- [ ] Map responses to relevant support categories.
- [ ] Build database logic to return relevant services.
- [ ] Allow users to retake or update their screening.

---

### ✅ User Story 3: Accessing Tailored Support

**As an** individual who completed the screening,  
**I want to** view a tailored list of services,  
\*\*so that I can easily access the support I need without confusion or irrelevant results.

**Acceptance Criteria:**

- Users see a results page with services grouped by need (e.g. childcare, housing, food, etc.).
- Each listing includes: service name, summary, contact info, and eligibility notes (e.g. referral required).
- Results can be bookmarked or saved in the user dashboard.
- Users can navigate to full service detail pages.

**Tasks:**

- [ ] Create results page template grouped by category.
- [ ] Display service metadata (eligibility, access, contact info).
- [ ] Implement bookmarking/saving feature.
- [ ] Create dashboard view for saved services and results history.

---

## User Stories: Support Organisation Workers

---

### ✅ User Story 4: Quick Search Without Screening

**As a** support organisation worker,  
**I want to** search and browse services without logging in,  
\*\*so that I can quickly find and share information with clients in real time.

**Acceptance Criteria:**

- No login required for organisation workers.
- Services are searchable by category, postcode, and access type.
- Listings can be printed or shared via link.

**Tasks:**

- [ ] Build public-facing search and filter tool.
- [ ] Add print and share functionality for listings.
- [ ] Differentiate logged-in vs guest user flows.

---

### ✅ User Story 5: Accurate and Verified Listings

**As a** support organisation worker,  
**I want to** trust that service information is accurate and up to date,  
\*\*so that I can give clients reliable advice.

**Acceptance Criteria:**

- Services have a “last verified” date.
- Admin team can update and flag out-of-date listings.
- Organisations can submit updates or report errors.

**Tasks:**

- [ ] Display verification metadata on service listings.
- [ ] Build admin interface for service updates.
- [ ] Add “Suggest an edit” or “Report this service” feature.

---

---

<br>
<br>
<br>
<br>

## Age Restriction Handling

This platform is designed to support **adults aged 18 and over only**. The following measures are in place to manage access responsibly:

### Age Gate Process

- Users must actively confirm they are 18 or older during sign-up or before screening.
- If a user selects “No” to being over 18:
  - No account is created.
  - No data is stored.
  - The user is redirected to a public information page with appropriate child/youth support links.

### Suggested Redirect Page Message

> ### This Service Is for Adults (18+) Only
>
> Unfortunately, this website is intended for adults only.  
> If you're under 18 and need help, you're not alone — here are some places you can turn to:
>
> - 📞 **Childline** – 0800 1111 (Free, confidential 24/7 helpline)
> - 🌍 **The Mix** – [themix.org.uk](https://www.themix.org.uk) (Support for under-25s)
> - 🏡 **Local Authority Social Services**
>
> If you are in immediate danger, call **999** or visit your nearest **A&E**.

### Responsibility & Limitations

- Users may still misrepresent their age. This is common and difficult to prevent.
- The site mitigates this by:
  - Being explicit in its Terms of Use and Privacy Policy.
  - Preventing underage users from proceeding beyond the age gate.
  - Not collecting data from under-18s.

---
