import { createRouter, createWebHistory } from 'vue-router'
import redirectIfGuest from '@/middleware/redirectIfGuest'
import redirectIfGuestPreRegisterProgram from '@/middleware/redirectIfGuestPreRegisterProgram'
import redirectIfGuestDaftarKehadiranProgram from '@/middleware/redirectIfGuestDaftarKehadiranProgram'
redirectIfGuestDaftarKehadiranProgram
import redirectIfGuestPentadbir from '@/middleware/redirectIfGuestPentadbir'
import authPentadbir from '@/middleware/authPentadbir'
import redirectIfAuthenticated from '@/middleware/redirectIfAuthenticated'
import middlewarePipeline from './middlewarePipeline'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 }
  },
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('../views/Ecommerce.vue'),
      meta: {
        //middleware: [redirectIfGuest],
        title: 'eCommerce Dashboard',
      },
    },
    {
      path: '/dashboardPentadbir',
      name: 'DashboardPentadbir',
      component: () => import('../views/EcommercePentadbir.vue'),
      meta: {
        title: 'Pentadbir Dashboard',
        middleware: [authPentadbir],
      },
    },
    {
      path: '/dashboardPenganjur',
      name: 'DashboardPenganjur',
      component: () => import('../views/EcommercePenganjur.vue'),
      meta: {
        title: 'Pentadbir Dashboard',

      },
    },
    {
      path: '/calendar',
      name: 'Kalendar Program',
      component: () => import('../views/Others/Calendar.vue'),
      meta: {
        title: 'Kalendar Program',
      },
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('../views/Others/UserProfile.vue'),
      meta: {
        title: 'Profile',
      },
    },
    {
      path: '/program/:id',
      name: 'View Program',
      component: () => import('../views/Programs/ViewProgramPeserta.vue'),
      meta: {
        title: 'Program',
      },
    },
    {
      path: '/program-penganjur/:id',
      name: 'View Program Penganjur',
      component: () => import('../views/Programs/ViewProgramPenganjur.vue'),
      meta: {
        title: 'Program',
      },
    },
    {
      path: '/program-penganjur-muat-naik-bahan/:id',
      name: 'View Program Penganjur Muat Naik Bahan',
      component: () => import('../views/Programs/ViewProgramMaterialPenganjur.vue'),
      meta: {
        title: 'Program (muat Naik Bahan)',
      },
    },
    {
      path: '/pra-pendaftaran-program/:id',
      name: 'Pra-Pendaftaran Program',
      component: () => import('../views/Programs/ViewProgramPraDaftarPeserta.vue'),
      meta: {
        title: 'Pra-Pendaftaran Program',
        middleware: [redirectIfGuestPreRegisterProgram],
      },
    },
    {
      path: '/daftar-kehadiran-program/:id',
      name: 'Daftar Kehahadiran Program',
      component: () => import('../views/Programs/ViewProgramDaftarKehadiranPeserta.vue'),
      meta: {
        title: 'Daftar Kehadiran Program',
        middleware: [redirectIfGuestDaftarKehadiranProgram],
      },
    },
    
    {
      path: '/form-elements',
      name: 'Form Elements',
      component: () => import('../views/Forms/FormElements.vue'),
      meta: {
        title: 'Form Elements',
      },
    },
    {
      path: '/form-register-user',
      name: 'Borang Pendaftaran Pengguna',
      component: () => import('../views/Forms/FormRegisterUser.vue'),
      meta: {
        title: 'Pendaftaran Pengguna',
        //middleware: [redirectIfGuest],
      },
    },
    {
      path: '/form-add-program',
      name: 'Tambah Program',
      component: () => import('../views/Forms/FormAddProgram.vue'),
      meta: {
        title: 'Tambah Program',
        //middleware: [redirectIfGuest],
      },
    },
    {
      path: '/users/:id/edit',
      name: 'Borang Kemaskini Pengguna.edit',
      component: () => import('../views/Forms/FormUpdateUser.vue'),
      meta: {
        title: 'Pendaftaran Pengguna',
        //middleware: [redirectIfGuest],
      },
    },
    {
      path: '/profile-pentadbir/:id/edit',
      name: 'Kemaskini Profil Pentadbir.edit',
      component: () => import('../views/Forms/FormUpdateProfilePentadbir.vue'),
      meta: {
        title: 'Kemaskini Profil',
        //middleware: [redirectIfGuest],
      },
    },
    {
      path: '/profile-penganjur/:id/edit',
      name: 'Kemaskini Profil Penganjur.edit',
      component: () => import('../views/Forms/FormUpdateProfilePenganjur.vue'),
      meta: {
        title: 'Kemaskini Profil',
        //middleware: [redirectIfGuest],
      },
    },
    {
      path: '/profile-peserta/:id/edit',
      name: 'Kemaskini Profil Peserta.edit',
      component: () => import('../views/Forms/FormUpdateProfilePeserta.vue'),
      meta: {
        title: 'Kemaskini Profil',
        //middleware: [redirectIfGuest],
      },
    },
    {
      path: '/programs/:id/edit',
      name: 'Borang Kemaskini Program.edit',
      component: () => import('../views/Forms/FormUpdateProgram.vue'),
      meta: {
        title: 'Kemaskini Program',
        //middleware: [redirectIfGuest],
      },
    },
    {
      path: '/programs-kehadiran/:id/daftar',
      name: 'Borang Kehadiran Program.daftar',
      component: () => import('../views/Forms/FormKehadiranProgram.vue'),
      meta: {
        title: 'Kemaskini Kehadiran Peserta Program',
        //middleware: [redirectIfGuest],
      },
    },
        {
      path: '/verify-certificate/:code',
      name: 'VerifyCertificate',
      component: () => import('../views/Programs/VerifyCertificate.vue'),
      meta: {
        title: 'Pengesahan Sijil',
        //middleware: [redirectIfGuest],
      },
    },
    {
      path: '/basic-tables',
      name: 'Basic Tables',
      component: () => import('../views/Tables/BasicTables.vue'),
      meta: {
        title: 'Basic Tables',
        middleware: [authPentadbir],
      },
    },
    {
      path: '/senarai-peserta-program/:id',
      name: 'Senarai Peserta Program',
      component: () => import('../views/Tables/BasicTablesPesertaProgramPenganjur.vue'),
      meta: {
        title: 'Senarai Peserta Program',
        //middleware: [redirectIfGuest],
      },
    },
        {
      path: '/kehadiran-peserta-program/:id',
      name: 'Senarai Kehadiran Peserta Program',
      component: () => import('../views/Tables/BasicTablesKehadiranPesertaProgramPenganjur.vue'),
      meta: {
        title: 'Senarai Kehadiran Peserta Program',
        //middleware: [redirectIfGuest],
      },
    },
    {
      path: '/senarai-program',
      name: 'Senarai Program Utama',
      component: () => import('../views/Programs/viewSenaraiProgramPenganjur.vue'),
      meta: {
        title: 'Senarai Program Utama',
        //middleware: [redirectIfGuest],
      },
    },
    {
      path: '/senarai-program-sijil',
      name: 'Senarai Program Sijil',
      component: () => import('../views/Programs/viewSenaraiProgramSijilPenganjur.vue'),
      meta: {
        title: 'Senarai Program',
        //middleware: [redirectIfGuest],
      },
    },
    {
      path: '/senarai-program-kehadiran',
      name: 'Senarai Program',
      component: () => import('../views/Programs/viewSenaraiProgramKehadiranPenganjur.vue'),
      meta: {
        title: 'Senarai Program',
        //middleware: [redirectIfGuest],
      },
    },
    {
      path: '/senarai-program-muat-naik-bahan',
      name: 'Senarai Program Muat Naik Bahan',
      component: () => import('../views/Programs/viewSenaraiProgramMaterialPenganjur.vue'),
      meta: {
        title: 'Senarai Program (Maut Naik Bahan)',
        //middleware: [redirectIfGuest],
      },
    },
    {
      path: '/senarai-program-peserta',
      name: 'Senarai Program Peserta',
      component: () => import('../views/Programs/viewSenaraiProgramPeserta.vue'),
      meta: {
        title: 'Senarai Program Peserta',
        //middleware: [redirectIfGuest],
      },
    },
    {
      path: '/line-chart',
      name: 'Line Chart',
      component: () => import('../views/Chart/LineChart/LineChart.vue'),
    },
    {
      path: '/bar-chart',
      name: 'Bar Chart',
      component: () => import('../views/Chart/BarChart/BarChart.vue'),
    },
    {
      path: '/alerts',
      name: 'Alerts',
      component: () => import('../views/UiElements/Alerts.vue'),
      meta: {
        title: 'Alerts',
      },
    },
    {
      path: '/avatars',
      name: 'Avatars',
      component: () => import('../views/UiElements/Avatars.vue'),
      meta: {
        title: 'Avatars',
      },
    },
    {
      path: '/badge',
      name: 'Badge',
      component: () => import('../views/UiElements/Badges.vue'),
      meta: {
        title: 'Badge',
      },
    },

    {
      path: '/buttons',
      name: 'Buttons',
      component: () => import('../views/UiElements/Buttons.vue'),
      meta: {
        title: 'Buttons',
      },
    },

    {
      path: '/images',
      name: 'Images',
      component: () => import('../views/UiElements/Images.vue'),
      meta: {
        title: 'Images',
      },
    },
    {
      path: '/videos',
      name: 'Videos',
      component: () => import('../views/UiElements/Videos.vue'),
      meta: {
        title: 'Videos',
      },
    },
    {
      //path: '/chat',
      path: '/blank',
      name: 'Blank',
      component: () => import('../views/Pages/BlankPage.vue'),
      meta: {
        title: 'Blank',
      },
    },

    {
      path: '/error-404',
      name: '404 Error',
      component: () => import('../views/Errors/FourZeroFour.vue'),
      meta: {
        title: '404 Error',
      },
    },

    {
      path: '/',
      name: 'Signin',
      component: () => import('../views/Auth/Signin.vue'),
      meta: {
        title: 'Signin',
        //middleware: [redirectIfAuthenticated],
      },
    },

    {
      path: '/signin',
      name: 'Signin Peserta',
      component: () => import('../views/Auth/Signin.vue'),
      meta: {
        title: 'Signin Peserta',
        //middleware: [redirectIfAuthenticated],
      },
    },
    {
      path: '/signin-pre-register',
      name: 'SigninPreRegister',
      component: () => import('../views/Auth/SigninPreRegister.vue'),
      meta: {
        title: 'Signin Pra Pendaftaran',
        //middleware: [redirectIfAuthenticated],
      },
    },
    {
      path: '/signin-daftar-kehadiran',
      name: 'SigninDafatarKehadiran',
      component: () => import('../views/Auth/SigninDaftarKehadiran.vue'),
      meta: {
        title: 'Signin Daftar Kehadiran',
        //middleware: [redirectIfAuthenticated],
      },
    },
    {
      path: '/pentadbir',
      name: 'Pentadbir',
      component: () => import('../views/Auth/SigninPentadbir.vue'),
      meta: {
        title: 'Pentadbir',
        //middleware: [redirectIfAuthenticated],
      },
    },
    {
      path: '/penganjur',
      name: 'Penganjur',
      component: () => import('../views/Auth/SigninPenganjur.vue'),
      meta: {
        title: 'Penganjur',
        //middleware: [redirectIfAuthenticated],
      },
    },
    {
      path: '/signup',
      name: 'Signup',
      component: () => import('../views/Auth/Signup.vue'),
      meta: {
        title: 'Signup',
      },
    },
    {
      path: '/signup-pre-register',
      name: 'SignupPreRegister',
      component: () => import('../views/Auth/SignupPreRegister.vue'),
      meta: {
        title: 'Signup Pre Registration',
      },
    },
    // {
    //   path: '/reset-password',
    //   name: 'Reset Password',
    //   component: () => import('../views/Auth/ResetPassword.vue.bak'),
    //   meta: {
    //     title: 'Signup',
    //   },
    // },
  ],
})

router.beforeEach((to, from, next) => {
  // Check if the route has middleware
  if (!to.meta.middleware) {
    return next()
  }

  // get the middleware from the route
  const middleware = to.meta.middleware
  const context = { to, from, next }
  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1),
  })
})

export default router

router.beforeEach((to, from, next) => {
  document.title = `ePNJevent ${to.meta.title} | Sistem Pengurusan Program Jabatan`
  next()
})
