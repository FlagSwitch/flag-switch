import AnalyticsIcon from '@mui/icons-material/Analytics';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export interface IRouteInfo {
    displayName: string;
    path: string;
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
}
export const routes: Record<string, IRouteInfo> = {
    overview: { displayName: 'Overview', path: "/overview", icon: AnalyticsIcon },
    projects: { displayName: 'Projects', path: "/projects", icon: DashboardIcon }
};