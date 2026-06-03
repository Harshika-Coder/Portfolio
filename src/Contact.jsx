import "./style.css";

function Contact() {
  return (
    <div className="contact">
      <h2 id="contact">Contact Me</h2>
      <ul>
        <li>
          ✉️Email me:
          <a href="mailto:chaurasiaharshika2612@gmail.com">
            chaurasiaharshika2612@gmail.com
          </a>
        </li>
        <li>
          📞Contact Number: <a href="tel:+919984898871">+91-9984898871</a>
        </li>
        <li>
          🔗LinkedIn:
          <a
            href="https://www.linkedin.com/in/harshika-chaurasia-979601247/"
            target="_blank"
            rel="noreferrer noopener"
          >
            LinkedIn Profile
          </a>
        </li>
        <li>
          💻GitHub:
          <a
            href="https://github.com/Harshika-Coder"
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub Profile
          </a>
        </li>
        <li>
          🔗Naukari:
          <a
            href="https://www.naukri.com/mnjuser/profile"
            target="_blank"
            rel="noreferrer noopener"
          >
            Naukri Profile
          </a>
        </li>
      </ul>
      <hr />
    </div>
  );
}
export default Contact;
