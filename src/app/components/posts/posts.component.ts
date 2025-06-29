import { Component } from '@angular/core';
import { Post } from '../../models/post';
import { PostsService } from '../../services/posts.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  posts: Post[] = [];
  isLoading = true;
  error = '';
  currentPage = 1;
  postsPerPage = 6;

  constructor(private _PostsService: PostsService) {}

  ngOnInit() {
    this._PostsService.getPosts().subscribe({
      next: (data: Post[]) => {
        this.posts = data;
        this.isLoading = false;
      },
      error: () => {
        this.error = 'Error Loading';
        this.isLoading = false;
      }
    });
  }

  get paginatedPosts(): Post[] {
    const start = (this.currentPage - 1) * this.postsPerPage;
    return this.posts.slice(start, start + this.postsPerPage);
  }

  get totalPages(): number {
    return Math.ceil(this.posts.length / this.postsPerPage);
  }

  get pages(): number[] {
    return Array(this.totalPages).fill(0).map((_, i) => i + 1);
  }

  goToPage(page: number) {
    this.currentPage = page;
  }

  prevPage() {
    if (this.currentPage > 1) this.currentPage--;
  }

  nextPage() {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }

  getRandomImage(): string {
    return `https://picsum.photos/id/${Math.floor(Math.random() * 50) + 1}/400/200`;
  }

}
