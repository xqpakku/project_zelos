import { NgModule } from "@angular/core";
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule} from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatRadioModule } from '@angular/material/radio';


@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule, MatTableModule, MatToolbarModule,MatSlideToggleModule,
  MatListModule,MatDividerModule, MatGridListModule, MatTreeModule, MatIconModule, MatProgressSpinnerModule, MatSidenavModule,
MatTooltipModule, MatProgressBarModule, MatDialogModule, MatDatepickerModule, MatPaginatorModule, MatMenuModule,
MatExpansionModule, MatBadgeModule, MatTabsModule, MatSelectModule, MatSortModule, MatNativeDateModule, MatRippleModule,
DragDropModule, CdkTreeModule, MatSnackBarModule,MatRadioModule],
exports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule, MatTableModule, MatToolbarModule,MatSlideToggleModule,
  MatListModule,MatDividerModule, MatGridListModule, MatTreeModule, MatIconModule, MatProgressSpinnerModule, MatSidenavModule,
MatTooltipModule, MatProgressBarModule, MatDialogModule, MatDatepickerModule, MatPaginatorModule, MatMenuModule,
MatExpansionModule, MatBadgeModule, MatTabsModule, MatSelectModule, MatSortModule, MatNativeDateModule, MatRippleModule,
DragDropModule, CdkTreeModule, MatSnackBarModule,MatRadioModule]
})

export class AngularMaterialModule{ }
