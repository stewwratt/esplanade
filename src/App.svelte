<script lang='ts'>
  import { animate, stagger } from 'motion';
  import { db } from './lib/firebase.js'; 
  import { collection, addDoc } from "firebase/firestore";
  import ChatAssistant from './components/ChatAssistant.svelte';
  import { createEventDispatcher } from 'svelte';




  let fullname = '';
  let number = '';
  let email = '';
  let formSubmitted = true; //change to false for prod
  let firstname = ''; // Will hold the extracted first name
  const dispatch = createEventDispatcher();


  function capitaliseFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  async function handleSubmit(event) {
    console.log("submit")
    event.preventDefault(); 

    fullname = event.target.fullname.value;
    firstname = capitaliseFirstLetter(fullname.split(' ')[0]);

    const data = {
        fullname: event.target.fullname.value,
        number: event.target.number.value,
        email: event.target.email.value
    };
    

    console.log("data", data)

    try {
        console.log("try")  
        const docRef = await addDoc(collection(db, 'contacts'), data);
        console.log("Document written with ID: ", docRef.id);
    } catch (error) {
        console.error("Error adding document: ", error);
    }

    formSubmitted = true;
    dispatch('formSubmitted');
    // // need to figure
    // try {
    //   const userName = document.getElementById('userName').value;

    //   // Call the createAssistant function with the user's name
    //   await createAssistant(userName);
    // } catch {
    //   console.error('Error creating assistant');
    // }
 
}
  
  function animateText(element: HTMLDivElement) {
    const text = element.innerText.trim().split(' ');
    const wordsPerLine = Math.ceil(text.length / 4);
    const formattedText: string[] = [];
    
    text.forEach((word, index) => {
      // Set initial opacity to 0 for each word
      formattedText.push(`<span style="opacity: 0">${word}</span>`);
      
      if ((index + 1) % wordsPerLine === 0 && index !== text.length - 1) {
        formattedText.push('<br>');
      }
    });
    
    element.innerHTML = formattedText.join(' ');

    const childrenArray = [...element.children];
    animate(childrenArray, { opacity: [0, 1] }, { duration: 3, delay: stagger(0.3) });

    setTimeout(() => {
      childrenArray.forEach(child => {
        const childText = (child as HTMLElement).textContent.trim();
        if (childText === "unparalleled" || childText.includes("efficiency")) {
          animate(child, { color: '#d28cd1'}, 
          { duration: 1});
        }
      });
    }, (text.length * 0.3 + 3) * 650);

  }
</script>

<header>
  <a href="index">
    <img src="/espWhite.png" alt="Your Logo" class="logo" />
  </a>
</header>

<div class="translucent-section centered-content large-text" use:animateText>
  Step into the future
  with Esplanade AI. Revolutionise
  your business operations and
  experience unparalleled efficiency.
</div>

<div>
  <video id="bgVideo" autoplay muted loop playsinline poster="tealPurple169-2.png">
    <source src="/siteBGcont2.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

<div class="social-icons">
  <a href="https://www.instagram.com/esplanade.ai/">
    <img src="/Instagram.png" alt="Instagram" />
  </a>
  <a href="https://www.linkedin.com/company/esplanade-ai">
    <img src="/linkedin.png" alt="Linkedin" />
  </a>
</div>

{#if !formSubmitted}
  <div class="contact-form">
    <form on:submit={handleSubmit}>
      <div class="contact-form">
        <form on:submit={handleSubmit}>
          <input type="text" name="fullname" placeholder="Full Name" required />
          <input type="tel" name="number" placeholder="Phone Number" required />
          <input type="email" name="email" placeholder="Email Address" required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </form>
  </div>
{:else if formSubmitted}
  <ChatAssistant {firstname}/>
{/if}

<div id="bpw-layout"></div>

<footer>
  <div class="footer-row">
    <div class="footer-logo">
      <img src="justLogoWhite.png" alt="Esplanade Logo" />
    </div>
    <div class="address-contact">
      <div>
        <strong>Address</strong>
        <p>Sydney, AUS</p>
      </div>
      <div>
        <strong>Contact</strong>
        <p>digital@esplanade.ai</p>
      </div>
    </div>
  </div>

  <div class="footer-divider"></div>

  <div class="footer-row">
    <div>&copy; 2023 Esplanade.ai. All rights reserved.</div>
    <div>
      <a href="/terms-and-conditions">T&Cs</a>
      <a href="/privacy-policy">Privacy Policy</a>
    </div>
  </div>
</footer>

<style>
  :root {
    --logo-size: 800px;
    --footer-text-size: calc(var(--logo-size) / 50);
  }

  ::-webkit-scrollbar {
    width: 0px;
  }

  ::-webkit-scrollbar-track {
    background-image: url("tealPurple169-2.png");
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
  }

  

  :global(body) {
    margin: 0;
    padding: 0;
    width: 100%;
    overflow-x: hidden;
  }

  * {
    font-family: "Red Hat Display", sans-serif;
  }

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .logo {
    max-width: var(--logo-size);
    width: 100%;
  }

  .social-icons {
    position: absolute;
    top: 20px;
    right: 20px;
  }

  .social-icons img {
    width: calc(0.5 * var(--logo-size) / 8);
  }

  .social-icons a {
    display: inline-block;
    margin: 10px;
  }

  #bgVideo {
    position: fixed;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -1000;
    transform: translateX(-50%) translateY(-50%);
    background-size: cover;
  }

  .translucent-section {
    background-color: #ffffff16;
    width: 100%;
    margin: 0;
    padding: 20px 0;
    z-index: 1;
    text-align: center;
    font-size: 2.5rem;
    color: #fff;
    line-height: 1.5;
    margin-bottom: 175px;
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 150px;
  }

  .contact-form form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 300px;
  }

  .contact-form input {
    padding: 10px;
    border: 1px solid #ffffff00;
    background-color: rgb(255, 255, 255);
    border-radius: 5px;
    font-size: 16px;
    width: 100%;
    box-sizing: border-box;
  }

  .contact-form button {
    padding: 10px 20px;
    background-color: #ffffff16;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .contact-form button:hover {
    background-color: #ffffff4b;
  }

  footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 10px;
    color: #fff;
    font-family: "Red Hat Mono";
    font-size: var(--footer-text-size);
  }

  .footer-row {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 10px 0;
  }

  .footer-logo {
    margin-top: 15px;
    margin-left: 5px;
  }

  .footer-logo img {
    width: 50px; /* Adjust this value to your desired size */
    max-width: 100%;
  }

  .address-contact {
    display: flex;
    justify-content: space-between;
    width: 50%;
    position: relative;
  }

  .address-contact > div {
    text-align: left;
  }

  .address-contact > div:last-child {
    position: absolute;
    right: 35%;
  }

  .footer-divider {
    width: 100%;
    height: 1px;
    background-color: #ffffff4b;
    margin: 10px 0;
  }

  footer a {
    color: #d28cd1;
    text-decoration: none;
    transition: color 0.3s;
    margin-right: 10px;
  }

  footer a:hover {
    color: #d28cd1;
  }

  @media (max-width: 768px) {
    :root {
      --logo-size: 400px;
      --footer-text-size: calc(var(--logo-size) / 40);
    }

    .translucent-section {
      font-size: 1.3rem;
    }

    .footer-logo {
      width: 100%;
      text-align: left;
    }

    .address-contact {
      width: 100%;
      margin-top: 10px;
    }

    .address-contact > div:last-child {
      position: absolute;
      right: 5%;
    }
  }
</style>
