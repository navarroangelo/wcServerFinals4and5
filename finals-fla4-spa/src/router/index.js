import Vue from "vue";
import Router from "vue-router";
import Profile from "@/components/Profile.vue";
import Education from "@/components/Education.vue";
import Skills from "@/components/Skills.vue";

Vue.use(Router);

export default new Router({
    routes: [{
            path: "/",
            name: "Profile",
            component: Profile,
        },
        {
            path: "/education",
            name: "Education",
            component: Education,
        },
        {
            path: "/skills",
            name: "Skills",
            component: Skills,
        },
    ],
});