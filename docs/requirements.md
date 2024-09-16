## Functional Requirements

- **Users can create accounts.**
- **Users can log in using their email.**
- **Users can view all featured menus.**
- **Users can search for menus and specific home chef restaurants.**
- **Users can add, update, or remove payment methods.**
- **Users receive notifications when their food is being prepared and when it is ready.**
- **Users can favorite home chefs.**
- **Users can add, edit, or remove items from their shopping cart.**
- **Users can view their past orders.**
- **Users can see which menus they frequent.**
- **Users can preorder from a shop when it is closed.**
- **Users can leave feedback for home chefs.**
- **Users can apply filters (e.g., cuisine type, dietary restrictions) when searching for menus.**
- **Users can set dietary preferences or allergens to receive personalized menu suggestions.**
- **Users can customize orders (e.g., add notes for special instructions).**
- **Users can invite friends to the platform and earn referral rewards.**
- **Users can request refunds or report issues with orders through the app.**
- **Users can sort and filter search by relevance**
- **Users can search by location.**
- **Users can chat with Home Cooks.**

- **Home Cooks can add/update/delete menus.**
- **Home Cooks can have multiple restaurants.**
- **Home Cooks can set their location(s).**
- **Home Cooks can alter open times.**
- **Home Cooks can alter availability.**
- **Home Cooks can see a daily/weekly/annual report of transactions.**
- **Home Cooks can see which items do favorable**
- **Home Cooks can see how they rank compared to other home cooks.**
- **Home Cooks can request for mentor help.**
- **Home Cooks can chat with users.**
- **Home Cooks can post images/videos.**
- **Home Cooks can create polls.**


## Non-Functional Requirements

### Performance:
- The platform should load all main pages within 3 seconds under normal network conditions to ensure a smooth user experience.
- The system should respond to user interactions (e.g., button clicks, form submissions) within 200 milliseconds to maintain a responsive user experience.

### Scalability:
- The system must support up to 100,000 concurrent users without performance degradation to accommodate future growth.
- The system should be capable of supporting at least 1,000 new user registrations per hour without affecting performance.

### Security:
- All user data, including personal information and payment details, must be encrypted using industry-standard encryption methods (e.g., AES-256).

### Availability:
- The platform should have an uptime of 99.9% to ensure that services are reliably available to users at all times.

### Usability:
- The user interface should be intuitive and easy to navigate, with a goal of users completing the onboarding process within 5 minutes without external help.

### Compliance:
- The platform must comply with relevant food safety regulations and data privacy laws, including GDPR and CCPA, to protect user rights and information.

### Maintainability:
- The system should be designed with modular architecture to allow updates and maintenance to be performed with minimal disruption to the service.
- The application should be built using a modular architecture, allowing individual components or services to be updated, replaced, or scaled independently.

### Reliability:
- The notification system must deliver at least 99% of notifications on time, ensuring users are kept informed about order statuses.
- For real-time features such as order tracking, the system should maintain a latency of less than 500 milliseconds to ensure timely updates for users.

### Accessibility:
- The platform should meet WCAG 2.1 Level AA standards to ensure it is accessible to users with disabilities, including those using screen readers.

### Supportability:
- The system should include logging and monitoring capabilities to enable easy troubleshooting and ensure efficient support operations for users and home chefs.

### Data Backup and Recovery:
- The platform must perform daily backups of all critical data and have a recovery time objective (RTO) of less than 1 hour in the event of data loss or corruption.
- User and home cook chat data must be stored locally to enhance privacy and reduce dependency on external storage services.


### Cross-Platform Compatibility:
- The platform should be compatible with all major browsers (Chrome, Firefox, Safari, Edge) and support both iOS and Android devices for mobile users.

### Localization:
- The system should support multiple languages and regional settings to cater to a diverse user base, with a focus on English, Bahasa Indonesia, and other relevant languages.

### Extensibility:
- The platform should be designed to easily incorporate new features and integrations with third-party services without significant changes to the existing architecture.

### Energy Efficiency:
- The mobile app should be optimized to minimize battery usage, ensuring that it does not excessively drain the device’s power during normal operation.

### Data Retention:
- User data, including order history and personal preferences, should be retained for at least 2 years, with options for users to access or delete their data in compliance with privacy regulations.

