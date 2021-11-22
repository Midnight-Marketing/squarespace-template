[![LinkedIn][linkedin-shield]][linkedin-url]
[![Stars][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![License][license-shield]][license-url]

[Contributors currently not supported]: # ([![Contributors][contributors-shield]][contributors-url])


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
<!-- To replace these top four links, do a find and replace on the current text -->
[main-dev-email]: mailto:nathan@midnightmarketing.com
[site-url]: https://midnightmarketing.com
[repo-url]: https://github.com/Midnight-Marketing/squarespace-template.git
[site-repo-url]: https://mm-template.squarespace.com/template.git

[contributors-shield]: https://img.shields.io/badge/Contributors-2-orange?style=for-the-badge
[contributors-url]: https://github.com/Midnight-Marketing/squarespace-template/-/community_contributors
[stars-shield]: https://img.shields.io/badge/Stars-0-blue?style=for-the-badge
[stars-url]: https://github.com/Midnight-Marketing/squarespace-template/-/starrers
[issues-shield]: https://img.shields.io/badge/Issues-0-green?style=for-the-badge
[issues-url]: https://github.com/Midnight-Marketing/squarespace-template/-/issues
[license-shield]: https://img.shields.io/badge/License-Other-green?style=for-the-badge
[license-url]: https://github.com/Midnight-Marketing/squarespace-template/-/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/company/Midnight-Marketing-llc/
[screenshot]: assets/images/screenshot.png


<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://midnightmarketing.com">
    <img src="assets/images/logo.png" alt="Logo" width="200" height="auto">
  </a>

  <h3 align="center">Wright (Adapted) Template</h3>

  <p align="center">
    Squarespace website template
    <br />
    <a href="https://github.com/Midnight-Marketing/squarespace-template"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://midnightmarketing.com">View Site</a>
    ·
    <a href="https://github.com/Midnight-Marketing/squarespace-template/issues">Report Bug</a>
    ·
    <a href="https://github.com/Midnight-Marketing/squarespace-template/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#start-a-new-site">Start a New Site</a></li>
        <li><a href="#install-on-an-exisiting-site">Install on an Existing Site</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project  

![Wright (Adapated) Template][screenshot]  

  
### Built With  

* [Squarespace](https://squarespace.com)
* [jQuery v3.6](https://jquery.com/download/)
* [Squarespace Video Lightbox Button Plugin](https://www.sqspthemes.com/plugins/squarespace-video-lightbox-button)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

* Administrative access to Squarespace Backend
* Squarespace site running on 7.0

<!-- Start a New Site -->
### Start a New Site

1. Start a new site from the [Brine Template](https://brine-demo.squarespace.com/)
   
   1. *This ensures you're using 7.0*

2. Set a custom Subdomain from Squarespace for ease-of-use

   1. Go to **Settings** -> **Domains** -> **Built-In Domain** and make a new subdomain.
   
   2. *I typically set the domain as **mm-company_name***  

3. Turn on Developer Mode

   1. Found in **Settings** -> **Advanced** -> **Developer Mode**

4. Create a repo in the Midnight Marketing GitHub

5. Replace the default template with these files.

   1. Start with updating this README.md in the root folder to update all the links to the  GitHub repo and Squarespace repo, as well as the site name and any other information from  the markdown links and images at the top of the file.

   2. If you're not using the static page option, delete the ``pages/static.page`` and ``pages/static.page.conf`` files.

6. Update the repo information in the Squarespace repo

   1. Add the GitHub repo as a push location  
      ```sh
      git remote set-url --add origin https://github.com/Midnight-Marketing/squarespace-template.git
      ```

7. Push the updates and confirm everything is working as expected
   

<!-- Install on an Existing Site -->
### Install on an Exisiting Site

1. Clone the repo
   ```sh
   git clone https://github.com/Midnight-Marketing/squarespace-template.git
   ```

2. Update repo push/pull location
   ```sh
   git remote set-url origin https://mm-template.squarespace.com/template.git && git remote set-url --add origin https://github.com/Midnight-Marketing/squarespace-template.git
   ```
   * Please note you will need access to the Squarespace site in order to complete this step. If needed, please contact <a href="mailto:nathan@midnightmarketing.com" target="_blank">the main developer</a>.



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/Midnight-Marketing/squarespace-template/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Portions Copyright © 2016 Squarespace, Inc. This code is licensed to you pursuant to Squarespace’s Developer Terms of Use, available at http://developers.squarespace.com/developer-terms-of-use (the “Developer Terms”). You may only use this code on websites hosted by Squarespace, and in compliance with the Developer Terms. TO THE FULLEST EXTENT PERMITTED BY LAW, SQUARESPACE PROVIDES ITS CODE TO YOU ON AN “AS IS” BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.  

Customized templating distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->
## Contact

#### Project Lead
Nathan Paynter - nathan@midnightmarketing.com



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* [Squarespace Developers](https://developers.squarespace.com/quick-start)
* [SQSPThemes.com](https://www.sqspthemes.com)

