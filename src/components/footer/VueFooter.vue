<template>
  <footer class="footer-wrapper">
    <b-container
      fluid-md
      class="footer-container d-flex justify-content-start pt-4"
    >
      <div
        class="
          contacts-and-link-container
          d-flex
          flex-column
          justify-content-between
          align-items-center
        "
      >
        <LogoLink class="logo-link" />
        <ul class="contacts-container">
          <ContactRow
            v-for="contact in contacts"
            :key="contact.data"
            :contact-data="contact.data"
            :icon-title="contact.icon"
          />
        </ul>
      </div>
      <ul class="working-hours-container">
        <WorkHour
          v-for="workingHour in workingHoursData"
          :key="workingHour.day"
          :work-day="workingHour.day"
          :work-time="workingHour.time"
        />
      </ul>
      <div
        class="
          social-links-container-wrapper
          d-flex
          flex-column
          justify-content-center
        "
      >
        <div class="social-links-container d-flex">
          <SocialLink
            v-for="socialLink in socialLinks"
            :key="socialLink.name"
            :icon-name="socialLink.name"
            :link-path="socialLink.path"
            class="social-link"
          />
        </div>
      </div>
    </b-container>
  </footer>
</template>

<script>
import { CONTACTS } from "@/store/constants/contactInformation/contacts.js";
import { WORKING_HOURS_DATA } from "@/store/constants/contactInformation/workingHours.js";
import { SOCIAL_LINKS } from "@/store/constants/contactInformation/socialLinks.js";
import WorkHour from "@/components/footer/WorkHour.vue";
import ContactRow from "@/components/footer/ContactRow.vue";
import LogoLink from "@/components/LogoLink.vue";
import SocialLink from "@/components/footer/SocialLink.vue";

export default {
  name: "VueFooter",
  components: {
    ContactRow,
    WorkHour,
    LogoLink,
    SocialLink,
  },
  data() {
    return {
      contacts: CONTACTS,
      workingHoursData: WORKING_HOURS_DATA,
      socialLinks: SOCIAL_LINKS,
    };
  },
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.footer-wrapper {
  background-color: black;
  background-image: url(../../assets/images/bck-bottom-navbar.png);
  background-repeat: no-repeat;
  background-position: top right;
  background-size: contain;
  min-height: 200px;
  .footer-ontainer {
    padding: 20px;
  }
  .logo-link {
    height: 130px;
    width: 150px;
    margin-bottom: 10px;
  }
  .social-links-container-wrapper {
    min-height: 100%;
    .social-link {
      margin-right: 20px;
    }
  }
  .contact-title {
    color: white;
  }

  .contacts-container,
  .working-hours-container {
    margin-right: 80px;
  }
  @media (max-width: 1190px) {
    .contacts-container,
    .working-hours-container {
      margin-right: 20px;
    }
  }
  @media (max-width: 980px) {
    .working-hours-container {
      display: none;
    }
  }
  @media (max-width: 780px) {
    .social-link {
      display: none;
    }
  }
}
</style>
