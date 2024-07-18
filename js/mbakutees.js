AOS.init();

setTimeout(() => {
  document.querySelector(".preload").style.display = "none";
}, 1500);

var musik = "";

var audio = document.querySelector(".audio");
if (musik) {
  audio.src = musik;
}

function mulai() {
  audio.play();
  window.scrollTo(0, 0);
  document.querySelector(".open").style = "opacity: 0;";
  document.querySelector(".body").style = "overflow-y: scroll";
  setTimeout(function () {
    document.querySelector(".open").style.display = "none";
  }, 1200);
}

function wa(isi) {
  window.open(
    "https://wa.me/6287819844990?text=Makasih%20yo%20jik,%20wes%20inget%20ulang%20tahunku,%20sesuk%20tak%20tumbaske%20paketan%20wess%20wkwk " +
      isi
  );
}

async function tanya() {
  var { value: kado } = await swal.fire({
    imageUrl: "assets/whisutes.jpg",
    title: "Sorry Wkwk, Oro Jaluk Opo Wes Ra Tak Kei",
    input: "text",
    showCancelButton: false,
  });

  if (kado) {
    await swal.fire({
      imageUrl: "assets/wa.png",
      title: "Tak Sulap Bariki Neng WA",
    });
    wa(kado);
  } else {
    await swal.fire({
      icon: "error",
      title: "Di Isi woeeee",
    });
    tanya();
  }
}
