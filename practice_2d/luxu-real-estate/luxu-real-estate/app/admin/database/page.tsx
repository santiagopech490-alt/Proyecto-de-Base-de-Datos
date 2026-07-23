'use client';

import { useState, useEffect } from 'react';
import { Database, Table, Layers, Cpu, ShieldCheck, HardDrive, CheckCircle2, Server } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import Link from 'next/link';

export default function DatabaseDashboardPage() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'relational' | 'nosql' | 'objects' | 'dictionary'>('relational');

  return (
    <div className="min-h-screen bg-[#FBFDFB] pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
          <div>
            <div className="flex items-center gap-2 text-[#006655] font-bold text-sm mb-1 uppercase tracking-wider">
              <Database className="w-5 h-5" />
              <span>{language === 'es' ? 'Gestor de Bases de Datos Híbrido' : 'Hybrid Database Manager'}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#19322F]">
              {language === 'es' ? 'Diagnóstico y Objetos de Base de Datos' : 'Database Objects & Diagnostics'}
            </h1>
            <p className="text-[#5C706D] text-sm mt-1">
              PostgreSQL (Relacional Transaccional 3FN) + MongoDB Atlas (NoSQL Documental) + Redis (Caché Clave-Valor)
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/admin/properties">
              <Button className="bg-[#006655] hover:bg-[#005544] text-white font-bold rounded-xl cursor-pointer">
                {language === 'es' ? 'Ver Panel CRUD' : 'View CRUD Panel'}
              </Button>
            </Link>
          </div>
        </div>

        {/* Top KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">PostgreSQL (Relacional)</p>
                <h3 className="text-2xl font-bold text-[#19322F] mt-1">200 Tuplas</h3>
                <p className="text-xs text-emerald-600 font-semibold mt-1">50 registros / tabla (3FN)</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#006655] flex items-center justify-center">
                <Database className="w-6 h-6" />
              </div>
            </div>
          </Card>

          <Card className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">MongoDB (NoSQL Documental)</p>
                <h3 className="text-2xl font-bold text-[#19322F] mt-1">10,000 Docs</h3>
                <p className="text-xs text-emerald-600 font-semibold mt-1">Colección properties_nosql</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#006655] flex items-center justify-center">
                <HardDrive className="w-6 h-6" />
              </div>
            </div>
          </Card>

          <Card className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Redis (Clave-Valor)</p>
                <h3 className="text-2xl font-bold text-[#19322F] mt-1">Activo</h3>
                <p className="text-xs text-emerald-600 font-semibold mt-1">all_properties_cache (TTL 120s)</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#006655] flex items-center justify-center">
                <Server className="w-6 h-6" />
              </div>
            </div>
          </Card>

          <Card className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Restricciones Integrity</p>
                <h3 className="text-2xl font-bold text-[#19322F] mt-1">6/6 Tipos</h3>
                <p className="text-xs text-emerald-600 font-semibold mt-1">PK, FK, UNIQUE, CHECK, NOT NULL, DEFAULT</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#006655] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
            </div>
          </Card>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 border-b border-slate-200">
          <button
            onClick={() => setActiveTab('relational')}
            className={`px-4 py-3 text-sm font-bold border-b-2 transition-all cursor-pointer ${
              activeTab === 'relational' ? 'border-[#006655] text-[#006655]' : 'border-transparent text-slate-400 hover:text-slate-700'
            }`}
          >
            PostgreSQL (Relacional 3FN)
          </button>
          <button
            onClick={() => setActiveTab('nosql')}
            className={`px-4 py-3 text-sm font-bold border-b-2 transition-all cursor-pointer ${
              activeTab === 'nosql' ? 'border-[#006655] text-[#006655]' : 'border-transparent text-slate-400 hover:text-slate-700'
            }`}
          >
            MongoDB / Redis (NoSQL)
          </button>
          <button
            onClick={() => setActiveTab('objects')}
            className={`px-4 py-3 text-sm font-bold border-b-2 transition-all cursor-pointer ${
              activeTab === 'objects' ? 'border-[#006655] text-[#006655]' : 'border-transparent text-slate-400 hover:text-slate-700'
            }`}
          >
            Objetos (Triggers, Vistas, SP, Índices)
          </button>
          <button
            onClick={() => setActiveTab('dictionary')}
            className={`px-4 py-3 text-sm font-bold border-b-2 transition-all cursor-pointer ${
              activeTab === 'dictionary' ? 'border-[#006655] text-[#006655]' : 'border-transparent text-slate-400 hover:text-slate-700'
            }`}
          >
            Diccionario de Datos
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'relational' && (
          <div className="space-y-6">
            <Card className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <CardTitle className="text-xl font-bold text-[#19322F] mb-4 flex items-center gap-2">
                <Table className="w-5 h-5 text-[#006655]" />
                <span>Tablas Relacionales en PostgreSQL (50 registros por tabla)</span>
              </CardTitle>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-bold text-[#19322F]">1. profiles (Usuarios y Perfiles)</h4>
                    <Badge className="bg-emerald-100 text-[#006655]">50 tuplas</Badge>
                  </div>
                  <p className="text-xs text-[#5C706D]">Campos: id (PK), full_name, email (UQ), role (CHECK), location, member_since, updated_at.</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-bold text-[#19322F]">2. properties (Inmuebles de Lujo)</h4>
                    <Badge className="bg-emerald-100 text-[#006655]">50 tuplas</Badge>
                  </div>
                  <p className="text-xs text-[#5C706D]">Campos: id (PK), slug (UQ), title, price (CHECK), status (CHECK), beds, baths, sqft, owner_id (FK).</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-bold text-[#19322F]">3. user_favorites (Propiedades Guardadas)</h4>
                    <Badge className="bg-emerald-100 text-[#006655]">50 tuplas</Badge>
                  </div>
                  <p className="text-xs text-[#5C706D]">Campos: id (PK), user_id (FK), property_id (FK), created_at. Restricción UNIQUE(user_id, property_id).</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-bold text-[#19322F]">4. appointments (Citas para Visitas)</h4>
                    <Badge className="bg-emerald-100 text-[#006655]">50 tuplas</Badge>
                  </div>
                  <p className="text-xs text-[#5C706D]">Campos: id (PK), user_id (FK), property_id (FK), booking_date_time, notes, status (CHECK).</p>
                </div>
              </div>
            </Card>
          </div>
        )}

        {activeTab === 'nosql' && (
          <div className="space-y-6">
            <Card className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <CardTitle className="text-xl font-bold text-[#19322F] mb-4 flex items-center gap-2">
                <HardDrive className="w-5 h-5 text-[#006655]" />
                <span>Base de Datos No Relacional: MongoDB Atlas & Redis</span>
              </CardTitle>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-100">
                  <h4 className="font-bold text-[#19322F] mb-1">Colección MongoDB: properties_nosql (10,000 Documentos)</h4>
                  <p className="text-xs text-[#5C706D] mb-3">Documentos BSON con estructuras anidadas de geolocalización, amenidades, años de construcción y analítica masiva de vistas.</p>
                  <pre className="bg-white p-3 rounded-lg border border-slate-200 text-xs font-mono overflow-x-auto text-[#19322F]">
{`{
  "_id": "66a01b2c00000001",
  "slug": "propiedad-casa-beverly-hills-1",
  "title": "Casa Lujosa #1 en Beverly Hills",
  "price": 5250000,
  "status": "ACTIVE",
  "specs": { "beds": 5, "baths": 4.5, "sqft": 4200 },
  "location": { "city_state": "Beverly Hills, CA", "coordinates": { "lat": 34.07, "lng": -118.40 } },
  "analytics": { "views": 1420, "saved_in_favorites_count": 89 }
}`}
                  </pre>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h4 className="font-bold text-[#19322F] mb-1">Redis Cache (Clave-Valor)</h4>
                  <p className="text-xs text-[#5C706D]">Clave: <code className="bg-slate-200 px-1 py-0.5 rounded">all_properties_cache</code> | TTL: 120 segundos | Acelera consultas del catálogo evitando saturar PostgreSQL.</p>
                </div>
              </div>
            </Card>
          </div>
        )}

        {activeTab === 'objects' && (
          <div className="space-y-6">
            <Card className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <CardTitle className="text-xl font-bold text-[#19322F] mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#006655]" />
                <span>Objetos Almacenados en la Base de Datos Relacional</span>
              </CardTitle>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-[#006655] text-white font-bold text-xs uppercase">
                    <tr>
                      <th className="p-3 rounded-l-xl">Tipo de Objeto</th>
                      <th className="p-3">Nombre en BD</th>
                      <th className="p-3">Función Operativa</th>
                      <th className="p-3">Tablas Afectadas</th>
                      <th className="p-3 rounded-r-xl">Ubicación en el Motor</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-[#19322F]">
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-bold">Vista (View)</td>
                      <td className="p-3 font-mono text-xs">vw_active_properties_summary</td>
                      <td className="p-3">Filtro rápido de inmuebles activos</td>
                      <td className="p-3">properties, profiles</td>
                      <td className="p-3 text-xs text-slate-500">pg_views</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-bold">Disparador (Trigger)</td>
                      <td className="p-3 font-mono text-xs">trg_properties_timestamp</td>
                      <td className="p-3">Actualiza fecha de modificación</td>
                      <td className="p-3">properties</td>
                      <td className="p-3 text-xs text-slate-500">pg_trigger</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-bold">Procedimiento (SP)</td>
                      <td className="p-3 font-mono text-xs">sp_schedule_visit</td>
                      <td className="p-3">Reserva de citas transaccionales</td>
                      <td className="p-3">appointments</td>
                      <td className="p-3 text-xs text-slate-500">pg_proc</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-bold">Función (Function)</td>
                      <td className="p-3 font-mono text-xs">fn_calculate_kpis()</td>
                      <td className="p-3">Retorna métricas y valor total</td>
                      <td className="p-3">properties</td>
                      <td className="p-3 text-xs text-slate-500">pg_proc</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-bold">Índice (Index)</td>
                      <td className="p-3 font-mono text-xs">idx_properties_slug</td>
                      <td className="p-3">Búsqueda B-Tree en O(log N)</td>
                      <td className="p-3">properties</td>
                      <td className="p-3 text-xs text-slate-500">pg_am</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        )}

        {activeTab === 'dictionary' && (
          <div className="space-y-6">
            <Card className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <CardTitle className="text-xl font-bold text-[#19322F] mb-4 flex items-center gap-2">
                <Database className="w-5 h-5 text-[#006655]" />
                <span>Diccionario de Datos: Tabla properties</span>
              </CardTitle>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-[#006655] text-white font-bold text-xs uppercase">
                    <tr>
                      <th className="p-3 rounded-l-xl">Campo</th>
                      <th className="p-3">Tipo Dato</th>
                      <th className="p-3">Longitud</th>
                      <th className="p-3">Llave</th>
                      <th className="p-3">Nulo</th>
                      <th className="p-3">Descripción</th>
                      <th className="p-3 rounded-r-xl">Restricciones</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-[#19322F]">
                    <tr><td className="p-3 font-bold">id</td><td className="p-3">UUID</td><td className="p-3">36</td><td className="p-3 font-bold text-emerald-700">PK</td><td className="p-3">NO</td><td className="p-3">Identificador único de propiedad</td><td className="p-3 text-xs">gen_random_uuid()</td></tr>
                    <tr><td className="p-3 font-bold">slug</td><td className="p-3">VARCHAR</td><td className="p-3">200</td><td className="p-3 font-bold text-blue-700">UQ</td><td className="p-3">NO</td><td className="p-3">URL amigable única</td><td className="p-3 text-xs">UNIQUE, NOT NULL</td></tr>
                    <tr><td className="p-3 font-bold">title</td><td className="p-3">VARCHAR</td><td className="p-3">200</td><td className="p-3">-</td><td className="p-3">NO</td><td className="p-3">Título de la propiedad</td><td className="p-3 text-xs">NOT NULL</td></tr>
                    <tr><td className="p-3 font-bold">price</td><td className="p-3">NUMERIC</td><td className="p-3">15,2</td><td className="p-3">-</td><td className="p-3">NO</td><td className="p-3">Precio publicado en USD</td><td className="p-3 text-xs">CHECK (price {'>='} 0)</td></tr>
                    <tr><td className="p-3 font-bold">status</td><td className="p-3">VARCHAR</td><td className="p-3">20</td><td className="p-3">-</td><td className="p-3">NO</td><td className="p-3">Estado comercial</td><td className="p-3 text-xs">CHECK (status IN (...))</td></tr>
                    <tr><td className="p-3 font-bold">owner_id</td><td className="p-3">UUID</td><td className="p-3">36</td><td className="p-3 font-bold text-purple-700">FK</td><td className="p-3">SI</td><td className="p-3">ID del propietario en profiles</td><td className="p-3 text-xs">REFERENCES profiles(id)</td></tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        )}

      </div>
    </div>
  );
}
