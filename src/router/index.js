import Vue from 'vue'
import Router from 'vue-router'
import Templates from '@/components/Templates'
import Binding from '@/components/Binding'
import HelloWorld from '@/components/HelloWorld'
import Vonce from '@/components/Vonce'
import HtmlOutput from '@/components/HtmlOutput'
import Events from '@/components/Events'
import Argument from '@/components/Argument'
import EventModification from '@/components/EventModification'
import KeyListening from '@/components/KeyListening'
import Javascript from '@/components/Javascript'
import TwoWay from '@/components/TwoWay'
import ReactiveData from '@/components/ReactiveData'
import Watch from '@/components/Watch'
import Css from '@/components/Css'
import CssNames from '@/components/CssNames'
import BindStyle from '@/components/BindStyle'
import VIf from '@/components/VIf'
import VFor from '@/components/VFor'
import IdCalculation from '@/components/IdCalculation'
import VForTemplates from '@/components/VForTemplates'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/templates',
      name: 'Templates',
      component: Templates
    },
    {
      path: '/binding',
      name: 'Binding',
      component: Binding
    },
    {
      path: '/vonce',
      name: 'Vonce',
      component: Vonce
    },
    {
      path: '/htmloutput',
      name: 'HtmlOutput',
      component: HtmlOutput
    },
    {
      path: '/events',
      name: 'Events',
      component: Events
    },
    {
      path: '/events/arguments',
      name: 'Arguments',
      component: Argument
    },
    {
      path: '/events/modification',
      name: 'EventModification',
      component: EventModification
    },
    {
      path: '/keyListening',
      name: 'KeyListening',
      component: KeyListening
    },
    {
      path: '/javascript',
      name: 'Javascript',
      component: Javascript
    },
    {
      path: '/two-way',
      name: 'Two-Way',
      component: TwoWay
    },
    {
      path: '/reactive-data',
      name: 'Reactive Data',
      component: ReactiveData
    },
    {
      path: '/watch',
      name: 'Watch',
      component: Watch
    },
    {
      path: '/css',
      name: 'CSS',
      component: Css
    },
    {
      path: '/css/names',
      name: 'CSSNames',
      component: CssNames
    },
    {
      path: '/css/bindstyle',
      name: 'Bind Style',
      component: BindStyle
    },
    {
      path: '/v-if',
      name: 'V-if',
      component: VIf
    },
    {
      path: '/v-for',
      name: 'V-for',
      component: VFor
    },
    {
      path: '/id-calculation',
      name: 'IdCalculation',
      component: IdCalculation
    },
    {
      path: '/v-for/template',
      name: 'VFor Templates',
      component: VForTemplates
    }
  ]
})
