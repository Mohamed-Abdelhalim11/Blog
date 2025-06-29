import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../models/post';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css'
})
export class PostDetailsComponent {
  post!: Post;
  isLoading = true;
  error = '';

  constructor(private route: ActivatedRoute, private _PostsService: PostsService, private router: Router) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this._PostsService.getPost(id).subscribe({
      next: (data) => {
        this.post = data;
        this.isLoading = false;
      },
      error: () => {
        this.error = 'Error Loading Article';
        this.isLoading = false;
      }
    });
  }

  goBack() {
    this.router.navigate(['/posts']);
  }
}
