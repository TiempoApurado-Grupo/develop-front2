import {Component, OnInit} from '@angular/core';
import {PostsService} from "../../services/posts.service";
import {Tenant} from "../../model/tenant";
import {Lessor} from "../../model/lessor";
import {Comment} from "../../model/comment";

@Component({
  selector: 'app-quality-lessor',
  templateUrl: './quality-lessor.component.html',
  styleUrls: ['./quality-lessor.component.css']
})
export class QualityLessorComponent  implements OnInit{
  tenants:Tenant[]=[];
  lessors:Lessor[]=[];
  comments:Comment[]=[];
  stars: string[] = ['star', 'star', 'star', 'star', 'star-outline'];

  constructor(private postService:PostsService,) {
  }
  ngOnInit() {
    this.postService.getAllComments().subscribe(comments => {
      this.comments = comments;
      this.loadTenantAndLessorData();
    });
  }

  loadTenantAndLessorData() {
    this.postService.getAllTenants().subscribe(tenants => {
      this.tenants = tenants;
      this.loadLessors();
    });
  }

  loadLessors() {
    this.postService.getAllLessors().subscribe(lessors => {
      this.lessors = lessors;
    });
  }

  getTenantById(tenantId: number) {
    return this.tenants.find(tenant => tenant.id === tenantId);
  }

  getLessorById(lessorId: number) {
    return this.lessors.find(lessor => lessor.id === lessorId);
  }
  rateProfile(starIndex: number, rank:number) {
    rank = starIndex + 1;
  }

  getStarRange(rank:number): string[] {
    return this.stars.slice(0, rank);
  }
}
