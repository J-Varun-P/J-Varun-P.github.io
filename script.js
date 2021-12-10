document.addEventListener('DOMContentLoaded', () => {

  document.getElementById('intro').style.display = "flex";
  document.getElementById('after_intro').style.display = "none";
  document.getElementById('header_nav').style.display = "none";

  const animated = document.querySelector('.a');

  animated.addEventListener('animationend', () => {
    document.getElementById('intro').style.display = "none";
    document.getElementById('after_intro').style.display = "block";
    document.getElementById('header_nav').style.display = "block";

    /*

    var window_width = window.innerWidth;
    console.log(`This is the width ${window_width}`);

      document.querySelector('#project2').onclick = () => {
        console.log(`This is what ${window_width < 1200}`);
        if (window_width < 1200){
          console.log("Clicked 2!");
          document.querySelector('#projects').style.gridTemplateRows = "900px 1fr";
        }
      }
      document.querySelectorAll('.projects_links_class').forEach((item, i) => {
        item.onclick = () => {
          console.log("Common Link Clicked");
          if (i == 1){
            console.log("2 is Clicked");
          }
        }
      });

      */

      var checkinng2link = 0;
      var toggle_image = 1;
      var toggle_image2 = 1;

      function check2link(){
        if(window.innerWidth < 1200){
          if(checkinng2link == 1){
            document.querySelector('#projects').style.gridTemplateRows = "900px 1fr";
          }
          else{
            document.querySelector('#projects').style.gridTemplateRows = "300px 1fr";
          }
        }
        else{
          document.querySelector('#projects').style.gridTemplateRows = "auto";
        }
      }

      const check2linkrepeat = window.setInterval(function(){
        check2link();
        console.log(checkinng2link);
      }, 1000);

    document.querySelectorAll('.arrow').forEach((item, i) => {
      item.style.color = "#fff";
    });

    document.querySelector('#fa1').style.color = "navy";
    document.querySelector('#project1').style.border = "2px solid #75E5DA";
    document.querySelector('#project1').style.borderRight = "2px solid #fff";

    document.querySelectorAll('.projects_images_class').forEach((item, i) => {
      item.style.display = "none";
    });

    document.querySelector('#project1_images').style.display = "block";

    document.querySelectorAll('.certificate_link_for_cs50_class').forEach((item, i) => {
      item.style.display = "none";
    });
    document.querySelector(`#certificate_link_for_cs50_1`).style.display = "block";

    document.querySelectorAll('.scratch_images').forEach((item, i) => {
      item.style.display = "none";
    });

    document.querySelector("#scratchimage1").style.display = "block";

    document.querySelectorAll('.miniimgMOOCs').forEach((item, i) => {
      item.onclick = () => {
        toggle_image = i + 1;
        toggle_image2 = toggle_image;
        document.querySelectorAll('.imgMOOCs').forEach((item1, i1) => {
          item1.style.display = "none";
        });
        document.querySelector(`#imgMOOCs${i+1}`).style.display = "block";
        document.querySelectorAll('.miniimgMOOCs').forEach((item2, i2) => {
          item2.style.opacity = "0.75";
        });
        item.style.opacity = "1";
        document.querySelectorAll('.University_course_class').forEach((item3, i3) => {
          item3.style.display = "none";
        });
        document.querySelector(`#University_course${i+1}`).style.display = "block";
        document.querySelectorAll('.certificate_link_for_cs50_class').forEach((item4, i4) => {
          item4.style.display = "none";
        });
        document.querySelector(`#certificate_link_for_cs50_${i+1}`).style.display = "block";
        document.querySelectorAll('.miniimgMOOCs').forEach((item5, i5) => {
          item5.style.border = "1px solid #fff";
        });
        document.querySelector(`#miniimgMOOCs${i+1}`).style.border = "1px solid #75E6DA";
      }
    });

    document.querySelector('#imgMOOCarrows1').onclick = () => {
      toggle_image -= 1;
      if (toggle_image < 1){
        toggle_image += 3;
      }
      toggle_image2 = toggle_image;
      document.querySelectorAll('.imgMOOCs').forEach((item, i) => {
        item.style.display = "none";
      });
      document.querySelector(`#imgMOOCs${toggle_image}`).style.display = "block";
      document.querySelectorAll('.University_course_class').forEach((item1, i1) => {
        item1.style.display = "none";
      });
      document.querySelector(`#University_course${toggle_image}`).style.display = "block";
      document.querySelectorAll('.certificate_link_for_cs50_class').forEach((item2, i2) => {
        item2.style.display = "none";
      });
      document.querySelector(`#certificate_link_for_cs50_${toggle_image}`).style.display = "block";
      document.querySelectorAll('.miniimgMOOCs').forEach((item3, i3) => {
        item3.style.border = "1px solid #fff";
      });
      document.querySelector(`#miniimgMOOCs${toggle_image}`).style.border = "1px solid #75E6DA";
    }

    document.querySelector('#imgMOOCarrows2').onclick = () => {
      toggle_image += 1;
      if (toggle_image > 3){
        toggle_image -= 3;
      }
      toggle_image2 = toggle_image;
      document.querySelectorAll('.imgMOOCs').forEach((item, i) => {
        item.style.display = "none";
      });
      document.querySelector(`#imgMOOCs${toggle_image}`).style.display = "block";
      document.querySelectorAll('.University_course_class').forEach((item1, i1) => {
        item1.style.display = "none";
      });
      document.querySelectorAll('.certificate_link_for_cs50_class').forEach((item2, i2) => {
        item2.style.display = "none";
      });
      document.querySelector(`#certificate_link_for_cs50_${toggle_image}`).style.display = "block";
      document.querySelector(`#University_course${toggle_image}`).style.display = "block";
      document.querySelectorAll('.miniimgMOOCs').forEach((item3, i3) => {
        item3.style.border = "1px solid #fff";
      });
      document.querySelector(`#miniimgMOOCs${toggle_image}`).style.border = "1px solid #75E6DA";
    }


    document.querySelectorAll(".imgscratch").forEach((item, i) => {
      item.onmouseover = () => {
        document.querySelectorAll(".scratch_images").forEach((item1, i1) => {
          item1.style.display = "none";
        });
        document.querySelector(`#scratchimage${i+1}`).style.display = "block";
        document.querySelectorAll(".imgscratch").forEach((item2, i2) => {
          item2.style.transform = "perspective(800px) rotateY(25deg)";
          item2.style.opacity = "0.5";
        });

        item.style.transform = "perspective(800px) rotateY(0deg)";
        item.style.opacity = "1";
      }
    });

    document.querySelector('#miniimgMOOCs1').style.opacity = "1";

    document.querySelectorAll('.imgscratch').forEach((item, i) => {
      item.style.opacity = "0.5";
    });

    document.querySelector('#imgscratch1').style.opacity = "1";
    document.querySelector('#imgscratch1').style.transform = "perspective(800px) rotateY(0deg)";

    document.querySelectorAll('.University_course_class').forEach((item, i) => {
      item.style.display = "none";
    });

    document.querySelector('#University_course1').style.display = "block";

    document.querySelectorAll('.imgMOOCs').forEach((item, i) => {
      item.style.display = "none";
    });

    document.querySelector('#imgMOOCs1').style.display = "block";

    document.querySelectorAll('.projects_description_class').forEach((item, i) => {
      item.style.display = "none";
    });

    document.querySelector('#project1_description').style.display = "block";

    document.querySelectorAll('.projects_links_class').forEach((item, i) => {
      item.onclick = () => {
        if(i==1){
          checkinng2link = 1;
        }
        else{
          checkinng2link = 0;
        }
        document.querySelectorAll('.projects_images_class').forEach((item1, i1) => {
          item1.style.display = "none";
          document.querySelectorAll('.projects_description_class').forEach((item, i) => {
            item.style.display = "none";
          });
        });
        document.querySelector(`#project${i + 1}_images`).style.display = "flex";
        document.querySelector(`#project${i + 1}_description`).style.display = "block";

        document.querySelectorAll('.fa').forEach((item2, i2) => {
          item2.style.color = "#fff";
        });
        document.querySelector(`#fa${i + 1}`).style.color = "navy";
        document.querySelector('#github_link_stay_the_same').style.color = "#24292f";

        document.querySelectorAll('.projects_links_class').forEach((item3, i3) => {
          item3.style.border = "none";
          item3.style.borderRight = "2px solid #fff";
          item3.style.borderBottom = "2px solid #ccc";
        });

        document.querySelector(`#project${i+1}`).style.border = "2px solid #75E6DA";
        document.querySelector(`#project${i+1}`).style.borderRight = "2px solid #fff";
      }
    });

    document.querySelector('#full_certificate_display').style.display = "none";
    document.querySelectorAll('.imgMOOCs').forEach((item, i) => {
      item.onclick = () => {
        const src = item.dataset.path;
        document.querySelector('#full_certificate_display').style.display = "block";
        document.querySelector('#close_full_certificate_display').style.fontSize = "50px";
        document.querySelector('#close_full_certificate_display').children[1].src = src;
      }
    });

    document.querySelector('#close_full_certificate_display').onclick = () =>{
      document.querySelector('#full_certificate_display').style.display = "none";
    }

    var position = document.getElementById('about');
    /*
    console.log(position);
    console.log(position.offsetTop);
    console.log(position.offsetWidth);
    */

    function pop () {
        const x = position.offsetLeft + Math.random() * position.offsetWidth;
        const y = position.offsetTop + Math.random() * position.offsetHeight;
        for (let i = 0; i < 30; i++) {
          createParticle(x, y);
        }
    }

    function createParticle (x, y) {
      const particle = document.createElement('particle');
      document.body.appendChild(particle);
      const size = Math.floor(Math.random() * 20 + 5);
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.background = `hsl(${Math.random() * 90 + 180}, 70%, 60%)`;
      const destinationX = x + (Math.random() - 0.5) * 2 * 75;
      const destinationY = y + (Math.random() - 0.5) * 2 * 75;
      const animation = particle.animate([
        {
          transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
          opacity: 1
        },
        {
          transform: `translate(${destinationX}px, ${destinationY}px)`,
          opacity: 0
        }
      ], {
        duration: Math.random() * 1000 + 500,
        easing: 'cubic-bezier(0, .9, .57, 1)',
        delay: Math.random() * 200
      });
      animation.onfinish = () => {
        particle.remove();
      };
    }

    const intervalId = window.setInterval(function(){
      pop();
    }, 5000);

    const imageslideshow = window.setInterval(function() {
      imageslideshowfunction();
    }, 5000);


    function imageslideshowfunction(){
      toggle_image2 = toggle_image;
      toggle_image2 += 1;
      if (toggle_image2 > 3){
        toggle_image2 = 1;
      }
      toggle_image = toggle_image2;
      document.querySelectorAll('.imgMOOCs').forEach((item, i) => {
        item.style.display = "none";
      });
      document.querySelector(`#imgMOOCs${toggle_image2}`).style.display = "block";
      document.querySelectorAll('.University_course_class').forEach((item1, i1) => {
        item1.style.display = "none";
      });
      document.querySelector(`#University_course${toggle_image2}`).style.display = "block";
      document.querySelectorAll('.certificate_link_for_cs50_class').forEach((item2, i2) => {
        item2.style.display = "none";
      });
      document.querySelector(`#certificate_link_for_cs50_${toggle_image2}`).style.display = "block";
      document.querySelectorAll('.miniimgMOOCs').forEach((item3, i3) => {
        item3.style.border = "1px solid #fff";
      });
      document.querySelector(`#miniimgMOOCs${toggle_image2}`).style.border = "1px solid #75E6DA";
      document.querySelectorAll('.imgMOOCs').forEach((item4, i4) => {
        item4.style.display = "none";
      });
      document.querySelector(`#imgMOOCs${toggle_image2}`).style.display = "block";
    }

    document.querySelectorAll('.miniimgMOOCs').forEach((item, i) => {
      item.style.opacity = "1";
    });

    document.querySelectorAll('.miniimgMOOCs').forEach((item3, i3) => {
      item3.style.border = "1px solid #fff";
    });
    document.querySelector(`#miniimgMOOCs1`).style.border = "1px solid #75E6DA";

  });
});
