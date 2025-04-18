import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Firestore, getFirestore, provideFirestore } from '@angular/fire/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { Config } from './config';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RouterTestingModule, 
      MatDialogModule,
      MatSidenavModule,
      BrowserAnimationsModule,
      MatIconModule,
      MatToolbarModule,
      provideFirebaseApp(() => initializeApp(Config)),
      provideFirestore(() => getFirestore())],
    declarations: [AppComponent],
    providers: [
      {
        provide: MatDialogRef,
        useValue: { close: () => { } }
      },
      {
        provide: MAT_DIALOG_DATA,
        useValue: {}
      }
    ]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  /* it('should render title', () => {
     const fixture = TestBed.createComponent(AppComponent);
     fixture.detectChanges();
     const compiled = fixture.nativeElement as HTMLElement;
     expect(compiled.querySelector('.content span')?.textContent).toContain('simple-crm app is running!');
   });
   */
});
