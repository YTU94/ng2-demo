import {RouterModule} from "@angular/router";
import { UserComponent } from './user.component';


export const userRoutes = [
  	{
		path:'',
		component:UserComponent,
	    children: [
			{ path:'**', redirectTo:'write' }
	    ]
	}
];