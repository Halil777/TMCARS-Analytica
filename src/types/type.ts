// Dashboard Top Cars types starts here .............................................................

import { Dayjs } from "dayjs";

export interface CarData {
  _source: {
    markasy: string;
    ady: string;
    yyly: string;
    bahasy: number;
  };
}

export interface TopCarsDashboardData {
  top: CarData[];
}

export interface TopCarsProps {
  dashboardData: TopCarsDashboardData;
}

// Dashboard Cards types starts here ...................................................................

export interface Bucket {
  key: string;
  doc_count: number;
  max_price: { value: number };
  min_price: { value: number };
  avg_price: { value: number };
}

export interface BrandPriceComparisonDashboardData {
  brand_price_comparison: {
    buckets: Bucket[];
  };
}

export interface DashboardCardsProps {
  dashboardData: BrandPriceComparisonDashboardData;
}

// FuulTable types starts here ................................................................

export interface DataType {
  key: string;
  markasy: string;
  ady: string;
  yyly: string;
  bahasy: number;
  created_at: string;
}

export interface CarFiltersProps {
  tableData: DataType[];
  onPaginationChange: (page: number, pageSize: number) => void;
}

// FuulTable types ends here ................................................................

export interface FilterState {
  brand: string | null;
  model: string | null;
  year: string | null;
  startDate: Dayjs | null;
  endDate: Dayjs | null;
}
