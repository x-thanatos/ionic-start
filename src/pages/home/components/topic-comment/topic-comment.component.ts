import { Component, Input, OnInit, SecurityContext } from '@angular/core'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'
import { TopicReply } from '../../../../core/store/home/home.model'

@Component({
    selector: 'topic-comment',
    templateUrl: 'topic-comment.component.html',
    styleUrls: ['topic-comment.component.scss']
})
export class TopicCommentComponent implements OnInit {
    @Input() comments: TopicReply[] = []

    constructor(private _sanitizer: DomSanitizer) {
    }

    ngOnInit() {
    }

    _htmlSanitizer(html): SafeHtml {
        return this._sanitizer.sanitize(SecurityContext.HTML, html)
    }
}
