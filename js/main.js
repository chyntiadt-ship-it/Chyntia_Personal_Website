const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");

  if (themeToggle) {
    themeToggle.textContent = "☀️";
  }
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");

    localStorage.setItem("theme", isDark ? "dark" : "light");
    themeToggle.textContent = isDark ? "☀️" : "🌙";
  });
}

/* HOME ABOUT ME POPUP */
const aboutBtn = document.getElementById("aboutBtn");
const aboutPopup = document.getElementById("aboutPopup");
const closePopup = document.getElementById("closePopup");

if (aboutBtn && aboutPopup && closePopup) {
  aboutBtn.addEventListener("click", () => {
    aboutPopup.classList.add("show");
  });

  closePopup.addEventListener("click", () => {
    aboutPopup.classList.remove("show");
  });

  aboutPopup.addEventListener("click", (event) => {
    if (event.target === aboutPopup) {
      aboutPopup.classList.remove("show");
    }
  });
}

/* GALLERY SLIDER */
document.querySelectorAll(".slider-wrapper").forEach((wrapper) => {
  const slider = wrapper.querySelector(".photo-slider");
  const leftBtn = wrapper.querySelector(".nav-btn.left");
  const rightBtn = wrapper.querySelector(".nav-btn.right");

  if (!slider || !leftBtn || !rightBtn) return;

  leftBtn.addEventListener("click", () => {
    slider.scrollBy({
      left: -420,
      behavior: "smooth",
    });
  });

  rightBtn.addEventListener("click", () => {
    slider.scrollBy({
      left: 420,
      behavior: "smooth",
    });
  });

  let isDown = false;
  let startX;
  let scrollLeft;
  let isDragging = false;

  slider.addEventListener("mousedown", (event) => {
    isDown = true;
    isDragging = false;
    startX = event.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener("mouseleave", () => {
    isDown = false;
  });

  slider.addEventListener("mouseup", () => {
    isDown = false;
  });

  slider.addEventListener("mousemove", (event) => {
    if (!isDown) return;

    event.preventDefault();

    const x = event.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.6;

    if (Math.abs(walk) > 8) {
      isDragging = true;
    }

    slider.scrollLeft = scrollLeft - walk;
  });

  slider.addEventListener("touchstart", (event) => {
    isDragging = false;
    startX = event.touches[0].pageX;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener("touchmove", (event) => {
    const x = event.touches[0].pageX;
    const walk = (x - startX) * 1.4;

    if (Math.abs(walk) > 8) {
      isDragging = true;
    }

    slider.scrollLeft = scrollLeft - walk;
  });

  slider.querySelectorAll(".gallery-item").forEach((item) => {
    item.addEventListener("click", (event) => {
      if (isDragging) {
        event.preventDefault();
        return;
      }
    });
  });
});

/* GALLERY IMAGE POPUP */
const galleryItems = document.querySelectorAll(".gallery-item");
const imagePopup = document.getElementById("imagePopup");
const imageClose = document.getElementById("imageClose");
const popupImage = document.getElementById("popupImage");
const popupTitle = document.getElementById("popupTitle");
const popupDesc = document.getElementById("popupDesc");
const downloadBtn = document.getElementById("downloadBtn");

if (galleryItems && imagePopup && imageClose && popupImage && popupTitle && popupDesc && downloadBtn) {
  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      popupImage.src = item.dataset.img;
      popupImage.alt = item.dataset.title;
      popupTitle.textContent = item.dataset.title;
      popupDesc.textContent = item.dataset.desc;
      
      downloadBtn.href = item.dataset.img;
      downloadBtn.download = item.dataset.title + ".jpg";

      imagePopup.classList.add("show");
    });
  });

  imageClose.addEventListener("click", () => {
    imagePopup.classList.remove("show");
  });

  imagePopup.addEventListener("click", (event) => {
    if (event.target === imagePopup) {
      imagePopup.classList.remove("show");
    }
  });
}

/* BLOG POPUP */
const blogData = {
  bts: {
    category: "Music Group",
    title: "BTS",
    desc:
      "BTS adalah grup musik yang melakukan debut pada tahun 2013. BTS beranggotakan 7 yaitu RM (Kim Namjoon) sebagai leader, Jin (Kim Seokjin), SUGA (Min Yoongi), J-Hope (Jung Hoseok), Jimin (Park Jimin), V (Kim Taehyung), dan Jungkook (Jeon Jungkook). Saya menjadi penggemar BTS (ARMY) sejak 2017 dengan lagu favorit hingga sekarang adalah 'Blood Sweat & Tears'. BTS bukan hanya group K-POP biasa, tetapi group yang membawa banyak kebahagiaan bagi banyak penggemarnya lewat lagu serta pesan pada lagu-lagu mereka. Di bawah ini link lagu 'Blood Sweat & Tears':",

    site: "https://youtu.be/hmE9f-TEutc?si=Mt_nh9G6247nqqYe",

    images: [
      { src: "bts/rm.jpg", title: "RM - Kim Namjoon" },
      { src: "bts/jin.jpg", title: "Jin - Kim Seokjin" },
      { src: "bts/suga.jpg", title: "SUGA - Min Yoongi" },
      { src: "bts/jhp.jpg", title: "J-Hope - Jung Hoseok" },
      { src: "bts/jimin.jpg", title: "Jimin - Park Jimin" },
      { src: "bts/V.jpg", title: "V - Kim Taehyung" },
      { src: "bts/jk.jpg", title: "Jungkook - Jeon Jungkook" }
    ]
  },

  onepiece: {
    category: "Anime",
    title: "One Piece",
    desc:
      "One Piece adalah anime dan manga karya Eiichiro Oda yang menceritakan petualangan Monkey D. Luffy bersama kru Topi Jerami dalam mencari harta legendaris bernama One Piece. Cerita ini bukan hanya tentang petualangan bajak laut, tetapi juga tentang persahabatan, mimpi, kebebasan, pengorbanan, dan perjuangan untuk melindungi orang-orang yang dicintai. Setiap karakter memiliki latar belakang yang kuat, sehingga membuat cerita One Piece terasa emosional, seru, dan penuh makna. Anime yang bisa membuat orang yang menonton mengeluarkan emosi yang berbeda-beda. Jika kalian tertarik menonton One Piece, di bawah ini saya berikan list nonton One Piece ^^:",

    site: "https://share.google/qCWREEsF2xp0uzhSD",

    images: [
      { src: "OP/luffy.jpg", title: "Monkey D. Luffy" },
      { src: "OP/zoro.jpg", title: "Roronoa Zoro" },
      { src: "OP/nami.jpg", title: "Nami" },
      { src: "OP/usopp.jpg", title: "Usopp" },
      { src: "OP/sanji.jpg", title: "Sanji" },
      { src: "OP/choper.jpg", title: "Tony Tony Chopper" },
      { src: "OP/robin.jpg", title: "Nico Robin" },
      { src: "OP/fran.jpg", title: "Franky" },
      { src: "OP/brook.jpg", title: "Brook" },
      { src: "OP/jinbe.jpg", title: "Jinbe" }
    ]
  }
};

const readMoreButtons = document.querySelectorAll(".read-more-btn");
const blogPopup = document.getElementById("blogPopup");
const blogClose = document.getElementById("blogClose");
const popupCategory = document.getElementById("popupCategory");
const blogPopupTitle = document.getElementById("blogPopupTitle");
const blogPopupDesc = document.getElementById("blogPopupDesc");
const blogSiteLink = document.getElementById("blogSiteLink");
const blogPhotoSlider = document.getElementById("blogPhotoSlider");

const blogPhotoFull = document.getElementById("blogPhotoFull");
const blogPhotoClose = document.getElementById("blogPhotoClose");
const blogFullImage = document.getElementById("blogFullImage");
const blogFullTitle = document.getElementById("blogFullTitle");

if (
  readMoreButtons &&
  blogPopup &&
  blogClose &&
  popupCategory &&
  blogPopupTitle &&
  blogPopupDesc &&
  blogSiteLink &&
  blogPhotoSlider
) {
  readMoreButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const blogName = button.dataset.blog;
      const data = blogData[blogName];

      popupCategory.textContent = data.category;
      blogPopupTitle.textContent = data.title;
      blogPopupDesc.textContent = data.desc;

      blogSiteLink.href = data.site;
      blogSiteLink.target = "_blank";

      blogPhotoSlider.innerHTML = "";

      const repeatedImages = [...data.images, ...data.images];

      repeatedImages.forEach((photo) => {
        const photoItem = document.createElement("div");
        photoItem.classList.add("auto-photo-item");

        photoItem.innerHTML = `
          <img src="${photo.src}" alt="${photo.title}" />
        `;

        photoItem.addEventListener("click", () => {
          blogFullImage.src = photo.src;
          blogFullImage.alt = photo.title;
          blogFullTitle.textContent = photo.title;

          blogPhotoFull.classList.add("show");
        });

        blogPhotoSlider.appendChild(photoItem);
      });

      blogPopup.classList.add("show");
    });
  });

  blogClose.addEventListener("click", () => {
    blogPopup.classList.remove("show");
  });

  blogPopup.addEventListener("click", (event) => {
    if (event.target === blogPopup) {
      blogPopup.classList.remove("show");
    }
  });
}

if (blogPhotoClose && blogPhotoFull) {
  blogPhotoClose.addEventListener("click", () => {
    blogPhotoFull.classList.remove("show");
  });

  blogPhotoFull.addEventListener("click", (event) => {
    if (event.target === blogPhotoFull) {
      blogPhotoFull.classList.remove("show");
    }
  });
}

/* SONG PAGE */
const songData = {
  multo: {
    title: "Multo",
    artist: "Cup of Joe",
    youtube: "https://youtu.be/Rht8rS4cR1s?si=9ocZmMzxYPpKUqtV",
    audio: "music/multo.mp3",
    about:
      "Lagu ini menggambarkan perasaan yang masih dihantui oleh seseorang dari masa lalu. Secara umum, maknanya tentang kenangan yang sulit dilupakan dan rasa kehilangan yang terus terasa."
  },

  numberonegirl: {
    title: "Number One Girl",
    artist: "ROSÉ",
    youtube: "https://youtu.be/pZ1NdE69VTs?si=Je5xgalLGlg7a_3Y",
    audio: "music/number-one-girl.mp3",
    about:
      "Lagu ini bercerita tentang keinginan untuk dicintai, dipilih, dan dianggap berharga oleh seseorang. Maknanya dekat dengan rasa insecure, harapan, dan kebutuhan akan validasi."
  },

  drunktext: {
    title: "Drunk Text",
    artist: "Henry Moodie",
    youtube: "https://youtu.be/OqEc_169ywY?si=RR8nIPoYFMbbaggF",
    audio: "music/drunk-text.mp3",
    about:
      "Lagu ini menggambarkan perasaan ingin menghubungi seseorang saat emosi sedang tidak stabil. Secara umum, lagu ini tentang rindu, penyesalan, dan kata-kata yang sulit diungkapkan secara sadar."
  },

  imissyouimsorry: {
    title: "I Miss You, I’m Sorry",
    artist: "Gracie Abrams",
    youtube: "https://youtu.be/nijx6Np0o40?si=Z-rbuNvgfm6me8kJ",
    audio: "music/i-miss-you-im-sorry.mp3",
    about:
      "Lagu ini menceritakan hubungan yang rumit, rasa rindu, dan penyesalan setelah kehilangan seseorang. Maknanya tentang konflik antara masih sayang dan sadar bahwa semuanya sudah berubah."
  },

  control: {
    title: "Control",
    artist: "Zoe Wees",
    youtube: "https://youtu.be/UrGS_6_HglU?si=H_nUo5p8dCfKLnwT",
    audio: "music/control.mp3",
    about:
      "Lagu ini memiliki makna tentang perjuangan melawan rasa takut, cemas, dan kehilangan kendali. Secara umum, lagu ini menyampaikan kekuatan untuk bertahan meskipun sedang berada di masa sulit."
  },

  carsoutside: {
    title: "Cars Outside",
    artist: "James Arthur",
    youtube: "https://youtu.be/v27COkZT4GY?si=jO7cerCC4Vamx-N5",
    audio: "music/cars-outside.mp3",
    about:
      "Lagu ini menggambarkan rasa berat ketika harus pergi meninggalkan orang yang dicintai. Maknanya tentang kerinduan, hubungan jarak jauh, dan keinginan untuk tetap tinggal bersama seseorang."
  }
};

document.querySelectorAll(".slider-wrapper").forEach((wrapper) => {
  const slider = wrapper.querySelector(".song-slider");
  const leftBtn = wrapper.querySelector(".song-nav-btn.left");
  const rightBtn = wrapper.querySelector(".song-nav-btn.right");

  if (!slider || !leftBtn || !rightBtn) return;

  leftBtn.addEventListener("click", () => {
    slider.scrollBy({
      left: -340,
      behavior: "smooth",
    });
  });

  rightBtn.addEventListener("click", () => {
    slider.scrollBy({
      left: 340,
      behavior: "smooth",
    });
  });

  let isDown = false;
  let startX;
  let scrollLeft;
  let isDragging = false;

  slider.addEventListener("mousedown", (event) => {
    isDown = true;
    isDragging = false;
    startX = event.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener("mouseleave", () => {
    isDown = false;
  });

  slider.addEventListener("mouseup", () => {
    isDown = false;
  });

  slider.addEventListener("mousemove", (event) => {
    if (!isDown) return;

    event.preventDefault();

    const x = event.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.6;

    if (Math.abs(walk) > 8) {
      isDragging = true;
    }

    slider.scrollLeft = scrollLeft - walk;
  });

  slider.addEventListener("touchstart", (event) => {
    isDragging = false;
    startX = event.touches[0].pageX;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener("touchmove", (event) => {
    const x = event.touches[0].pageX;
    const walk = (x - startX) * 1.4;

    if (Math.abs(walk) > 8) {
      isDragging = true;
    }

    slider.scrollLeft = scrollLeft - walk;
  });
});

const songCards = document.querySelectorAll(".song-card");
const songPopup = document.getElementById("songPopup");
const songClose = document.getElementById("songClose");
const songYoutube = document.getElementById("songYoutube");
const songArtist = document.getElementById("songArtist");
const songTitle = document.getElementById("songTitle");
const songAudio = document.getElementById("songAudio");
const playSongBtn = document.getElementById("playSongBtn");
const downloadSongBtn = document.getElementById("downloadSongBtn");
const aboutSongBtn = document.getElementById("aboutSongBtn");
const songAbout = document.getElementById("songAbout");

let currentAudio = null;
let isSongPlaying = false;

if (
  songCards &&
  songPopup &&
  songClose &&
  songYoutube &&
  songArtist &&
  songTitle &&
  songAudio &&
  playSongBtn &&
  downloadSongBtn &&
  aboutSongBtn &&
  songAbout
) {
  songCards.forEach((card) => {
    card.addEventListener("click", () => {
      const songKey = card.dataset.song;
      const data = songData[songKey];

      songYoutube.src = data.youtube;
      songArtist.textContent = data.artist;
      songTitle.textContent = data.title;

      songAudio.src = data.audio;
      downloadSongBtn.href = data.audio;
      downloadSongBtn.download = `${data.title}.mp3`;

      songAbout.textContent = data.about;
      songAbout.classList.remove("show");

      playSongBtn.textContent = "▶ Play Song";
      isSongPlaying = false;

      songPopup.classList.add("show");
    });
  });

  playSongBtn.addEventListener("click", () => {
    currentAudio = songAudio;

    if (!isSongPlaying) {
      currentAudio.play();
      playSongBtn.textContent = "⏸ Pause Song";
      isSongPlaying = true;
    } else {
      currentAudio.pause();
      playSongBtn.textContent = "▶ Play Song";
      isSongPlaying = false;
    }
  });

  aboutSongBtn.addEventListener("click", () => {
    songAbout.classList.toggle("show");
  });

  songClose.addEventListener("click", () => {
    songPopup.classList.remove("show");
    songYoutube.src = "";
    songAudio.pause();
    songAudio.currentTime = 0;
    isSongPlaying = false;
    playSongBtn.textContent = "▶ Play Song";
  });

  songPopup.addEventListener("click", (event) => {
    if (event.target === songPopup) {
      songPopup.classList.remove("show");
      songYoutube.src = "";
      songAudio.pause();
      songAudio.currentTime = 0;
      isSongPlaying = false;
      playSongBtn.textContent = "▶ Play Song";
    }
  });
}

/* CONTACT PAGE */
const emailBox = document.getElementById("emailBox");
const instagramBox = document.getElementById("instagramBox");
const whatsappBox = document.getElementById("whatsappBox");

const quickEmail = document.getElementById("quickEmail");
const quickIg = document.getElementById("quickIg");
const quickWa = document.getElementById("quickWa");

const emailPopup = document.getElementById("emailPopup");
const instagramPopup = document.getElementById("instagramPopup");
const whatsappPopup = document.getElementById("whatsappPopup");

function openContactPopup(popup) {
  if (popup) {
    popup.classList.add("show");
  }
}

function closeContactPopup(popup) {
  if (popup) {
    popup.classList.remove("show");
  }
}

if (emailBox && emailPopup) {
  emailBox.addEventListener("click", () => {
    openContactPopup(emailPopup);
  });
}

if (instagramBox && instagramPopup) {
  instagramBox.addEventListener("click", () => {
    openContactPopup(instagramPopup);
  });
}

if (whatsappBox && whatsappPopup) {
  whatsappBox.addEventListener("click", () => {
    openContactPopup(whatsappPopup);
  });
}

if (quickEmail && emailPopup) {
  quickEmail.addEventListener("click", () => {
    openContactPopup(emailPopup);
  });
}

if (quickIg && instagramPopup) {
  quickIg.addEventListener("click", () => {
    openContactPopup(instagramPopup);
  });
}

if (quickWa && whatsappPopup) {
  quickWa.addEventListener("click", () => {
    openContactPopup(whatsappPopup);
  });
}

document.querySelectorAll(".popup-close").forEach((button) => {
  button.addEventListener("click", () => {
    const popupId = button.dataset.close;
    const popup = document.getElementById(popupId);
    closeContactPopup(popup);
  });
});

document.querySelectorAll(".contact-popup").forEach((popup) => {
  popup.addEventListener("click", (event) => {
    if (event.target === popup) {
      closeContactPopup(popup);
    }
  });
});

/* FLOATING WHATSAPP ICON UNTUK HALAMAN SELAIN CONTACT */
const floatingWhatsapp = document.querySelector(".floating-whatsapp");

if (floatingWhatsapp) {
  floatingWhatsapp.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = "contact.html";
  });
}

const wa = document.querySelector(".floating-whatsapp");

if (wa) {
  let isDragging = false;

  wa.addEventListener("mousedown", () => {
    isDragging = true;
    wa.style.cursor = "grabbing";
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
    wa.style.cursor = "grab";
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    wa.style.left = e.clientX - 30 + "px";
    wa.style.top = e.clientY - 30 + "px";
    wa.style.right = "auto";
    wa.style.bottom = "auto";
  });
}
