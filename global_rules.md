# Accessibility Guidelines for Arto Admin App (Updated 2025)

This document outlines the accessibility requirements that must be followed for all code written in this project. These guidelines are based on the Web Content Accessibility Guidelines (WCAG) 2.2, focusing on Level A (must have) and Level AA (should have) success criteria.

## General Principles

All components, pages, and features must adhere to the following four principles of accessibility:

1. **Perceivable**: Information and user interface components must be presentable to users in ways they can perceive.
2. **Operable**: User interface components and navigation must be operable.
3. **Understandable**: Information and the operation of the user interface must be understandable.
4. **Robust**: Content must be robust enough that it can be interpreted by a wide variety of user agents, including assistive technologies.

## Level A Requirements (Must Have)

### 1. Text Alternatives
- **1.1.1 Non-text Content**: All non-text content (images, icons, etc.) must have text alternatives that serve the equivalent purpose.
  - All `<img>` elements must have meaningful `alt` attributes (not just present, but contextually appropriate).
  - SVG icons must have `aria-label` or be properly labeled with `aria-labelledby`.
  - Decorative images should have `alt=""` to be ignored by screen readers.
  - **AI-Testable**: Automated tools can detect missing alt attributes and evaluate text quality using NLP.
  - **Manual Required**: Context appropriateness and meaning evaluation still needs human judgment.

### 2. Time-based Media
- **1.2.1 Audio-only and Video-only**: Provide alternatives for time-based media.
- **1.2.2 Captions**: Provide captions for all pre-recorded audio content.
- **1.2.3 Audio Description or Media Alternative**: Provide audio description or text alternative for video content.
  - **AI-Testable**: Can detect presence of caption tracks and alternative content.
  - **Manual Required**: Quality and accuracy of captions and descriptions.

### 3. Adaptable Content
- **1.3.1 Info and Relationships**: Information, structure, and relationships conveyed through presentation can be programmatically determined.
  - Use semantic HTML elements (`<header>`, `<nav>`, `<main>`, `<section>`, etc.).
  - Use proper heading hierarchy (`<h1>` through `<h6>`).
  - Associate form labels with inputs using `htmlFor` and `id` attributes.
  - Use `<table>` elements for tabular data with proper headers.
  - **AI-Testable**: Full structural analysis, heading hierarchy validation, semantic relationship detection.

- **1.3.2 Meaningful Sequence**: Present content in a meaningful sequence.
  - Ensure reading order in the DOM matches visual order.
  - Avoid CSS that changes the visual order from the DOM order.
  - **AI-Testable**: Visual AI can now compare DOM order to visual presentation order.

- **1.3.3 Sensory Characteristics**: Don't rely solely on sensory characteristics (shape, color, size, location) for instructions.
  - Don't use "click the blue button" without additional context.
  - Don't use "the menu on the left" without additional identifiers.
  - **AI-Testable**: NLP can identify sensory-only instructions in content.

### 4. Distinguishable Content
- **1.4.1 Use of Color**: Don't use color as the only visual means of conveying information.
  - Always pair color with another visual indicator (icon, text, pattern).
  - Ensure error states have text and not just color changes.
  - **AI-Testable**: Advanced pattern recognition can detect color-only information conveyance.

- **1.4.2 Audio Control**: Provide user control for audio that plays automatically.
  - **AI-Testable**: Can detect autoplay attributes and control presence.
  - **Manual Required**: Functional testing of controls.

### 5. Keyboard Accessible
- **2.1.1 Keyboard**: All functionality must be operable through a keyboard interface.
  - Ensure all interactive elements can be reached and activated with Tab key.
  - Custom components must handle keyboard events appropriately.
  - No keyboard traps where focus cannot escape.
  - **AI-Testable**: Can detect missing keyboard event handlers, improper tabindex usage, and potential keyboard traps.
  - **Manual Required**: Full keyboard navigation flow testing and complex interaction validation.

- **2.1.2 No Keyboard Trap**: Ensure keyboard focus can move away from components.
  - Modal dialogs must trap focus while open but release it when closed.
  - Test all interactive widgets with keyboard-only navigation.
  - **AI-Testable**: Pattern recognition for focus trap implementations.
  - **Manual Required**: Dynamic focus management testing.

- **2.1.4 Character Key Shortcuts**: If shortcuts use single character keys, they must be able to be turned off, remapped, or active only on focus.
  - **AI-Testable**: Can detect keyboard event listeners and shortcut implementations.

### 6. Enough Time
- **2.2.1 Timing Adjustable**: Users must be able to adjust or extend time limits.
  - Session timeouts must have warnings and extension options.
  - Auto-updating content should have pause/stop controls.
  - **AI-Testable**: Can detect timeout implementations and control presence.
  - **Manual Required**: Functional testing of timing controls.

- **2.2.2 Pause, Stop, Hide**: Provide controls for moving, blinking, or auto-updating content.
  - Carousels must have pause controls.
  - Animations that start automatically must be able to be paused.
  - **AI-Testable**: Advanced motion detection and control presence analysis.

### 7. Seizures and Physical Reactions
- **2.3.1 Three Flashes or Below Threshold**: Content must not flash more than three times per second.
  - Avoid rapid flashing animations or transitions.
  - **AI-Testable**: Motion analysis can detect flashing frequencies and potentially dangerous animations.

### 8. Navigable
- **2.4.1 Bypass Blocks**: Provide a way to bypass blocks of repeated content.
  - Implement "Skip to main content" links.
  - Use proper landmark regions.
  - **AI-Testable**: Can detect skip link presence and landmark structure.

- **2.4.2 Page Titled**: Pages must have titles that describe topic or purpose.
  - Every page must have a unique, descriptive `<title>` element.
  - Single-page applications must update the title when content changes.
  - **AI-Testable**: Can analyze title presence, uniqueness, and descriptiveness using NLP.

- **2.4.3 Focus Order**: Components receive focus in an order that preserves meaning.
  - Tab order must follow logical reading order.
  - Modal dialogs must manage focus correctly.
  - **AI-Testable**: Can compare visual layout to DOM tab order.
  - **Manual Required**: Complex focus flow validation in dynamic content.

- **2.4.4 Link Purpose**: The purpose of each link can be determined from the link text alone.
  - Avoid "click here" or "read more" without context.
  - Use descriptive link text that makes sense out of context.
  - **AI-Testable**: NLP can evaluate link text descriptiveness and context.

### 9. Input Modalities
- **2.5.1 Pointer Gestures**: All functionality using multipoint or path-based gestures can be operated with a single pointer.
  - Provide alternative simple tap or click operations for complex gestures.
  - **AI-Testable**: Can detect complex gesture implementations and alternative controls.

- **2.5.2 Pointer Cancellation**: Functions triggered by pointer down events can be aborted or undone.
  - Use `onclick` rather than `onmousedown` for actions.
  - Allow users to move away from an element before releasing to cancel.
  - **AI-Testable**: Can analyze event handler patterns.

- **2.5.3 Label in Name**: The accessible name of UI elements containing text includes the visible text.
  - Button labels must match their visible text.
  - Aria labels should include the visible text.
  - **AI-Testable**: Can compare visible text with programmatic names.

- **2.5.4 Motion Actuation**: Functionality triggered by motion can also be operated by UI components.
  - Any feature using device motion must have alternative controls.
  - **AI-Testable**: Can detect motion event listeners and alternative controls.

### 10. Readable
- **3.1.1 Language of Page**: The default human language of the page can be programmatically determined.
  - Set the `lang` attribute on the `<html>` element.
  - **AI-Testable**: Can detect language attributes and validate language codes.

### 11. Predictable
- **3.2.1 On Focus**: Elements do not change context when they receive focus.
  - Don't automatically submit forms when an input receives focus.
  - Don't open new windows when an element receives focus.
  - **AI-Testable**: Can detect focus event handlers that may change context.

- **3.2.2 On Input**: Changing a setting does not automatically change context unless the user is advised.
  - Don't submit forms when selecting an option from a dropdown.
  - Warn users before changing context based on their input.
  - **AI-Testable**: Can analyze input event handlers and form submission patterns.

### 12. Input Assistance
- **3.3.1 Error Identification**: Input errors are identified and described to the user.
  - Clearly mark form fields with errors.
  - Provide text descriptions of what's wrong.
  - **AI-Testable**: Can detect error messaging patterns and validation structures.
  - **Manual Required**: Error message clarity and helpfulness evaluation.

- **3.3.2 Labels or Instructions**: Provide labels or instructions for user input.
  - All form controls must have associated labels.
  - Complex inputs must have clear instructions.
  - **AI-Testable**: Can detect label associations and evaluate instruction clarity with NLP.

### 13. Compatible
- **4.1.1 Parsing**: Use valid, well-formed markup.
  - No duplicate IDs.
  - Properly nested elements.
  - Complete start and end tags.
  - **AI-Testable**: Full HTML validation and advanced parsing analysis.

- **4.1.2 Name, Role, Value**: For all UI components, the name, role, and value can be programmatically determined.
  - Use appropriate ARIA roles and attributes for custom components.
  - Ensure state changes are communicated to assistive technologies.
  - **AI-Testable**: Can analyze ARIA implementation patterns and state management.

## Level AA Requirements (Should Have)

### 1. Time-based Media
- **1.2.4 Captions (Live)**: Provide captions for all live audio content.
- **1.2.5 Audio Description**: Provide audio description for all pre-recorded video content.
  - **AI-Testable**: Can detect live caption implementations.
  - **Manual Required**: Quality assessment of live captions.

### 2. Adaptable Content
- **1.3.4 Orientation**: Content does not restrict view to a single display orientation.
  - Don't lock the display to portrait or landscape mode.
  - Ensure content works in any orientation.
  - **AI-Testable**: Can detect orientation restrictions and test responsive behavior.

- **1.3.5 Identify Input Purpose**: The purpose of form inputs can be programmatically determined.
  - Use appropriate `autocomplete` attributes on form fields.
  - Use appropriate input types (`email`, `tel`, etc.).
  - **AI-Testable**: Can validate autocomplete attributes and input types.

### 3. Distinguishable Content
- **1.4.3 Contrast (Minimum)**: Text and images of text have a contrast ratio of at least 4.5:1.
  - Regular text must have 4.5:1 contrast ratio against its background.
  - Large text (18pt or 14pt bold) must have 3:1 contrast ratio.
  - Use tools like WebAIM's Contrast Checker to verify.
  - **AI-Testable**: Advanced contrast calculation including background images and gradients.

- **1.4.4 Resize Text**: Text can be resized up to 200% without loss of content or function.
  - Use relative units (em, rem) instead of fixed pixel sizes.
  - Test the UI at 200% zoom.
  - Avoid text in images where possible.
  - **AI-Testable**: Can simulate zoom scenarios and detect layout issues.

- **1.4.5 Images of Text**: Use text instead of images of text except where essential.
  - Avoid text in images for UI elements.
  - Use web fonts and CSS for styled text.
  - **AI-Testable**: Can detect text within images using OCR.

- **1.4.10 Reflow**: Content can be presented without loss of information or functionality at 320px width.
  - Ensure the application is responsive down to mobile sizes.
  - No horizontal scrolling at 320px width.
  - Test at 400% zoom on desktop.
  - **AI-Testable**: Can simulate viewport sizes and detect scrolling issues.

- **1.4.11 Non-text Contrast**: UI components and graphical objects have a contrast ratio of at least 3:1.
  - Buttons, form controls, and focus indicators need 3:1 contrast.
  - Essential graphics and icons need 3:1 contrast.
  - **AI-Testable**: Can measure UI component contrast ratios automatically.

- **1.4.12 Text Spacing**: No loss of content when text spacing is adjusted.
  - Content must work with increased line height, paragraph spacing, letter spacing, and word spacing.
  - Test with browser text spacing overrides.
  - **AI-Testable**: Can simulate text spacing changes and detect layout issues.

- **1.4.13 Content on Hover or Focus**: Additional content that appears on hover or focus is dismissible, hoverable, and persistent.
  - Tooltips and popovers must remain visible until dismissed.
  - Users must be able to move their cursor to the new content.
  - Content must not disappear when the user moves to it.
  - **AI-Testable**: Can detect hover/focus content patterns and analyze behavior.
  - **Manual Required**: Interactive behavior validation.

### 4. Navigable
- **2.4.5 Multiple Ways**: More than one way is available to locate a page.
  - Provide search, navigation menus, site maps, or tables of contents.
  - Ensure content can be found through multiple paths.
  - **AI-Testable**: Can analyze navigation structures and search implementations.

- **2.4.6 Headings and Labels**: Headings and labels describe topic or purpose.
  - Use clear, descriptive headings for sections.
  - Form labels must clearly describe the expected input.
  - **AI-Testable**: NLP can evaluate heading and label descriptiveness.

- **2.4.7 Focus Visible**: Keyboard focus indicator is visible.
  - Never remove the focus outline without providing an alternative.
  - Ensure focus states are clearly visible with good contrast.
  - Custom focus styles must be at least as visible as browser defaults.
  - **AI-Testable**: Visual analysis of focus indicators and contrast measurement.

### 5. Input Modalities
- **2.5.5 Target Size**: Interactive targets are at least 44x44 pixels.
  - Touch targets should be at least 44x44 pixels.
  - Small targets should have adequate spacing from other targets.
  - Exception for inline links in paragraphs.
  - **AI-Testable**: Can measure interactive element dimensions automatically.

- **2.5.6 Concurrent Input Mechanisms**: Content does not restrict use to a specific input mechanism.
  - Support both touch and mouse/keyboard input.
  - Don't disable any input methods.
  - **AI-Testable**: Can detect input method restrictions.

### 6. Readable
- **3.1.2 Language of Parts**: The human language of passages can be programmatically determined.
  - Mark up language changes within content using the `lang` attribute.
  - **AI-Testable**: Can detect language changes and validate language attributes.

### 7. Predictable
- **3.2.3 Consistent Navigation**: Navigation mechanisms are consistent across pages.
  - Keep navigation elements in the same relative order across pages.
  - Don't change the location of persistent navigation elements.
  - **AI-Testable**: Can analyze navigation consistency across pages/views.

- **3.2.4 Consistent Identification**: Components with the same functionality are identified consistently.
  - Use consistent icons and labels for the same functions.
  - Maintain consistent terminology throughout the application.
  - **AI-Testable**: Can analyze consistency of labels and icons across components.

### 8. Input Assistance
- **3.3.3 Error Suggestion**: Suggestions for error correction are provided.
  - Provide specific guidance on how to fix input errors.
  - Suggest correct formats or values when possible.
  - **AI-Testable**: NLP can evaluate error message helpfulness and suggestion quality.

- **3.3.4 Error Prevention**: For legal, financial, or data submissions, users can review, correct, or confirm submissions.
  - Provide confirmation steps for important actions.
  - Allow users to review and edit data before final submission.
  - Implement reversible actions where possible.
  - **AI-Testable**: Can detect confirmation patterns and review steps.
  - **Manual Required**: Workflow validation for critical processes.

### 9. Compatible
- **4.1.3 Status Messages**: Status messages can be programmatically determined without receiving focus.
  - Use ARIA live regions for status updates.
  - Use appropriate ARIA roles for alerts and status messages.
  - **AI-Testable**: Can detect live regions and status message patterns.

## WCAG 2.2 New Requirements

### Level AA Additional Requirements
- **2.4.11 Focus Not Obscured (Minimum)**: When a user interface component receives keyboard focus, it is not entirely hidden due to author-created content.
  - **AI-Testable**: Visual analysis can detect focus visibility issues.

- **2.4.12 Focus Not Obscured (Enhanced)**: When a user interface component receives keyboard focus, no part of it is hidden by author-created content.
  - **AI-Testable**: Complete focus visibility analysis.

- **2.4.13 Focus Appearance**: When the keyboard focus indicator is visible, it meets specific size and contrast requirements.
  - **AI-Testable**: Can measure focus indicator size and contrast automatically.

- **2.5.7 Dragging Movements**: All functionality that uses a dragging movement for operation can be achieved by a single pointer without dragging.
  - **AI-Testable**: Can detect drag-only interactions and alternative implementations.

- **2.5.8 Target Size (Minimum)**: Targets have an area of at least 24 by 24 CSS pixels.
  - **AI-Testable**: Can measure target sizes automatically.

### Level AAA Additional Requirements
- **3.2.6 Consistent Help**: If help is available on multiple pages, it occurs in a consistent relative order.
  - **AI-Testable**: Can analyze help content placement consistency.

- **3.3.7 Redundant Entry**: Information previously entered by or provided to the user is either auto-populated or available for selection.
  - **AI-Testable**: Can detect form patterns and auto-population implementations.

- **3.3.8 Accessible Authentication (Minimum)**: A cognitive function test is not required unless certain conditions are met.
  - **AI-Testable**: Can detect authentication patterns and cognitive load requirements.

## Implementation Guidelines

### Modern Testing Strategy

#### Phase 1: AI-Powered Analysis (60-70% coverage)
- **Automated structural analysis**: Semantic HTML, ARIA, form associations
- **Visual AI analysis**: Layout, contrast, focus states, responsive behavior
- **NLP content evaluation**: Alt text quality, error messages, instructions
- **Dynamic behavior detection**: SPA state changes, keyboard patterns
- **Cross-platform validation**: Multi-device and viewport testing

#### Phase 2: Targeted Manual Testing (30-40% coverage)
- **Keyboard navigation flows**: Complex interactions and focus management
- **Screen reader compatibility**: Critical user flows with NVDA/VoiceOver
- **Real user testing**: Edge cases and usability with assistive technologies
- **Context validation**: Content appropriateness and cognitive accessibility
- **Legal compliance verification**: Final conformance assessment

### Development Practices
- **AI-First Validation**: Run automated accessibility analysis during development
- **Semantic HTML Priority**: Use native elements before custom implementations
- **Focus Management**: Implement proper focus patterns for SPAs and modals
- **Responsive Accessibility**: Ensure accessibility at all viewport sizes
- **Performance Correlation**: Monitor accessibility impact on performance
- **Continuous Monitoring**: Set up automated regression testing

### React-Specific Guidelines
- Use fragments (`<>...</>`) instead of unnecessary divs.
- Ensure proper event handling for keyboard interactions.
- Use React's accessibility helpers like `aria-*` props.
- Implement focus management in modals and dialogs using useRef and useEffect.
- Use React's context API for managing focus traps.
- Leverage React 18's concurrent features for better screen reader experience.

### Material UI Specific Guidelines
- Use Material UI's accessibility features like `focusVisible`.
- Leverage built-in accessibility in MUI components.
- Customize components without breaking their accessibility features.
- Use theme customization to ensure proper contrast ratios.
- Utilize MUI's built-in ARIA patterns and keyboard navigation.

### Code Quality Standards
- **Meaningful Alt Text**: AI will flag generic alt text - ensure context-appropriate descriptions
- **Contrast Compliance**: Minimum 4.5:1 for normal text, 3:1 for large text and UI components
- **Keyboard Operability**: All interactive elements must be keyboard accessible
- **Focus Management**: Implement proper focus traps and restoration
- **Dynamic Content**: Use ARIA live regions for status updates
- **Responsive Design**: Ensure 320px width compatibility without horizontal scroll

## Resources
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [WCAG 2.2 Guidelines](https://www.w3.org/TR/WCAG22/)
- [A11y Project Checklist](https://www.a11yproject.com/checklist/)
- [React Accessibility Docs](https://reactjs.org/docs/accessibility.html)
- [Material UI Accessibility](https://mui.com/material-ui/guides/accessibility/)
- [axe DevTools](https://www.deque.com/axe/)
- [Lighthouse Accessibility Audit](https://developers.google.com/web/tools/lighthouse)
- [Pa11y Command Line Tool](https://pa11y.org/)

## Automated Testing Integration

### CI/CD Pipeline Requirements
1. **Automated axe-core scanning** on every pull request
2. **Lighthouse accessibility audit** for critical pages
3. **Pa11y integration** for comprehensive page scanning
4. **Visual regression testing** for focus states and responsive behavior
5. **Performance accessibility correlation** monitoring

### Development Workflow
1. **Pre-commit hooks**: Run accessibility linters
2. **AI analysis**: Automated issue identification during development
3. **Manual verification**: Focus on AI-identified high-risk areas
4. **User testing**: Prioritize based on AI risk assessment
5. **Continuous monitoring**: Track accessibility metrics over time

### Testing Prioritization
- **High Priority**: AI-identified issues that affect core user flows
- **Medium Priority**: Cosmetic accessibility improvements
- **Low Priority**: Edge case scenarios with minimal user impact

## Compliance Review Process
1. **Developers perform AI-assisted self-assessment** using automated tools
2. **Automated testing pipeline** runs comprehensive accessibility scans
3. **Manual testing focuses on AI-identified gaps** and complex interactions
4. **Accessibility issues prioritized** based on WCAG level and user impact
5. **Regular comprehensive audits** conducted on key user flows using combined AI and manual approaches

### Success Metrics
- **Automated coverage**: Aim for 70% of WCAG criteria automatically validated
- **Manual coverage**: 30% focused on critical user experience areas
- **Regression prevention**: Zero tolerance for accessibility regressions in automated tests
- **Performance correlation**: Maintain accessibility without performance degradation

Remember: Accessibility is not just about compliance—it's about creating an inclusive experience for all users. These guidelines leverage modern AI capabilities to catch more issues automatically while ensuring human expertise focuses on the most critical areas for user experience. The combination of AI and manual testing provides comprehensive coverage while optimizing team efficiency.