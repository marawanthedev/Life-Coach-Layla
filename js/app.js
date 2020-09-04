Vue.component("my-nav", {
  template: `
    <div class="navigation">
      <input type="checkbox" id="navi-toggle" class="navigation__checkbox" />
      <label for="navi-toggle" class="navigation__button">
        <span class="navigation__icon">
          &nbsp;
        </span>
      </label>
      <div class="navigation__background">&nbsp;</div>
      <nav class="navigation__nav">
        <ul class="navigation__list">
          <li class="navigation__item">
            <a href="#about" aria-label="About" class="navigation__link">
              <span>01</span>About </a
            >
          </li>
          <li class="navigation__item">
            <a href="#services" aria-label="Services" class="navigation__link"
              ><span>02</span> Services</a
            >
          </li>
          <li class="navigation__item">
            <a href="#reviews" aria-label="Reviews" class="navigation__link">
              <span>03</span> Reviews</a
            >
          </li>
          <li class="navigation__item">
            <a href="#contact" aria-label="Contact" class="navigation__link"><span>04</span> Contact</a>
          </li>
         
        </ul>
      </nav>
    </div>
    `,
  mounted() {
    document
      .querySelectorAll(".navigation__link")
      .forEach((item) => item.addEventListener("click", this.captureClick));
  },

  methods: {
    captureClick() {
      document.querySelector(".navigation__checkbox").checked = false;
    },
  },
});
Vue.component("top-section", {
  template: `
  <section class="top-section-container">

  <div class="top-section" id="home">
  <div class="top-section__text">
  <h1 class="top-section__header ">Layla Shabayek</h1>   
  <img class="top-section__logo" alt="Main logo" src="../img/logo.jpg">
  <div class="top-section__sub-header">Life & Marriage Coach</div>
  <div class="top-section__message">
  <div class="top-section__message__text">
<div class="top-section__message__text__inner">    
<span class="top-section__message__text__inner__item"> <span class="top-section__message__text__inner__item__text top-section__message__text__inner__item__text__1">بساعدك تعرف نفسك</span> </span>
<span class="top-section__message__text__inner__item">
<span class="top-section__message__text__inner__item__text top-section__message__text__inner__item__text__2">من خلال مقياس متعدده ومختلفه</span>
</span>
<span class="top-section__message__text__inner__item">
<span class="top-section__message__text__inner__item__text top-section__message__text__inner__item__text__3">لمعرفه نقاط القوه ونقاط التطوير
</span>
</span>
<span class="top-section__message__text__inner__item">
<span class="top-section__message__text__inner__item__text top-section__message__text__inner__item__text__4">واكتساب مهارات تدعمك فى رحله حياة متوزانه
</span>

</span>
<span class="top-section__message__text__inner__bottom-text">
<span class="top-section__message__text__inner__item__text">حياة متوزانه اكثر فعاليه وسعادة</span>
</span>
</div>
  </div>
  <div class="top-section__message__img ">x</div>
  </div>
  </div>
</div>
  </section>
    
    `,
  mounted() {
    setTimeout(() => {
      document
        .querySelector(".top-section__header")
        .classList.remove("animate-header");
    }, 3800);
  },
});
Vue.component("middle-section", {
  template: `
    <div class="middle-section-container" id="services">
    
    <section class="middle-section">
    
    <div class="middle-section__item" v-show="showTopTwo">
        <div class="middle-section__item__img middle-section__item__img__1"></div>
        <div class="middle-section__item-info" v-show="showTopTwoInfo">
            <div class="middle-section__item__header" >relationship counselling</div>
            <p class="middle-section__item__paragraph">بساعدك تُحسن تواصلك وتفهمك .
            وتتخطى مشكلات فى علاقاتك بالاطراف المحيطة بك سواء فى حياتك الاجتماعية او العملية وتحسن جودة هذه العلاقات
            وتفهم الاسباب التى تدعم نمو والتطور الايجابى للعلاقات</p>
        </div>
        <a href="#contact" aria-label="Contact" class="middle-section__item__btn"> اناجاهز للتغيير </a>
    </div>

    <div class="middle-section__item" v-show="showTopTwo">
    <div class="middle-section__item__img middle-section__item__img__2"></div>
    <div class="middle-section__item-info" v-show="showTopTwoInfo">
        <div class="middle-section__item__header" >Life Coaching</div>
        <p class="middle-section__item__paragraph">بساعدك تتواصل وتفهم وتتخطى مشكلات فى علاقاتك بالاطراف اللى حوالك سواء فى حياتك الاجتماعيه او العمليه وتحسن جوده العلاق</p>
    </div>
    <a  href="#contact" aria-label="Contact" class="middle-section__item__btn"> اناجاهز للتغيير </a>
</div>

<div class="middle-section__item" v-show="showBottomTwo">
<div class="middle-section__item__img middle-section__item__img__3"></div>
<div class="middle-section__item-info" v-show="showBottomTwoInfo">
    <div class="middle-section__item__header">self confidence counselling</div>
    <p class="middle-section__item__paragraph">بساعدك تعرف نفسك من خلال مقياس متعدده ومختلفه لمعرفه نقاط القوه ونقاط التطوير واكتساب مهارات تدعمك فى رحله حياة متوزانه</p>
</div>
<a  href="#contact" aria-label="Contact" class="middle-section__item__btn"> اناجاهز للتغيير </a>
</div>
<div class="middle-section__item" v-show="showBottomTwo">
<div class="middle-section__item__img middle-section__item__img__4"></div>
<div class="middle-section__item-info" v-show="showBottomTwoInfo">
    <div class="middle-section__item__header">Marriage counselling</div>
    <p class="middle-section__item__paragraph">
    كوتش التوافق الزواجى بساعدك اطراف العلاقة الزوج والزوجه على الفهم والتفهم لاسباب المشكلات وفهم شخصيتهم المختلفه ودعم حياة شعارها المودة والرحمه    </p>
</div>
<a  href="#contact" aria-label="Contact" class="middle-section__item__btn"> انا <span class="middle-section__item__space"> جاهز</span> للتغيير </a>
</div>
    </section>
    </div>
    `,
  data() {
    return {
      showTopTwo: false,
      showTopTwoInfo: false,
      showBottomTwo: false,
      showBottomTwoInfo: false,
      cardsScrollValue1: 0,
      cardsScrollValue2: 0,
    };
  },
  created() {
    window.addEventListener("scroll", this.captureScroll);
  },
  methods: {
    captureScroll() {
      if (window.innerHeight == 754) {
        this.cardsScrollValue1 = 1600;
        this.cardsScrollValue2 = 2050;
      }
      if (window.innerHeight >= 1366) {
        this.cardsScrollValue1 = 60;
        this.cardsScrollValue2 = 70;
      }

      setTimeout(() => {
        if (window.scrollY > this.cardsScrollValue1) {
          this.showTopTwo = true;
          setTimeout(() => (this.showTopTwoInfo = true), 350);
        }

        if (window.scrollY > this.cardsScrollValue2) {
          this.showBottomTwo = true;
          setTimeout(() => (this.showBottomTwoInfo = true), 350);
        }
      }, 1);
    },
  },
});
Vue.component("about", {
  template: `
<div class="about-container" id="about">
<section class="about">
<div class="about__img">
<img class="about__img__inner" alt="about-img" src="../img/about-img-min.png">
</div>
<div class="about__text">
  <div class="about__text__head">
    <h1 class="about__text__head__main">Hey, I am Layla</h1>
    <h3 class="about__text__head__secondary">Life Coach For busy women on mission</h3>
  </div>
  <div class="about__text__main">
  <p class="about__text__main__paragraph">
  ليلى شبايك
  الانسانة والزوجة والام والاخت والابنة
  فى حياتى ادوار مختلفة بعيش بيها ومن خلالها
  اول تعريف ليا بحب يكون انا الانسان
  لان ده الاصل قبل ما اكون أى شىء تانى
  طول عمرى عندى اهتمام وشغف بالمجال الانسانى والاجتماعى وفهم نفسى والناس 
  مشيت طريق طويل صنع الانسانه اللى بتكتب لكم دلوقتى تعريف عنها
  حبيت يكون معبر عنى ببساطة لان البساطة من القيم المهم عندى جدااا الحياة مليئة بالتعقيدات والضغوط ولا تحتمل المزيد
  من خلال شغفى الغير موجه فى فترة الشباب لعدم اكتمال الوعى  عندى 
  كان خطواتى الاولى دخلت كليه اداب قسم اجتماع شعبه انثربولوجى جامعه عين شمس كليه البنات
  كنت شغفوفه جدااا بالمواد الدراسية بحب افهم جدااااا
   و اكتشف فى الايام الاخيرة ان دى قيمه عندى محركه هى قيمة المعرفة والنمو بحب افهم واتطور كل يوم
  بعدها انشغلت فتره لا ابأس بها فى تكوين اسرتى الجميلة 
  وده قيمه عندى مهم الاسرة(الوطن)
  ان اؤمن ان الاسرة هى الخلية الاولى الهامة فى المجتمع
  كل دى محركات لسلوكى لم أكن اعى بها بشكل مباشر
  الوعى بالضبط زى نظارة من غير شبورة الرؤية واضحه تمام اللاوعى شبورة بتسبب الارتباك والحيرة
  المهم خلال فترة رعايه وتكوين الاسرة كنت محبة جداااا للعلم شغوفه بيه لاقصى درجه
  اترجم ده فى قراءة الكتب وحضور المحاضرات وعدد لابأس به من الدورات التعلمية فى مجال تطوير الذات والاسرة وفهم النفس
  ثم التحقت بمعهد للعلوم الشرعية وكان الحافز عندى ان ادرس الدين بشكل اعمق وابذل جهد فى التعلم الشرعى زى مجالات التعليم الاخرى التى ابذل فيها الوقت والمال  
  وكانت مغامرة بالنسبه ليا كنت ام لاطفال صغار اصغرهم سنه واحده نوران بنتى الان عمرها 17 سنه بفضل الله واكبرهم مروان 21 سنوات واوسطهم روان 18 سنوات كان تحدى صعب

  </p>
  </div>
</div>
</section>
</div>

  `,
});
Vue.component("background-section", {
  template: `
    <div class="background-section">

    <div class="background-section__card">
    
      <h1 class="background-section__card__header" v-show="showHeader">ابدأ رحلة التغيير</h1>
      <p class="background-section__card__paragraph">خوض التحدي و ابدأ رحلتك الي الافضل مع كوتش ليلي شبايك</p>
      <a href="#services" aria-label="Services" class="background-section__card__btn">See service options</a>
    </div>

    </div>
  `,
  data() {
    return {
      showHeader: false,
    };
  },
  created() {
    window.addEventListener("scroll", this.captureScroll);
  },
  methods: {
    captureScroll() {
      if (window.scrollY > 784) {
        this.showHeader = true;
      }
    },
  },
});
Vue.component("my-footer", {
  template: `
 <div class="footer-container">
 
 <footer class="footer-distributed">
 
 <div class="footer-left">

 <h3>Layla<span>Shabayek</span></h3>

 <p class="footer-links">
 <a href="#home" aria-label="Home Section">Home</a>
 <span>·</span>
<a href="#services" aria-label="Services">Services</a>
<span>·</span>
<a href="#reviews" aria-label="Reviews">Reviews</a>
<span>·</span>
 <a href="#about" aria-label="about">About</a>
 <span>·</span>



 <a href="#contact">Contact</a>
 </p>

 <p class="footer-company-name">Layla Shabayek &copy; 2020</p>
 </div>

 <div class="footer-center">

 <div class="footer-items">
 <span class="location-icon">
 <i class="fa fa-map-marker "></i>
 </span>
 <p><span>Nilufer</span> Bursa, Turkey</p>
 </div>

 <div class="footer-items">
 <i class="fa fa-phone"></i>
 <p>+90 553 079 16 27</p>
 </div>

 

 </div>

 <div class="footer-right">
  

 <div class="footer-icons">

 <a href="https://www.instagram.com/layla.mohamed8394/" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
 <a href="https://www.instagram.com/layla.mohamed8394/" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
 <a href="https://wa.link/rzg2vh" aria-label="Whatsapp"> <i class="fab fa-whatsapp"></i></a>
 <a href="https://mail.google.com/" aria-label="Mail"><i class="far fa-envelope"></i></a>

 </div>

 </div>

 </footer>
 </div>
  `,
});
Vue.component("contact-us", {
  template: `

    <div class="contact-us-container">
  <div class="contact-us" >
  
    <div class="contact-us__img">
    <h1 class="contact-us__header">Get in touch.</h1>
    <p class="contact-us__paragraph">Let your journey begin.</p>
    </div>
    <div class="contact-us__social-media" id="contact">
    <div class="contact-us__social-media__container">
    <div class="contact-us__social-media__text-info">
    <h1 class="contact-us__social-media__header">Contact us.</h1>
    <p class="contact-us__social-media__p1"> Send us a message and we would get back to you as soon as possible.</p>
  <p class="contact-us__social-media__p2"> Give us a smile. <span class="contact-us__social-media__p2__icon"><i class="fas fa-smile-beam"></i></span></p>
    </div>
<div class="contact-us__social-media__items">
<a href="https://wa.link/rzg2vh" class="contact-us__social-media__item" aria-label="Whatsapp"><span class="special-text">WhatsAppp</span>
<span class="contact-us__social-media__icon"><i class="fab fa-whatsapp"></i></span>

</a>
<a href="https://www.instagram.com/layla.mohamed8394/" aria-label="Instagram" class="contact-us__social-media__item"><span class="special-text">Instagram</span>
<span class="contact-us__social-media__icon"><i class="fab fa-instagram"></i></span>


</a>
<a href="https://www.facebook.com/search/top?q=layla%20shabayak-life%20coach" aria-label="Facebook" class="contact-us__social-media__item"><span class="special-text">Facebook</span>
<span class="contact-us__social-media__icon"><i class="fab fa-facebook"></i></span>


</a>
<a href="https://mail.google.com/" aria-label="Email" class="contact-us__social-media__item"><span class="special-text">Email</span>
<span class="contact-us__social-media__icon"><i class="far fa-envelope"></i></span>

</a>
</div>
  </div>
    </div>
  </div>
    </div>
  `,
});
Vue.component("motivation-bar", {
  template: `
   <div class="review-bar-container">
   
   <div class="review-bar "  id="reviews"> 
   <div class="review-bar__text" v-show="show">
   
   <p>Smile like a baby.</p>
   <p class="arab">.ابتسم للحياه تبتسم لك</p>
   </div>
 </div>
   </div>
  `,
  data() {
    return {
      show: false,
    };
  },
  created() {
    if (window.innerWidth <= 1024) {
      this.show = true;
    }
    window.addEventListener("scroll", this.captureScroll);
  },
  methods: {
    captureScroll() {
      if (window.scrollY > 2784) {
        this.show = true;
      }
    },
  },
});
Vue.component("process-steps", {
  template: `
 <div class="process-steps-container">
 
  <div class="process">
    <h1 class="process__header">خطوات الشغل</h1>
    <div class="process__steps">
    <div class="process__steps__item">
    <h3 class="process__steps__item__step-number">الخطوه الاولي</h3>
<h1 class="process__steps__item__header">header</h1>
<p class="process__steps__item__paragraph">ل كلامي وحسيت انك ادركتي ممكن المشكله تكون فين وانها ممكن تكون مشكله لها جذور قديمه عشان كده اعتقد انك ممكن النهارده تكوني رسمتي تقريبا الخريطه الذهنيه بتاعتي وحطيتى خطه للشغل معايا</p>
    </div>
    <div class="process__steps__item">
    <h3 class="process__steps__item__step-number">الخطوه الثانيه </h3>
<h1 class="process__steps__item__header">header</h1>
<p class="process__steps__item__paragraph">ل كلامي وحسيت انك ادركتي ممكن المشكله تكون فين وانها ممكن تكون مشكله لها جذور قديمه عشان كده اعتقد انك ممكن النهارده تكوني رسمتي تقريبا الخريطه الذهنيه بتاعتي وحطيتى خطه للشغل معايا</p>    </div>
    <div class="process__steps__item">
    <h3 class="process__steps__item__step-number">الخطوه الثالثه 
     
    </h3>
<h1 class="process__steps__item__header">header</h1>
<p class="process__steps__item__paragraph">ل كلامي وحسيت انك ادركتي ممكن المشكله تكون فين وانها ممكن تكون مشكله لها جذور قديمه عشان كده اعتقد انك ممكن النهارده تكوني رسمتي تقريبا الخريطه الذهنيه بتاعتي وحطيتى خطه للشغل معايا</p>    </div> 

    </div>
  </div>

 </div>
  `,
});
Vue.component("reviews", {
  template: `
  <div class="reviews-container">
      <div class="reviews">
        <div class="the-reviews">
          <div class="reviews__card">
            <h1 class="reviews__card__header">
              Review <span class="reviews__card__header__number">1</span>
            </h1>
            <p class="reviews__card__text">
              اول سيشن النهارده حسيت انك تقريبا بتقرأى الكلام اللي جوه تفكيرى من
              خلال كلامي وحسيت انك ادركتي ممكن المشكله تكون فين وانها ممكن تكون
              مشكله لها جذور قديمه عشان كده اعتقد انك ممكن النهارده تكوني رسمتي
              تقريبا الخريطه الذهنيه بتاعتي وحطيتى خطه للشغل معايا
            </p>
          </div>
          <div class="reviews__card">
            <h1 class="reviews__card__header">
              Review<span class="reviews__card__header__number">2</span>
            </h1>
            <p class="reviews__card__text">
              الحقيقه السيشن المره دى كانت مختلفه لاني كنت محتاجه اتكلم كتير
              وانتى استوعبتينى جدا في النقطه دى وده فرق معايا كتير بعد ما خلصت
              السيشن لاني برتاح جدا لما اتكلم واحس اني بكلم حد حيفهمني و يتجاوب
              معايا ويحاول يساعدني
            </p>
          </div>
          <div class="reviews__card">
            <h1 class="reviews__card__header">
              Review<span class="reviews__card__header__number">3</span>
            </h1>
            <p class="reviews__card__text">
              عاوزه اقولك أن التغير ده مش لوحدي اللي حاسه بيه كل اللي حواليا
              حاسين بالتغير في اسلوبي وفي شخصيتي الجديده وفرحانين بيا جدا وده
              مأثر عليا بالايجاب ⁦♥️⁩
            </p>
          </div>

          <div class="reviews__card">
            <h1 class="reviews__card__header">
              Review<span class="reviews__card__header__number">4</span>
            </h1>
            <p class="reviews__card__text">
              شغلي كنت خلاص قربت أفقد الشغف نحيته وكنت بقالي شهرين معملتش شغل
              جديد من بعد اول سشن مع حضرتك وبقيت اطلع شغل انا نفسي مستغربه اني
              طلعته وحاجات كنت متخيله اني عمري ماهعرف اعملها وعملتها وحتي كل
              اللي حواليا بقو يقولولي شغلك اطور اووي
            </p>
          </div>
          <div class="reviews__card">
            <h1 class="reviews__card__header">
              Review<span class="reviews__card__header__number">5</span>
            </h1>
            <p class="reviews__card__text">
              لما كنت باخد خطوه ايجابيه كنت برجع عشره علشان فكره اني مش هعرف
              مسيطره عليا وفكره اني مبعرفش اعمل حاجه ومش هعرف دلوقتي اتخلصت من
              الفكره دي واكتشفت اني بعرف اعمل حاجات كتير جدا اللهم بارك
            </p>
          </div>
        </div>
        <button class="reviews__btn reviews__btn__next">Next</button>
        <button class="reviews__btn reviews__btn__prev">Prev</button>
        <span class="scroll-for-more"
          >
          
          <span class="scroll-for-more__icon"
            ><i class="fas fa-arrow-down"></i></span
        ></span>
      </div>
    </div>
  `,
  mounted() {
    document
      .querySelector(".reviews__btn__next")
      .addEventListener("click", this.nextSlide);
    document
      .querySelector(".reviews__btn__prev")
      .addEventListener("click", this.prevSlide);

    this.slidesNumber = document.querySelectorAll(".reviews__card").length - 1;
  },
  data() {
    return {
      slideCounter: 0,
      slidesNumber: null,
    };
  },
  methods: {
    prevSlide() {
      if (this.slideCounter > 0) {
        if (this.slideCounter > 1) {
          document.querySelector(".the-reviews").style.transform =
            "translateY(" + (this.slideCounter - 1) * -385 + "px)";
          this.slideCounter--;
        } else {
          document.querySelector(".the-reviews").style.transform =
            "translateY(" + 0 * 385 + "px)";
          this.slideCounter--;
        }
      } else {
        this.slideCounter = this.slidesNumber;
        document.querySelector(".the-reviews").style.transform =
          "translateY(" + this.slideCounter * -385 + "px)";
      }
    },
    nextSlide() {
      if (this.slideCounter < this.slidesNumber) {
        document.querySelector(".the-reviews").style.transform =
          "translateY(" + (this.slideCounter + 1) * -385 + "px)";
        this.slideCounter++;
        if (this.slideCounter % 4 == 1) {
        }
        if (this.slideCounter % 5 == 1) {
        }
      } else {
        this.slideCounter = 0;
        document.querySelector(".the-reviews").style.transform =
          "translateY(" + 0 + "px)";
      }
    },
  },
});

new Vue({
  el: "#app",
});
