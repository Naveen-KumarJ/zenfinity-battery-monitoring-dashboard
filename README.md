# Zenfinity Battery Monitoring Dashboard

![Dashboard Screenshot](./screenshots/dashboard-screenshot.png)

A comprehensive dashboard for monitoring battery performance metrics in real-time, featuring interactive charts, mini cards for key metrics, and a detailed performance table.

## Live Demo Link

Add a live demo link if you deploy the dashboard (e.g., Vercel, Netlify):  
`https://battery-monitoring-dashboard.vercel.app`

## Features

- Real-time visualization of battery State of Charge (SOC)
- Voltage, current, and power monitoring
- Cumulative ampere-hours (Ah) calculation
- Interactive charts with zoom/pan functionality
- Responsive design for all screen sizes
- Performance data table with pagination

## Screenshots

### Main Dashboard View
![Main Dashboard](./screenshots/main-view.png)

### Performance Table
![Performance Table](./screenshots/performance-table.png)

## Technologies Used

- React.js
- Chart.js with zoom plugin
- Tailwind CSS
- Shadcn UI components
- Date-fns for time handling

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/battery-monitoring-dashboard.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to `http://localhost:3000`


## Components

### ChartCard
Interactive line charts with:
- Zoom in/out functionality
- Panning capability
- Time-series visualization
- Customizable colors

### MiniCard
Compact display cards showing:
- Current SOC percentage
- Voltage and current values
- Instantaneous power calculation
- Trend indicators (▲/▼)

### PerformanceTable
Detailed tabular data with:
- Pagination (10 rows per page)
- Calculated power values
- Time-formatted display
- Responsive design

## How It Works

1. The dashboard fetches battery data from `fetchBatteryData()` service
2. Data is processed to calculate:
   - Instantaneous power (V × I)
   - Cumulative ampere-hours (∫I dt)
3. Charts are rendered using Chart.js with time-series adaptation
4. The performance table displays paginated raw data