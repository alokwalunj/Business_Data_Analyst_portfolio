# PRD: Alok Walunj Portfolio

## Original Problem Statement
Build a single-page portfolio website for Alok Walunj (Business Data Analyst) with sections: Hero → Featured Projects → Ongoing Project → Skills/Tools → Contact. Use the uploaded images as proof of work with 16:9 thumbnails, a bold modern data-analytics theme (now black background with teal/blue accent), and provide copy-to-clipboard buttons for email and phone.

## Architecture Decisions
- Frontend-only React single-page layout with anchored scroll sections and sticky glassmorphism navbar.
- Tailwind styling with custom CSS for hero grid and skills marquee animation.
- Sonner toasts for copy-to-clipboard feedback.
- Images pulled directly from uploaded asset URLs; AspectRatio for 16:9 thumbnails.

## Implemented
- Hero section with bio, core skills chips, CTA buttons, and quick links.
- Featured Projects bento grid with three project cards and repo links.
- Ongoing Project section for CareBot with status pill, preview image, and live demo link.
- Skills & Tools marquee/ticker with duplicated scroll.
- Contact section with email/phone display and copy buttons plus social links.
- Black background theme with teal accents; responsive typography (Poppins + Inter).

## Prioritized Backlog
- P0: None (core scope delivered).
- P1: Add downloadable resume button and optional case-study modals.
- P1: Add smooth scroll offsets for sticky header (enhanced anchor behavior).
- P2: Optional contact form integration (Formspree/Resend).
- P2: Optional light-mode toggle and analytics tracker.

## Next Tasks
- Confirm final copy, add resume file if desired, and validate on mobile devices.