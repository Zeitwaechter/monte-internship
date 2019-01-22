import { NgModule } from '@angular/core';
import { UsersComponent } from './users/users';
import { PostsComponent } from './posts/posts';

@NgModule({
	declarations: [UsersComponent,
    PostsComponent],
	imports: [],
	exports: [UsersComponent,
    PostsComponent]
})
export class ComponentsModule {}
