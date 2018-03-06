import { NgModule, ErrorHandler } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { IonicApp, IonicModule, IonicErrorHandler, DeepLinkConfig } from 'ionic-angular'
import { IonicStorageModule } from '@ionic/storage'
import { AppComponent } from './app.component'
import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'
import { ShareModule } from '../share/share.module'
import { CoreModule } from '../core/core.module'
import { HomeComponent } from '../pages/home/home.component'
import { UserComponent } from '../pages/user/user.component'
import { TopicListComponent } from '../pages/home/components/topic-list/topic-list.component'
import { TopicDetailComponent } from '../pages/home/components/topic-detail/topic-detail.component'
import { TopicCommentComponent } from '../pages/home/components/topic-comment/topic-comment.component'

const HOME_COMPONENTS = [
    TopicListComponent,
    TopicDetailComponent,
    TopicCommentComponent,
    HomeComponent
]

const USER_COMPONENTS = [
    UserComponent
]

const COMPONENTS = [
    AppComponent,
    ...HOME_COMPONENTS,
    ...USER_COMPONENTS
]

const IONIC_MODULE_CONFIG = {
    preloadModules: true
}

const DEEP_LINK_CONFIG: DeepLinkConfig = {
    links: [
        {
            component: HomeComponent,
            name: 'home',
            segment: 'home',
            defaultHistory: [],
            priority: 'high'
        },
        {
            component: UserComponent,
            name: 'user',
            segment: 'user',
            defaultHistory: [],
            priority: 'high'
        },
        {
            component: TopicDetailComponent,
            name: 'topic-detail',
            segment: 'detail/:id',
            defaultHistory: ['home']
        }
    ]
}

@NgModule({
    declarations: [
        ...COMPONENTS
    ],
    imports: [
        BrowserModule,
        CoreModule,
        ShareModule,
        IonicModule.forRoot(AppComponent, IONIC_MODULE_CONFIG, DEEP_LINK_CONFIG),
        IonicStorageModule.forRoot({ name: 'database' })
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        ...COMPONENTS
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule {
}
