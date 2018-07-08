import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private spotifyService: SpotifyService
  ) { }

  featuredPlaylists;

  ngOnInit() {
    if (!this.spotifyService.isAuthenticated()) {
      this.router.navigate(['login']);
    }

    this.spotifyService.getFeaturedPlaylists().subscribe(
      res => {
        console.log(res);
        this.featuredPlaylists = res;
      }
    );
  }

  open(item) {
    window.location.href=item.uri;
  }

}