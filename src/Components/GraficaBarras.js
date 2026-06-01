import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { BarChart } from '@mui/x-charts/BarChart';

const PALETA_STOCK = ['#b9030f', '#161917', '#2e7d32', '#1565c0'];
const PALETA_ALERTA = ['#ed6c02', '#d32f2f', '#f57c00', '#ff7043'];

const GraficaBarras = ({ titulo, barras, variant = 'stock' }) => {
  const theme = useTheme();
  const labels = barras.map((b) => b.nombre);
  const values = barras.map((b) => b.cantidad);
  const colors = variant === 'alert' ? PALETA_ALERTA : PALETA_STOCK;

  return (
    <Paper
      elevation={2}
      sx={{
        p: 2.5,
        borderRadius: 2,
        height: '100%',
        bgcolor: 'background.paper',
      }}
    >
      <Typography variant="subtitle1" fontWeight={700} gutterBottom color="text.primary">
        {titulo}
      </Typography>

      <Box sx={{ width: '100%', mt: 1, display: 'flex', justifyContent: 'center' }}>
        <BarChart
          slotProps={{
            barLabel: {
              fill: '#fff',
            },
          }}
          sx={{
            width: '100%',
            '& .MuiChartsAxis-line': { stroke: theme.palette.divider },
            '& .MuiChartsAxis-tick': { stroke: theme.palette.divider },
            '& .MuiChartsGrid-line': {
              strokeDasharray: '4 4',
              stroke: theme.palette.divider,
            },
            '& .MuiBarLabel-root, & .MuiBarChart-label': {
              fill: '#fff',
            },
          }}
          xAxis={[
            {
              scaleType: 'band',
              data: labels,
              height: 'auto',
              tickLabelStyle: {
                fontSize: 12,
                fill: theme.palette.text.primary,
              },
            },
          ]}
          yAxis={[
            {
              width: 'auto',
              tickLabelStyle: {
                fontSize: 12,
                fill: theme.palette.text.secondary,
              },
            },
          ]}
          series={[
            {
              data: values,
              label: titulo,
              barLabel: 'value',
              valueFormatter: (value) => (value == null ? '' : String(value)),
            },
          ]}
          colors={colors}
          height={320}
          margin={{ top: 24, bottom: 8, left: 8, right: 8 }}
          grid={{ horizontal: true }}
          borderRadius={8}
          hideLegend
        />
      </Box>
    </Paper>
  );
};

export default GraficaBarras;
