/*
 * Copyright 2026 Thanooj Kalathuru
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Initial fallback data for direct double-click (file:// protocol)
// Ensures content always loads even without a local web server!
const DEFAULT_CATALOG_DATA = {
    "brands":  [
                   {
                       "id":  "apple",
                       "name":  "Apple",
                       "origin":  "USA",
                       "series":  [
                                      {
                                          "id":  "iphone-pro-max",
                                          "name":  "iPhone Pro Max Series"
                                      },
                                      {
                                          "id":  "iphone-pro",
                                          "name":  "iPhone Pro Series"
                                      },
                                      {
                                          "id":  "iphone-base",
                                          "name":  "Standard iPhone Series"
                                      }
                                  ]
                   },
                   {
                       "id":  "asus",
                       "name":  "Asus",
                       "series":  [
                                      {
                                          "id":  "rog-phone",
                                          "name":  "ROG Phone Series"
                                      }
                                  ],
                       "origin":  "Taiwan"
                   },
                   {
                       "id":  "google",
                       "name":  "Google Pixel",
                       "origin":  "USA",
                       "series":  [
                                      {
                                          "id":  "pixel-pro",
                                          "name":  "Pixel Pro Series"
                                      },
                                      {
                                          "id":  "pixel-base",
                                          "name":  "Pixel Series"
                                      }
                                  ]
                   },
                   {
                       "id":  "honor",
                       "name":  "Honor",
                       "series":  [
                                      {
                                          "id":  "magic-series",
                                          "name":  "Magic Series"
                                      }
                                  ],
                       "origin":  "China"
                   },
                   {
                       "id":  "huawei",
                       "name":  "Huawei",
                       "series":  [
                                      {
                                          "id":  "pura-series",
                                          "name":  "Pura Series"
                                      }
                                  ],
                       "origin":  "China"
                   },
                   {
                       "id":  "motorola",
                       "name":  "Motorola",
                       "series":  [
                                      {
                                          "id":  "razr-series",
                                          "name":  "Razr Series"
                                      }
                                  ],
                       "origin":  "USA / Global"
                   },
                   {
                       "id":  "nothing",
                       "name":  "Nothing",
                       "series":  [
                                      {
                                          "id":  "phone-series",
                                          "name":  "Phone Series"
                                      }
                                  ],
                       "origin":  "United Kingdom"
                   },
                   {
                       "id":  "oneplus",
                       "name":  "OnePlus",
                       "series":  [
                                      {
                                          "id":  "oneplus-number",
                                          "name":  "OnePlus Flagship Series"
                                      },
                                      {
                                          "id":  "oneplus-open",
                                          "name":  "OnePlus Foldable Series"
                                      }
                                  ],
                       "origin":  "China"
                   },
                   {
                       "id":  "oppo",
                       "name":  "Oppo",
                       "series":  [
                                      {
                                          "id":  "find-x",
                                          "name":  "Find X Series"
                                      }
                                  ],
                       "origin":  "China"
                   },
                   {
                       "id":  "realme",
                       "name":  "Realme",
                       "series":  [
                                      {
                                          "id":  "gt-series",
                                          "name":  "GT Series"
                                      }
                                  ],
                       "origin":  "China"
                   },
                   {
                       "id":  "samsung",
                       "name":  "Samsung",
                       "origin":  "South Korea",
                       "series":  [
                                      {
                                          "id":  "galaxy-s-ultra",
                                          "name":  "Galaxy S Ultra Series"
                                      },
                                      {
                                          "id":  "galaxy-z-fold",
                                          "name":  "Galaxy Z Fold Series"
                                      },
                                      {
                                          "id":  "galaxy-s-plus",
                                          "name":  "Galaxy S Series"
                                      }
                                  ]
                   },
                   {
                       "id":  "sony",
                       "name":  "Sony",
                       "origin":  "Japan",
                       "series":  [
                                      {
                                          "id":  "xperia-1",
                                          "name":  "Xperia 1 Series"
                                      }
                                  ]
                   },
                   {
                       "id":  "vivo",
                       "name":  "Vivo",
                       "series":  [
                                      {
                                          "id":  "x-series",
                                          "name":  "X Series"
                                      }
                                  ],
                       "origin":  "China"
                   },
                   {
                       "id":  "xiaomi",
                       "name":  "Xiaomi",
                       "series":  [
                                      {
                                          "id":  "xiaomi-ultra",
                                          "name":  "Xiaomi Ultra Series"
                                      },
                                      {
                                          "id":  "xiaomi-pro",
                                          "name":  "Xiaomi Series"
                                      }
                                  ],
                       "origin":  "China"
                   }
               ],
    "segregations":  {
                         "priceSegments":  [
                                               {
                                                   "id":  "ultra-premium",
                                                   "label":  "Ultra Flagship ($1,000+)"
                                               },
                                               {
                                                   "id":  "flagship-killer",
                                                   "label":  "Upper Mid / Flagship Killer ($600 - $999)"
                                               },
                                               {
                                                   "id":  "mid-range",
                                                   "label":  "Mainstream Mid-Range ($300 - $599)"
                                               },
                                               {
                                                   "id":  "budget",
                                                   "label":  "Entry Budget (Under $300)"
                                               }
                                           ],
                         "formFactors":  [
                                             {
                                                 "id":  "bar",
                                                 "label":  "Standard Slate / Bar"
                                             },
                                             {
                                                 "id":  "book-fold",
                                                 "label":  "Book Foldable (Horizontal)"
                                             },
                                             {
                                                 "id":  "clamshell-flip",
                                                 "label":  "Flip / Clamshell Foldable"
                                             }
                                         ],
                         "chipsetMakers":  [
                                               {
                                                   "id":  "apple-silicon",
                                                   "label":  "Apple Silicon (A-Series)"
                                               },
                                               {
                                                   "id":  "qualcomm-snapdragon",
                                                   "label":  "Qualcomm Snapdragon"
                                               },
                                               {
                                                   "id":  "google-tensor",
                                                   "label":  "Google Tensor"
                                               },
                                               {
                                                   "id":  "mediatek-dimensity",
                                                   "label":  "MediaTek Dimensity"
                                               }
                                           ],
                         "displayTypes":  [
                                              {
                                                  "id":  "ltpo-oled",
                                                  "label":  "LTPO AMOLED / OLED (1-120Hz)"
                                              },
                                              {
                                                  "id":  "tandem-oled",
                                                  "label":  "Tandem OLED"
                                              },
                                              {
                                                  "id":  "standard-oled",
                                                  "label":  "OLED / AMOLED 120Hz"
                                              },
                                              {
                                                  "id":  "ips-lcd",
                                                  "label":  "IPS LCD"
                                              }
                                          ],
                         "cameraTiers":  [
                                             {
                                                 "id":  "periscope-zoom",
                                                 "label":  "Periscope Telephoto (5x-10x Optical)"
                                             },
                                             {
                                                 "id":  "200mp-sensor",
                                                 "label":  "200MP Ultra-High Res Sensor"
                                             },
                                             {
                                                 "id":  "1-inch-sensor",
                                                 "label":  "1-inch Type Large Sensor"
                                             },
                                             {
                                                 "id":  "standard-tele",
                                                 "label":  "Standard Telephoto (2x-3x Optical)"
                                             }
                                         ],
                         "batteryChargingTiers":  [
                                                      {
                                                          "id":  "ultra-fast-100w",
                                                          "label":  "Ultra Fast Charging (100W+)"
                                                      },
                                                      {
                                                          "id":  "fast-45w",
                                                          "label":  "Fast Charging (45W - 80W)"
                                                      },
                                                      {
                                                          "id":  "standard-25w",
                                                          "label":  "Standard Fast (20W - 30W)"
                                                      },
                                                      {
                                                          "id":  "wireless-magsafe",
                                                          "label":  "Magnetic / Wireless Charging"
                                                      }
                                                  ]
                     },
    "phones":  [
                   {
                       "id":  "apple-iphone-16-pro-max",
                       "brandId":  "apple",
                       "brandName":  "Apple",
                       "seriesId":  "iphone-pro-max",
                       "seriesName":  "iPhone Pro Max Series",
                       "model":  "iPhone 16 Pro Max",
                       "tagline":  "Grade 5 Titanium, A18 Pro 3nm Silicon, and Dedicated Tactile Camera Control.",
                       "releaseDate":  "2024-09",
                       "releaseYear":  2024,
                       "filterKeys":  {
                                          "priceSegment":  "ultra-premium",
                                          "formFactor":  "bar",
                                          "chipsetMaker":  "apple-silicon",
                                          "displayType":  "ltpo-oled",
                                          "cameraTier":  "periscope-zoom",
                                          "batteryChargingTier":  "standard-25w",
                                          "has5G":  true,
                                          "hasEsim":  true,
                                          "hasWirelessCharging":  true,
                                          "hasWaterProofing":  true
                                      },
                       "specs":  {
                                     "Design \u0026 Dimensions":  {
                                                                      "Dimensions":  "163.0 x 77.6 x 8.25 mm",
                                                                      "Weight":  "227 g",
                                                                      "Materials":  "Grade 5 Titanium frame with micro-blasted textured matte glass back",
                                                                      "Protection":  "Ceramic Shield front (Gen 2), IP68 water \u0026 dust (6m up to 30 mins)",
                                                                      "Colors":  "Black Titanium, White Titanium, Natural Titanium, Desert Titanium"
                                                                  },
                                     "Display System":  {
                                                            "Display Size":  "6.9 inches Super Retina XDR OLED",
                                                            "Resolution":  "2868 x 1320 pixels at 460 ppi",
                                                            "Refresh Rate":  "1-120Hz ProMotion adaptive refresh",
                                                            "Peak Brightness":  "2000 nits peak (outdoor), 1 nit minimum",
                                                            "Features":  "Dynamic Island, Always-On Display, HDR10, Dolby Vision, True Tone"
                                                        },
                                     "Processor \u0026 Silicon":  {
                                                                      "SoC":  "Apple A18 Pro (second-generation 3-nanometer transistor architecture)",
                                                                      "CPU":  "6-core CPU (2 performance cores + 4 efficiency cores)",
                                                                      "GPU":  "6-core GPU with hardware-accelerated ray tracing and mesh shading",
                                                                      "NPU":  "16-core Neural Engine capable of 35 trillion operations per second"
                                                                  },
                                     "Memory \u0026 Storage":  {
                                                                   "RAM":  "8GB LPDDR5X (engineered for Apple Intelligence)",
                                                                   "Internal Storage":  "256GB / 512GB / 1TB NVMe Flash storage",
                                                                   "Card Slot":  "No expandable storage"
                                                               },
                                     "Optics \u0026 Camera Architecture":  {
                                                                               "Rear Main Camera":  "48MP Fusion Camera, 24mm, f/1.78, 2nd-gen Sensor-shift OIS, 100% Focus Pixels",
                                                                               "Ultra-Wide Camera":  "48MP Ultra-Wide, 13mm, f/2.2, 120 deg FOV, Hybrid Focus Pixels, Macro mode",
                                                                               "Telephoto Camera":  "12MP 5x Tetraprism Periscope Telephoto, 120mm, f/2.8, 3D sensor-shift OIS",
                                                                               "Optical Zoom":  "5x Optical Zoom in, 2x Optical Zoom out; 10x Optical zoom range; Digital zoom up to 25x",
                                                                               "Video Capability":  "4K 120 fps Dolby Vision, ProRes 4K 120 fps to external drive, Spatial Video",
                                                                               "Front Selfie Camera":  "12MP TrueDepth, f/1.9, autofocus with Focus Pixels, Retina Flash, 4K60 Dolby Vision"
                                                                           },
                                     "Battery \u0026 Charging":  {
                                                                     "Battery Capacity":  "4685 mAh lithium-ion battery",
                                                                     "Wired Charging":  "50% charge in ~30 minutes with 20W+ adapter",
                                                                     "Wireless Charging":  "MagSafe wireless charging up to 25W with 30W adapter, Qi2 up to 15W",
                                                                     "Battery Life":  "Up to 33 hours video playback, 105 hours audio playback"
                                                                 },
                                     "Connectivity \u0026 Software":  {
                                                                          "Operating System":  "iOS 18 with Apple Intelligence on-device models",
                                                                          "Cellular":  "5G (sub-6 GHz and mmWave with 4x4 MIMO), Gigabit LTE",
                                                                          "Wi-Fi":  "Wi-Fi 7 (802.11be) with 2x2 MIMO",
                                                                          "Bluetooth":  "Bluetooth 5.3",
                                                                          "Ports":  "USB-C with USB 3 support (speeds up to 10Gb/s) \u0026 DisplayPort output",
                                                                          "Special Hardware":  "Dedicated Capacitive Camera Control button, Action Button, Ultra Wideband chip (2nd gen)"
                                                                      }
                                 },
                       "highlights":  [
                                          "Capacitive flush Camera Control with two-stage shutter and haptic slide gestures",
                                          "Record cinema-grade 4K 120 fps in Dolby Vision or flat ProRes LOG",
                                          "Thinnest display borders on any Apple device engineered via Border Reduction Structure",
                                          "A18 Pro delivers 15% faster CPU and 20% faster GPU ray-tracing performance"
                                      ]
                   },
                   {
                       "id":  "apple-iphone-16-pro",
                       "brandId":  "apple",
                       "brandName":  "Apple",
                       "seriesId":  "iphone-pro",
                       "seriesName":  "iPhone Pro Series",
                       "model":  "iPhone 16 Pro",
                       "tagline":  "Grade 5 Titanium, 6.3-inch ProMotion 120Hz OLED, A18 Pro 3nm Silicon, and 5x Tetraprism Telephoto.",
                       "releaseDate":  "2024-09",
                       "releaseYear":  2024,
                       "filterKeys":  {
                                          "priceSegment":  "ultra-premium",
                                          "formFactor":  "bar",
                                          "chipsetMaker":  "apple-silicon",
                                          "displayType":  "ltpo-oled",
                                          "cameraTier":  "periscope-zoom",
                                          "batteryChargingTier":  "standard-25w",
                                          "has5G":  true,
                                          "hasEsim":  true,
                                          "hasWirelessCharging":  true,
                                          "hasWaterProofing":  true
                                      },
                       "specs":  {
                                     "Design \u0026 Dimensions":  {
                                                                      "Dimensions":  "149.6 x 71.5 x 8.25 mm",
                                                                      "Weight":  "199 g",
                                                                      "Materials":  "Grade 5 Titanium frame with micro-blasted textured matte glass back",
                                                                      "Protection":  "Ceramic Shield front (Gen 2), IP68 water \u0026 dust (6m up to 30 mins)",
                                                                      "Colors":  "Black Titanium, White Titanium, Natural Titanium, Desert Titanium"
                                                                  },
                                     "Display System":  {
                                                            "Display Size":  "6.3 inches Super Retina XDR OLED",
                                                            "Resolution":  "2622 x 1206 pixels at 460 ppi",
                                                            "Refresh Rate":  "1-120Hz ProMotion adaptive refresh",
                                                            "Peak Brightness":  "2000 nits peak (outdoor), 1 nit minimum",
                                                            "Features":  "Dynamic Island, Always-On Display, HDR10, Dolby Vision, True Tone"
                                                        },
                                     "Processor \u0026 Silicon":  {
                                                                      "SoC":  "Apple A18 Pro (second-generation 3-nanometer architecture)",
                                                                      "CPU":  "6-core CPU (2 performance cores + 4 efficiency cores)",
                                                                      "GPU":  "6-core GPU with hardware-accelerated ray tracing and mesh shading",
                                                                      "NPU":  "16-core Neural Engine capable of 35 trillion operations per second"
                                                                  },
                                     "Memory \u0026 Storage":  {
                                                                   "RAM":  "8GB LPDDR5X (engineered for Apple Intelligence)",
                                                                   "Internal Storage":  "128GB / 256GB / 512GB / 1TB NVMe Flash storage",
                                                                   "Card Slot":  "No expandable storage"
                                                               },
                                     "Optics \u0026 Camera Architecture":  {
                                                                               "Rear Main Camera":  "48MP Fusion Camera, 24mm, f/1.78, 2nd-gen Sensor-shift OIS, 100% Focus Pixels",
                                                                               "Ultra-Wide Camera":  "48MP Ultra-Wide, 13mm, f/2.2, 120 deg FOV, Hybrid Focus Pixels, Macro mode",
                                                                               "Telephoto Camera":  "12MP 5x Tetraprism Periscope Telephoto, 120mm, f/2.8, 3D sensor-shift OIS",
                                                                               "Optical Zoom":  "5x Optical Zoom in, 2x Optical Zoom out; 10x Optical zoom range",
                                                                               "Video Capability":  "4K 120 fps Dolby Vision, ProRes 4K 120 fps to external drive, Spatial Audio",
                                                                               "Front Selfie Camera":  "12MP TrueDepth, f/1.9, autofocus with Focus Pixels, Retina Flash, 4K60 Dolby Vision"
                                                                           },
                                     "Battery \u0026 Charging":  {
                                                                     "Battery Capacity":  "3582 mAh lithium-ion battery",
                                                                     "Wired Charging":  "50% charge in ~30 minutes with 20W+ adapter",
                                                                     "Wireless Charging":  "MagSafe wireless charging up to 25W with 30W adapter, Qi2 up to 15W",
                                                                     "Battery Life":  "Up to 27 hours video playback"
                                                                 },
                                     "Connectivity \u0026 Software":  {
                                                                          "Operating System":  "iOS 18 with Apple Intelligence on-device architecture",
                                                                          "Cellular":  "5G (sub-6 GHz and mmWave with 4x4 MIMO), Gigabit LTE",
                                                                          "Wi-Fi":  "Wi-Fi 7 (802.11be) with 2x2 MIMO",
                                                                          "Bluetooth":  "Bluetooth 5.3",
                                                                          "Ports":  "USB-C with USB 3 support (speeds up to 10Gb/s) \u0026 DisplayPort output",
                                                                          "Special Hardware":  "Dedicated Capacitive Camera Control button, Action Button, Ultra Wideband (2nd gen)"
                                                                      }
                                 },
                       "highlights":  [
                                          "Compact 6.3-inch Pro flagship with aerospace-grade Grade 5 titanium chassis",
                                          "Full 5x Tetraprism optical periscope zoom matching the Pro Max camera system",
                                          "Apple A18 Pro 3nm silicon with 6-core ray-tracing GPU and 16-core Neural Engine",
                                          "Tactile two-stage Camera Control button with haptic slide zoom and focus lock"
                                      ]
                   },
                   {
                       "id":  "samsung-galaxy-s24-ultra",
                       "brandId":  "samsung",
                       "brandName":  "Samsung",
                       "seriesId":  "galaxy-s-ultra",
                       "seriesName":  "Galaxy S Ultra Series",
                       "model":  "Galaxy S24 Ultra",
                       "tagline":  "Flat Titanium Architecture, 2600-nit Anti-Reflective Corning Armor, and Built-in S-Pen.",
                       "releaseDate":  "2024-01",
                       "releaseYear":  2024,
                       "filterKeys":  {
                                          "priceSegment":  "ultra-premium",
                                          "formFactor":  "bar",
                                          "chipsetMaker":  "qualcomm-snapdragon",
                                          "displayType":  "ltpo-oled",
                                          "cameraTier":  "200mp-sensor",
                                          "batteryChargingTier":  "fast-45w",
                                          "has5G":  true,
                                          "hasEsim":  true,
                                          "hasWirelessCharging":  true,
                                          "hasWaterProofing":  true
                                      },
                       "specs":  {
                                     "Design \u0026 Dimensions":  {
                                                                      "Dimensions":  "162.3 x 79.0 x 8.6 mm",
                                                                      "Weight":  "232 g",
                                                                      "Materials":  "Titanium alloy chassis with satin glass back",
                                                                      "Protection":  "Corning Gorilla Armor (front), Gorilla Glass (back), IP68 water \u0026 dust (1.5m up to 30 mins)",
                                                                      "Colors":  "Titanium Gray, Titanium Black, Titanium Violet, Titanium Yellow"
                                                                  },
                                     "Display System":  {
                                                            "Display Size":  "6.8 inches Dynamic LTPO AMOLED 2X flat display",
                                                            "Resolution":  "3120 x 1440 pixels (Quad HD+), 505 ppi",
                                                            "Refresh Rate":  "1-120Hz LTPO adaptive variable refresh rate",
                                                            "Peak Brightness":  "2600 nits peak brightness, Vision Booster technology",
                                                            "Features":  "Corning Gorilla Armor 75% reflection reduction, HDR10+, Always-on Display"
                                                        },
                                     "Processor \u0026 Silicon":  {
                                                                      "SoC":  "Qualcomm Snapdragon 8 Gen 3 for Galaxy (4nm customized octa-core)",
                                                                      "CPU":  "1x Cortex-X4 (3.39GHz) + 3x Cortex-A720 (3.1GHz) + 2x Cortex-A720 (2.9GHz) + 2x Cortex-A520 (2.2GHz)",
                                                                      "GPU":  "Adreno 750 (1 GHz) with Hardware Ray Tracing and 1.9x larger vapor cooling chamber",
                                                                      "NPU":  "Qualcomm Hexagon NPU with 41% upgraded generative AI throughput"
                                                                  },
                                     "Memory \u0026 Storage":  {
                                                                   "RAM":  "12GB LPDDR5X",
                                                                   "Internal Storage":  "256GB / 512GB / 1TB UFS 4.0 high-speed flash",
                                                                   "Card Slot":  "No expandable storage"
                                                               },
                                     "Optics \u0026 Camera Architecture":  {
                                                                               "Rear Main Camera":  "200MP Wide Sensor, 1/1.3\", f/1.7, 24mm, multi-directional PDAF, Laser AF, OIS",
                                                                               "Ultra-Wide Camera":  "12MP Ultra-Wide, 1/2.55\", f/2.2, 13mm, 120 deg FOV, Dual Pixel PDAF, Super Steady",
                                                                               "Telephoto 1":  "10MP 3x Optical Telephoto, f/2.4, 67mm, Dual Pixel PDAF, OIS",
                                                                               "Periscope Telephoto 2":  "50MP 5x Optical Periscope (10x Optical Quality), f/3.4, 111mm, PDAF, OIS",
                                                                               "Optical Zoom":  "3x and 5x optical zoom, 100x Space Zoom with AI Super Resolution",
                                                                               "Video Capability":  "8K at 24/30fps, 4K at 30/60/120fps, 1080p at 240fps, HDR10+, stereo audio",
                                                                               "Front Selfie Camera":  "12MP Dual Pixel PDAF, f/2.2, 26mm, 4K video recording up to 60fps",
                                                                               "Telephoto Camera":  "50MP 5x Optical Periscope (f/3.4, 111mm, OIS) + 10MP 3x Optical (f/2.4, 67mm, OIS)"
                                                                           },
                                     "Battery \u0026 Charging":  {
                                                                     "Battery Capacity":  "5000 mAh typical lithium-ion battery",
                                                                     "Wired Charging":  "45W wired fast charging (65% in 30 minutes with PPS 2.0)",
                                                                     "Wireless Charging":  "15W Fast Wireless Charging 2.0, 4.5W Wireless PowerShare reverse charging",
                                                                     "Battery Life":  "Up to 30 hours video playback, 95 hours audio playback"
                                                                 },
                                     "Connectivity \u0026 Software":  {
                                                                          "Operating System":  "One UI 6.1 based on Android 14 with 7 full years of OS updates",
                                                                          "Cellular":  "5G SA/NSA/Sub6/mmWave, Gigabit LTE",
                                                                          "Wi-Fi":  "Wi-Fi 7 (802.11be) tri-band",
                                                                          "Bluetooth":  "Bluetooth 5.3 with LE Audio",
                                                                          "Ports":  "USB-C 3.2 Gen 1 with Samsung DeX desktop mode \u0026 DisplayPort output",
                                                                          "Special Hardware":  "Integrated S-Pen stylus with BLE remote actions (2.8ms latency), Ultra-Wideband (UWB)"
                                                                      }
                                 },
                       "highlights":  [
                                          "Corning Gorilla Armor cuts screen reflections by 75% for unmatched outdoor clarity",
                                          "Built-in S-Pen allows digital signatures, fine sketch art, and remote photo trigger",
                                          "Full suite of Galaxy AI: Circle to Search, Live Call Translation, Generative Edit",
                                          "Samsung commitment to 7 full years of Android OS and security upgrades"
                                      ]
                   },
                   {
                       "id":  "google-pixel-9-pro-xl",
                       "brandId":  "google",
                       "brandName":  "Google Pixel",
                       "seriesId":  "pixel-pro",
                       "seriesName":  "Pixel Pro Flagship",
                       "model":  "Pixel 9 Pro XL",
                       "tagline":  "Tensor G4, 16GB RAM for Local Gemini Nano Multimodal AI, and Benchmark Computational Photography.",
                       "releaseDate":  "2024-08",
                       "releaseYear":  2024,
                       "filterKeys":  {
                                          "priceSegment":  "ultra-premium",
                                          "formFactor":  "bar",
                                          "chipsetMaker":  "google-tensor",
                                          "displayType":  "ltpo-oled",
                                          "cameraTier":  "periscope-zoom",
                                          "batteryChargingTier":  "standard-25w",
                                          "has5G":  true,
                                          "hasEsim":  true,
                                          "hasWirelessCharging":  true,
                                          "hasWaterProofing":  true
                                      },
                       "specs":  {
                                     "Design \u0026 Dimensions":  {
                                                                      "Dimensions":  "162.8 x 76.6 x 8.5 mm",
                                                                      "Weight":  "221 g",
                                                                      "Materials":  "Polished metal chassis with silky matte rear glass visor",
                                                                      "Protection":  "Corning Gorilla Glass Victus 2 (front \u0026 back), IP68 water \u0026 dust (1.5m up to 30 mins)",
                                                                      "Colors":  "Obsidian, Porcelain, Hazel, Rose Quartz"
                                                                  },
                                     "Display System":  {
                                                            "Display Size":  "6.8 inches Super Actua LTPO OLED",
                                                            "Resolution":  "2992 x 1344 pixels, 486 ppi",
                                                            "Refresh Rate":  "1-120Hz smooth adaptive LTPO refresh rate",
                                                            "Peak Brightness":  "3000 nits peak, 2050 nits in high brightness mode",
                                                            "Features":  "24-bit depth for 16 million colors, HDR10+, scratch-resistant Victus 2"
                                                        },
                                     "Processor \u0026 Silicon":  {
                                                                      "SoC":  "Google Tensor G4 (4nm custom Google architecture)",
                                                                      "CPU":  "1x Cortex-X4 (3.1 GHz) + 3x Cortex-A720 (2.6 GHz) + 4x Cortex-A520 (1.95 GHz)",
                                                                      "GPU":  "Mali-G715 MC7 GPU with dual-core TPU hardware acceleration",
                                                                      "Security":  "Titan M2 dedicated security coprocessor with end-to-end memory safety"
                                                                  },
                                     "Memory \u0026 Storage":  {
                                                                   "RAM":  "16GB LPDDR5X (optimized for on-device Gemini Nano inference)",
                                                                   "Internal Storage":  "128GB / 256GB / 512GB / 1TB UFS 3.1",
                                                                   "Card Slot":  "No expandable storage"
                                                               },
                                     "Optics \u0026 Camera Architecture":  {
                                                                               "Rear Main Camera":  "50MP Octa PD Main Camera, 1/1.31\", f/1.68, 25mm, multi-zone LDAF, dual OIS",
                                                                               "Ultra-Wide Camera":  "48MP Quad PD Ultra-Wide with Macro Focus, 1/2.55\", f/1.7, 123 deg FOV",
                                                                               "Periscope Telephoto":  "48MP Quad PD 5x Optical Periscope Telephoto, f/2.8, 110mm, OIS, Super Res Zoom 30x",
                                                                               "Video Capability":  "8K video with Video Boost AI at 30fps, 4K at 24/30/60fps, Night Sight Video",
                                                                               "Front Selfie Camera":  "42MP Dual PD Ultra-Wide with autofocus, f/2.2, 103 deg ultrawide FOV, 4K60",
                                                                               "Telephoto Camera":  "48MP Quad PD 5x Optical Periscope Telephoto, f/2.8, 110mm, OIS, Super Res Zoom 30x"
                                                                           },
                                     "Battery \u0026 Charging":  {
                                                                     "Battery Capacity":  "5060 mAh typical lithium-ion battery",
                                                                     "Wired Charging":  "37W fast wired charging (70% in 30 minutes with Google 45W USB-C charger)",
                                                                     "Wireless Charging":  "Up to 23W fast wireless charging with Pixel Stand 2nd gen, Qi certified",
                                                                     "Battery Life":  "24+ hours battery life, up to 100-hour Extreme Battery Saver mode"
                                                                 },
                                     "Connectivity \u0026 Software":  {
                                                                          "Operating System":  "Android 14 / Android 15 upgradeable with 7 years of Pixel Feature Drops",
                                                                          "Cellular":  "5G Sub-6GHz and mmWave, Satellite SOS connectivity",
                                                                          "Wi-Fi":  "Wi-Fi 7 (802.11be) with 2.4GHz + 5GHz + 6GHz, 2x2+2x2 MIMO",
                                                                          "Bluetooth":  "Bluetooth 5.3 with dual antennas",
                                                                          "Ports":  "USB Type-C 3.2 Gen 1",
                                                                          "Special Hardware":  "On-device infrared temperature sensor, Ultra-Wideband (UWB) chip"
                                                                      }
                                 },
                       "highlights":  [
                                          "16GB RAM hardware baseline built specifically to sustain latency-free local Gemini AI",
                                          "Breakthrough \u0027Add Me\u0027 computational photography lets the photographer step into group shots",
                                          "Satellite SOS safety system connecting to emergency services when off-grid",
                                          "Thermometer sensor for measuring liquid, surface, and human body temperatures"
                                      ]
                   },
                   {
                       "id":  "samsung-galaxy-z-fold-6",
                       "brandId":  "samsung",
                       "brandName":  "Samsung",
                       "seriesId":  "galaxy-z-fold",
                       "seriesName":  "Galaxy Z Fold Series",
                       "model":  "Galaxy Z Fold 6",
                       "tagline":  "Featherlight 5.6mm Symmetrical Foldable with Dual 120Hz Screens and Taskbar Multitasking.",
                       "releaseDate":  "2024-07",
                       "releaseYear":  2024,
                       "filterKeys":  {
                                          "priceSegment":  "ultra-premium",
                                          "formFactor":  "book-fold",
                                          "chipsetMaker":  "qualcomm-snapdragon",
                                          "displayType":  "ltpo-oled",
                                          "cameraTier":  "standard-tele",
                                          "batteryChargingTier":  "standard-25w",
                                          "has5G":  true,
                                          "hasEsim":  true,
                                          "hasWirelessCharging":  true,
                                          "hasWaterProofing":  true
                                      },
                       "specs":  {
                                     "Design \u0026 Dimensions":  {
                                                                      "Dimensions":  "Unfolded: 153.5 x 132.6 x 5.6 mm | Folded: 153.5 x 68.1 x 12.1 mm",
                                                                      "Weight":  "239 g (14g lighter than predecessor)",
                                                                      "Materials":  "Enhanced Armor Aluminum frame with dual-rail teardrop hinge",
                                                                      "Protection":  "Corning Gorilla Glass Victus 2 (cover \u0026 back), IP48 water/particle resistance",
                                                                      "Colors":  "Silver Shadow, Pink, Navy, Crafted Black, White"
                                                                  },
                                     "Display System":  {
                                                            "Main Inner Screen":  "7.6 inches Dynamic AMOLED 2X, 2160 x 1856, 1-120Hz LTPO, 2600 nits peak",
                                                            "Cover Outer Screen":  "6.3 inches Dynamic AMOLED 2X, 2376 x 968, 1-120Hz LTPO, 22.1:9 aspect ratio",
                                                            "Features":  "Under-Display Camera on inner panel, S-Pen Fold Edition digitizer layer, HDR10+",
                                                            "Display Size":  "Main: 7.6 inches Dynamic AMOLED 2X; Cover: 6.3 inches Dynamic AMOLED 2X",
                                                            "Resolution":  "Main: 2160 x 1856 (374 ppi); Cover: 2376 x 968 (410 ppi, 22.1:9)",
                                                            "Refresh Rate":  "1-120Hz LTPO adaptive variable refresh rate on both screens",
                                                            "Peak Brightness":  "2600 nits peak brightness on both inner and cover displays"
                                                        },
                                     "Processor \u0026 Silicon":  {
                                                                      "SoC":  "Snapdragon 8 Gen 3 for Galaxy (4nm customized octa-core)",
                                                                      "CPU":  "Octa-core up to 3.39GHz Cortex-X4 with 1.6x expanded vapor chamber cooling",
                                                                      "GPU":  "Adreno 750 with Hardware-Accelerated Ray Tracing",
                                                                      "NPU":  "Qualcomm Hexagon engine for dual-screen translation AI"
                                                                  },
                                     "Memory \u0026 Storage":  {
                                                                   "RAM":  "12GB LPDDR5X",
                                                                   "Internal Storage":  "256GB / 512GB / 1TB UFS 4.0",
                                                                   "Card Slot":  "No expandable storage"
                                                               },
                                     "Optics \u0026 Camera Architecture":  {
                                                                               "Rear Main Camera":  "50MP Dual Pixel AF, f/1.8, 23mm, OIS",
                                                                               "Ultra-Wide Camera":  "12MP Ultra-Wide, f/2.2, 12mm, 123 deg FOV",
                                                                               "Telephoto Camera":  "10MP 3x Optical Zoom, f/2.4, 66mm, PDAF, OIS",
                                                                               "Cover Front Camera":  "10MP Cover Camera, f/2.2, 24mm",
                                                                               "Under Display Camera":  "4MP Under Display Camera, f/1.8 (concealed beneath inner screen pixels)"
                                                                           },
                                     "Battery \u0026 Charging":  {
                                                                     "Battery Capacity":  "4400 mAh dual-cell split battery",
                                                                     "Wired Charging":  "25W wired fast charging (50% in 30 minutes)",
                                                                     "Wireless Charging":  "15W wireless charging, 4.5W reverse wireless Wireless PowerShare"
                                                                 },
                                     "Connectivity \u0026 Software":  {
                                                                          "Operating System":  "One UI 6.1.1 on Android 14 with Foldable optimized multi-window Taskbar",
                                                                          "Cellular":  "5G SA/NSA/Sub6/mmWave",
                                                                          "Wi-Fi":  "Wi-Fi 7 (802.11be)",
                                                                          "Bluetooth":  "Bluetooth 5.3",
                                                                          "Special Hardware":  "Dual-rail zero-gap hinge tested for 200,000+ folds, S-Pen stylus support",
                                                                          "Ports":  "USB-C 3.2 Gen 1 (supports DisplayPort and Samsung DeX)"
                                                                      }
                                 },
                       "highlights":  [
                                          "Unfolds into a massive 7.6-inch tablet-like workspace with 3-app split screen multitasking",
                                          "Interpreter dual-screen mode displays conversation translation facing both speaker and listener",
                                          "Sketch-to-Image AI instantly transforms S-Pen hand drawings into photorealistic artwork",
                                          "Thinner 5.6mm profile with symmetrical flat frame design"
                                      ]
                   },
                   {
                       "id":  "oneplus-12",
                       "brandId":  "oneplus",
                       "brandName":  "OnePlus",
                       "seriesId":  "oneplus-number",
                       "seriesName":  "Number Series Flagship",
                       "model":  "OnePlus 12",
                       "tagline":  "Snapdragon 8 Gen 3, 5400mAh Battery, 100W SuperVOOC Flash Charge, and 4th Gen Hasselblad Optics.",
                       "releaseDate":  "2024-02",
                       "releaseYear":  2024,
                       "filterKeys":  {
                                          "priceSegment":  "flagship-killer",
                                          "formFactor":  "bar",
                                          "chipsetMaker":  "qualcomm-snapdragon",
                                          "displayType":  "ltpo-oled",
                                          "cameraTier":  "periscope-zoom",
                                          "batteryChargingTier":  "ultra-fast-100w",
                                          "has5G":  true,
                                          "hasEsim":  true,
                                          "hasWirelessCharging":  true,
                                          "hasWaterProofing":  true
                                      },
                       "specs":  {
                                     "Design \u0026 Dimensions":  {
                                                                      "Dimensions":  "164.3 x 75.8 x 9.15 mm",
                                                                      "Weight":  "220 g",
                                                                      "Materials":  "Aluminum alloy frame with emerald green ceramic-texture glass",
                                                                      "Protection":  "Corning Gorilla Glass Victus 2 (front), Gorilla Glass 5 (back), IP65 dust/water",
                                                                      "Colors":  "Silky Black, Flowy Emerald"
                                                                  },
                                     "Display System":  {
                                                            "Display Size":  "6.82 inches ProXDR 2K LTPO 3.0 AMOLED",
                                                            "Resolution":  "3168 x 1440 pixels (Quad HD+), 510 ppi",
                                                            "Refresh Rate":  "1-120Hz dynamic adaptive refresh",
                                                            "Peak Brightness":  "4500 nits peak HDR brightness, 1600 nits high brightness mode",
                                                            "Features":  "Aqua Touch chip (usable with wet hands), Dolby Vision, DisplayMate A+ certified"
                                                        },
                                     "Processor \u0026 Silicon":  {
                                                                      "SoC":  "Qualcomm Snapdragon 8 Gen 3 (4nm)",
                                                                      "CPU":  "Octa-core up to 3.3GHz with Trinity Engine performance optimization",
                                                                      "GPU":  "Adreno 750 with Dual Cryo-velocity Vapor Chamber (9140mm^2 heat dissipation)",
                                                                      "NPU":  "Qualcomm AI Engine with 98% faster generative text and image rendering"
                                                                  },
                                     "Memory \u0026 Storage":  {
                                                                   "RAM":  "12GB / 16GB LPDDR5X",
                                                                   "Internal Storage":  "256GB / 512GB UFS 4.0 flash",
                                                                   "Card Slot":  "No expandable storage"
                                                               },
                                     "Optics \u0026 Camera Architecture":  {
                                                                               "Rear Main Camera":  "50MP Sony LYT-808 Dual-layer Transistor Pixel sensor, 1/1.4\", f/1.6, 23mm, OIS",
                                                                               "Ultra-Wide Camera":  "48MP Sony IMX581, 1/2.0\", f/2.2, 14mm, 114 deg FOV, 3.5cm Macro mode",
                                                                               "Periscope Telephoto":  "64MP OmniVision OV64B 3x Optical Periscope, 1/2.0\", f/2.6, 70mm, OIS, 120x digital",
                                                                               "Color Calibration":  "4th Generation Hasselblad Camera for Mobile Natural Color Solution",
                                                                               "Front Selfie Camera":  "32MP Sony IMX615, f/2.4, 21mm, 4K30 video recording",
                                                                               "Telephoto Camera":  "64MP OmniVision OV64B 3x Optical Periscope, 1/2.0\", f/2.6, 70mm, OIS, 120x digital"
                                                                           },
                                     "Battery \u0026 Charging":  {
                                                                     "Battery Capacity":  "5400 mAh dual-cell monster battery",
                                                                     "Wired Charging":  "100W SuperVOOC wired charging (1% to 100% in 26 minutes with included charger)",
                                                                     "Wireless Charging":  "50W AirVOOC wireless charging (1% to 100% in 55 minutes)",
                                                                     "Battery Health":  "Battery Health Engine maintains 80%+ capacity after 1,600 charging cycles"
                                                                 },
                                     "Connectivity \u0026 Software":  {
                                                                          "Operating System":  "OxygenOS 14 based on Android 14 (4 major Android OS updates guaranteed)",
                                                                          "Cellular":  "5G SA/NSA, dual SIM + eSIM support",
                                                                          "Wi-Fi":  "Wi-Fi 7 (802.11be) with Omni-directional Antenna System",
                                                                          "Bluetooth":  "Bluetooth 5.4 with aptX HD, LDAC, LHDC 5.0",
                                                                          "Ports":  "USB-C 3.2 Gen 1 (5Gbps) with video out",
                                                                          "Special Hardware":  "Physical Alert Slider (Ring/Vibrate/Silent), IR Blaster infrared remote control"
                                                                      }
                                 },
                       "highlights":  [
                                          "Massive 5400mAh battery paired with ultra-fast 100W wired \u0026 50W wireless charging",
                                          "Aqua Touch algorithm uses dedicated capacitive chip so the screen works flawlessly in heavy rain",
                                          "Sony LYT-808 dual-layer stacked sensor delivers flagship low-light dynamic range",
                                          "Record-shattering 4500 nits peak display brightness"
                                      ]
                   },
                   {
                       "id":  "xiaomi-14-ultra",
                       "brandId":  "xiaomi",
                       "brandName":  "Xiaomi",
                       "seriesId":  "xiaomi-ultra",
                       "seriesName":  "Ultra Leica Flagship",
                       "model":  "Xiaomi 14 Ultra",
                       "tagline":  "Quad 50MP Leica Summilux Optics with 1-Inch Stepless Variable Aperture and Dual Periscope Zoom.",
                       "releaseDate":  "2024-03",
                       "releaseYear":  2024,
                       "filterKeys":  {
                                          "priceSegment":  "ultra-premium",
                                          "formFactor":  "bar",
                                          "chipsetMaker":  "qualcomm-snapdragon",
                                          "displayType":  "ltpo-oled",
                                          "cameraTier":  "1-inch-sensor",
                                          "batteryChargingTier":  "fast-45w",
                                          "has5G":  true,
                                          "hasEsim":  true,
                                          "hasWirelessCharging":  true,
                                          "hasWaterProofing":  true
                                      },
                       "specs":  {
                                     "Design \u0026 Dimensions":  {
                                                                      "Dimensions":  "161.4 x 75.3 x 9.20 mm",
                                                                      "Weight":  "219.8 g",
                                                                      "Materials":  "High-strength integrated aluminum unibody with nano-tech vegan leather back",
                                                                      "Protection":  "Xiaomi Shield Glass (10x drop resistance), IP68 water \u0026 dust (1.5m up to 30 mins)",
                                                                      "Colors":  "Black, White"
                                                                  },
                                     "Display System":  {
                                                            "Display Size":  "6.73 inches All Around Liquid AMOLED display",
                                                            "Resolution":  "3200 x 1440 pixels (WQHD+), 522 ppi",
                                                            "Refresh Rate":  "1-120Hz LTPO dynamic refresh rate, 240Hz touch sampling rate",
                                                            "Peak Brightness":  "3000 nits peak brightness, 68 billion colors (12-bit)",
                                                            "Features":  "Dolby Vision, HDR10+, 1920Hz PWM dimming, TUV Rheinland eye comfort certified"
                                                        },
                                     "Processor \u0026 Silicon":  {
                                                                      "SoC":  "Qualcomm Snapdragon 8 Gen 3 (4nm)",
                                                                      "CPU":  "Octa-core up to 3.3GHz with Dual-Channel IceLoop liquid cooling system",
                                                                      "GPU":  "Adreno 750 with hardware ray-tracing acceleration",
                                                                      "NPU":  "Qualcomm AI Engine with Xiaomi AISP computational photography platform"
                                                                  },
                                     "Memory \u0026 Storage":  {
                                                                   "RAM":  "16GB LPDDR5X (8533Mbps)",
                                                                   "Internal Storage":  "512GB UFS 4.0 storage",
                                                                   "Card Slot":  "No expandable storage"
                                                               },
                                     "Optics \u0026 Camera Architecture":  {
                                                                               "Rear Main Camera":  "50MP 1-inch Sony LYT-900 sensor, f/1.63 - f/4.0 stepless variable aperture, 23mm, OIS",
                                                                               "Ultra-Wide Camera":  "50MP Sony IMX858, f/1.8, 12mm, 122 deg FOV, 5cm macro shooting",
                                                                               "Floating Telephoto":  "50MP Sony IMX858 3.2x Optical, f/1.8, 75mm, OIS, 10cm telephoto macro",
                                                                               "Periscope Telephoto":  "50MP Sony IMX858 5x Optical Periscope, f/2.5, 120mm, OIS, 30cm telephoto macro",
                                                                               "Optical Lenses":  "Leica VARIO-SUMMILUX 1:1.63-2.5/12-120 ASPH with multi-layer ALD coating",
                                                                               "Video Capability":  "8K video recording at 30fps on ALL 4 rear cameras, 4K at 120fps on main camera",
                                                                               "Front Selfie Camera":  "32MP in-display selfie camera, f/2.0, 4K60 video",
                                                                               "Telephoto Camera":  "50MP 5x Periscope (f/2.5, 120mm, OIS) + 50MP 3.2x Floating Telephoto (f/1.8, 75mm, OIS)"
                                                                           },
                                     "Battery \u0026 Charging":  {
                                                                     "Battery Capacity":  "5000 mAh high-density silicon-carbon battery",
                                                                     "Wired Charging":  "90W wired HyperCharge (100% in 33 minutes)",
                                                                     "Wireless Charging":  "80W wireless HyperCharge (100% in 46 minutes), 10W reverse wireless"
                                                                 },
                                     "Connectivity \u0026 Software":  {
                                                                          "Operating System":  "Xiaomi HyperOS based on Android 14",
                                                                          "Cellular":  "5G SA/NSA, dual SIM",
                                                                          "Wi-Fi":  "Wi-Fi 7 (802.11be)",
                                                                          "Bluetooth":  "Bluetooth 5.4 with LDAC, LHDC 5.0, aptX Adaptive",
                                                                          "Ports":  "USB-C 3.2 Gen 2 (10Gbps high speed transfer)",
                                                                          "Special Hardware":  "Two-way satellite communication, Optional photography grip with 1500mAh battery"
                                                                      }
                                 },
                       "highlights":  [
                                          "Groundbreaking 1-inch Sony LYT-900 sensor with stepless variable physical aperture (f/1.63 to f/4.0)",
                                          "Quad 50MP Leica cameras covering complete optical range from 12mm ultra-wide to 120mm periscope",
                                          "8K video recording supported on all four rear cameras simultaneously",
                                          "Ultra-fast 90W wired and 80W wireless HyperCharge technology"
                                      ]
                   },
                   {
                       "id":  "sony-xperia-1-vi",
                       "brandId":  "sony",
                       "brandName":  "Sony",
                       "seriesId":  "xperia-1",
                       "seriesName":  "Xperia 1 Flagship",
                       "model":  "Xperia 1 VI",
                       "tagline":  "Qualcomm Snapdragon 8 Gen 3, Continuous Optical Zoom 85-170mm, and 48MP Exmor T Sensor.",
                       "releaseDate":  "2024-05",
                       "releaseYear":  2024,
                       "specs":  {
                                     "Design \u0026 Dimensions":  {
                                                                      "Dimensions":  "162.0 x 74.0 x 8.2 mm",
                                                                      "Weight":  "192 g",
                                                                      "Materials":  "Gorilla Glass Victus 2 front, textured tactile glass back, ribbed aluminum frame",
                                                                      "Protection":  "IP65 / IP68 dust and water resistance (1.5m up to 30 mins)",
                                                                      "Colors":  "Black, Platinum Silver, Khaki Green"
                                                                  },
                                     "Display System":  {
                                                            "Display Size":  "6.5 inches LTPO OLED",
                                                            "Resolution":  "2340 x 1080 pixels (19.5:9 aspect ratio)",
                                                            "Refresh Rate":  "1-120Hz adaptive variable refresh rate",
                                                            "Peak Brightness":  "Powered by BRAVIA AI image processing, 50% brighter than predecessor",
                                                            "Features":  "HDR support, 240Hz touch scanning rate, Corning Gorilla Glass Victus 2"
                                                        },
                                     "Processor \u0026 Silicon":  {
                                                                      "SoC":  "Qualcomm Snapdragon 8 Gen 3 (4nm TSMC node)",
                                                                      "CPU":  "Octa-core (1x 3.3 GHz Cortex-X4 + 3x 3.2 GHz Cortex-A720 + 2x 3.0 GHz Cortex-A720 + 2x 2.3 GHz Cortex-A520)",
                                                                      "GPU":  "Qualcomm Adreno 750",
                                                                      "NPU":  "Qualcomm Hexagon NPU for AI camera tracking and human pose estimation"
                                                                  },
                                     "Memory \u0026 Storage":  {
                                                                   "RAM":  "12GB LPDDR5X",
                                                                   "Internal Storage":  "256GB / 512GB UFS 4.0",
                                                                   "Card Slot":  "microSDXC card slot supported (up to 1.5TB expansion)"
                                                               },
                                     "Optics \u0026 Camera Architecture":  {
                                                                               "Rear Main Camera":  "48MP Exmor T for mobile (1/1.35-inch sensor, 24mm/48mm, f/1.9, OIS, Dual-PD AF)",
                                                                               "Ultra-Wide Camera":  "12MP Exmor RS (16mm, f/2.2, 1/2.5-inch, 123 deg FOV, AF)",
                                                                               "Telephoto Camera":  "12MP True Optical Continuous Zoom (85mm-170mm, f/2.3-f/3.5, 3.5x-7.1x optical zoom, OIS, Telephoto Macro at 4cm)",
                                                                               "Optical Zoom":  "3.5x to 7.1x continuous optical zoom mechanism",
                                                                               "Video Capability":  "4K HDR video up to 120 fps on all rear lenses with S-Cinetone for mobile",
                                                                               "Front Selfie Camera":  "12MP Exmor RS, f/2.0, 24mm wide angle, 4K60 HDR video"
                                                                           },
                                     "Battery \u0026 Charging":  {
                                                                     "Battery Capacity":  "5000 mAh high-density battery",
                                                                     "Wired Charging":  "30W USB PD fast charging (50% in 30 minutes)",
                                                                     "Wireless Charging":  "Qi wireless charging and battery share reverse charging",
                                                                     "Battery Life":  "Up to 2 days typical battery endurance with Xperia Adaptive Charging"
                                                                 },
                                     "Connectivity \u0026 Software":  {
                                                                          "Operating System":  "Android 14 with 3 OS upgrades and 4 years of security patches",
                                                                          "Cellular":  "5G SA/NSA, dual SIM (Nano-SIM + eSIM)",
                                                                          "Wi-Fi":  "Wi-Fi 7 (802.11be)",
                                                                          "Bluetooth":  "Bluetooth 5.4 with LDAC, Snapdragon Sound, aptX Lossless",
                                                                          "Ports":  "USB-C 3.2 Gen 2 (DisplayPort video out) and 3.5mm dedicated audiophile headphone jack",
                                                                          "Special Hardware":  "Dedicated physical two-stage shutter button, Full-stage stereo speakers"
                                                                      }
                                 },
                       "highlights":  [
                                          "True continuous optical zoom lens moving smoothly from 85mm (3.5x) to 170mm (7.1x) without digital cropping",
                                          "Dedicated telephoto telemacro focusing as close as 4cm for extreme micro-detail capture",
                                          "Retains both an expandable microSD card tray and a low-distortion 3.5mm headphone jack",
                                          "Vapor chamber cooling system paired with energy-efficient Snapdragon 8 Gen 3 for extended battery runtime"
                                      ]
                   },
                   {
                       "id":  "vivo-x100-ultra",
                       "brandId":  "vivo",
                       "brandName":  "Vivo",
                       "seriesId":  "x-series",
                       "seriesName":  "X-Series Zeiss Flagship",
                       "model":  "Vivo X100 Ultra",
                       "tagline":  "Snapdragon 8 Gen 3, 200MP Zeiss APO Periscope Telephoto, and 1-inch Sony LYT-900 Main Sensor.",
                       "releaseDate":  "2024-05",
                       "releaseYear":  2024,
                       "specs":  {
                                     "Design \u0026 Dimensions":  {
                                                                      "Dimensions":  "164.1 x 75.6 x 9.2 mm",
                                                                      "Weight":  "229 g",
                                                                      "Materials":  "Curved glass front and rear with aircraft-grade aluminum frame and sunburst bezel ring",
                                                                      "Protection":  "IP68 and IP69 water and high-pressure dust resistance rating",
                                                                      "Colors":  "Titanium, White, Space Gray"
                                                                  },
                                     "Display System":  {
                                                            "Display Size":  "6.78 inches Curved Samsung E7 LTPO AMOLED",
                                                            "Resolution":  "3200 x 1440 pixels at 517 ppi (2K QHD+)",
                                                            "Refresh Rate":  "1-120Hz adaptive Pro-refresh",
                                                            "Peak Brightness":  "3000 nits local peak brightness",
                                                            "Features":  "Dolby Vision, HDR10+, 1440Hz high-frequency PWM dimming, Ultrasonic fingerprint sensor"
                                                        },
                                     "Processor \u0026 Silicon":  {
                                                                      "SoC":  "Qualcomm Snapdragon 8 Gen 3 (4nm architecture)",
                                                                      "CPU":  "Octa-core (1x 3.3 GHz Cortex-X4 + 3x 3.2 GHz Cortex-A720 + 2x 3.0 GHz Cortex-A720 + 2x 2.3 GHz Cortex-A520)",
                                                                      "GPU":  "Qualcomm Adreno 750",
                                                                      "NPU":  "Qualcomm Hexagon NPU paired with custom Vivo V3+ 6nm Imaging Chip"
                                                                  },
                                     "Memory \u0026 Storage":  {
                                                                   "RAM":  "12GB / 16GB LPDDR5X",
                                                                   "Internal Storage":  "256GB / 512GB / 1TB UFS 4.0",
                                                                   "Card Slot":  "No expandable storage"
                                                               },
                                     "Optics \u0026 Camera Architecture":  {
                                                                               "Rear Main Camera":  "50MP Sony LYT-900 (1.0-inch sensor, 23mm, f/1.75, Gimbal OIS, Zeiss T* coating)",
                                                                               "Ultra-Wide Camera":  "50MP (1/2.0-inch sensor, 14mm, f/2.2, 116 deg FOV, AF)",
                                                                               "Telephoto Camera":  "200MP Zeiss APO Periscope (1/1.4-inch Samsung HP9 sensor, 85mm, f/2.67, 3.7x optical zoom, CIPA 4.5 level OIS)",
                                                                               "Optical Zoom":  "3.7x optical zoom, up to 20x telephoto macro mode, up to 100x Zeiss hyper-zoom",
                                                                               "Video Capability":  "4K 120 fps portrait video, 4K 60 fps Dolby Vision HDR",
                                                                               "Front Selfie Camera":  "50MP high-resolution camera, f/2.45, 4K60 video recording"
                                                                           },
                                     "Battery \u0026 Charging":  {
                                                                     "Battery Capacity":  "5500 mAh BlueOcean high-density battery",
                                                                     "Wired Charging":  "80W FlashCharge wired charging",
                                                                     "Wireless Charging":  "30W wireless charging",
                                                                     "Battery Life":  "Extended low-temperature silicon-carbon battery endurance"
                                                                 },
                                     "Connectivity \u0026 Software":  {
                                                                          "Operating System":  "OriginOS 4 based on Android 14",
                                                                          "Cellular":  "5.5G / 5G SA/NSA, dual SIM",
                                                                          "Wi-Fi":  "Wi-Fi 7 (802.11be)",
                                                                          "Bluetooth":  "Bluetooth 5.4 with aptX HD, LDAC, LHDC",
                                                                          "Ports":  "USB-C 3.2 Gen 1 (DisplayPort support)",
                                                                          "Special Hardware":  "Two-way satellite messaging (1TB edition), 3D ultrasonic in-display fingerprint sensor"
                                                                      }
                                 },
                       "highlights":  [
                                          "Massive 200MP Samsung HP9 1/1.4-inch periscope sensor certified by Zeiss with APO apochromatic optical standard",
                                          "1-inch Sony LYT-900 primary sensor stabilized by hardware-level Gimbal OIS",
                                          "Independent custom Vivo V3+ 6nm imaging chip enabling cinematic 4K portrait video computing",
                                          "Highest dual ingress protection ratings in the industry: both IP68 and high-temperature jet IP69 certified"
                                      ]
                   },
                   {
                       "id":  "oppo-find-x7-ultra",
                       "brandId":  "oppo",
                       "brandName":  "Oppo",
                       "seriesId":  "find-x",
                       "seriesName":  "Find X Series",
                       "model":  "Find X7 Ultra",
                       "tagline":  "World\u0027s First Dual-Periscope Quad Main Camera, Sony LYT-900 1-inch Sensor, and Snapdragon 8 Gen 3.",
                       "releaseDate":  "2024-01",
                       "releaseYear":  2024,
                       "specs":  {
                                     "Design \u0026 Dimensions":  {
                                                                      "Dimensions":  "164.3 x 76.2 x 9.5 mm",
                                                                      "Weight":  "221 g",
                                                                      "Materials":  "Curved Gorilla Glass Victus 2 front, dual-material back with bio-leather and glossy glass, aluminum frame",
                                                                      "Protection":  "IP68 water and dust resistant (up to 1.5m for 30 minutes)",
                                                                      "Colors":  "Ocean Blue, Sepia Brown, Tailored Black"
                                                                  },
                                     "Display System":  {
                                                            "Display Size":  "6.82 inches Quad-Curved LTPO AMOLED",
                                                            "Resolution":  "3168 x 1440 pixels at 510 ppi (2K QHD+)",
                                                            "Refresh Rate":  "1-120Hz dynamic refresh rate",
                                                            "Peak Brightness":  "4500 nits peak brightness (1600 nits typical, 2600 nits HBM)",
                                                            "Features":  "Dolby Vision, HDR10+, ProXDR display, 2160Hz high-frequency PWM dimming"
                                                        },
                                     "Processor \u0026 Silicon":  {
                                                                      "SoC":  "Qualcomm Snapdragon 8 Gen 3 (4nm node)",
                                                                      "CPU":  "Octa-core (1x 3.3 GHz Cortex-X4 + 3x 3.2 GHz Cortex-A720 + 2x 3.0 GHz Cortex-A720 + 2x 2.3 GHz Cortex-A520)",
                                                                      "GPU":  "Qualcomm Adreno 750",
                                                                      "NPU":  "Qualcomm Hexagon NPU with AndesGPT on-device AI integration"
                                                                  },
                                     "Memory \u0026 Storage":  {
                                                                   "RAM":  "12GB / 16GB LPDDR5X",
                                                                   "Internal Storage":  "256GB / 512GB UFS 4.0",
                                                                   "Card Slot":  "No expandable storage"
                                                               },
                                     "Optics \u0026 Camera Architecture":  {
                                                                               "Rear Main Camera":  "50MP Sony LYT-900 (1.0-inch sensor, 23mm, f/1.8, OIS, 100% All-Pixel Omni-directional PDAF)",
                                                                               "Ultra-Wide Camera":  "50MP Sony LYT-600 (14mm, f/2.0, 123 deg FOV, 4cm macro focus, PDAF)",
                                                                               "Telephoto Camera":  "50MP Sony IMX890 (65mm, 2.8x optical periscope, f/2.6, OIS, 25cm close focus) + 50MP Sony IMX858 (135mm, 6x optical periscope, f/4.3, OIS, 35cm close focus)",
                                                                               "Optical Zoom":  "Quad-main system providing true optical zoom at 2.8x (65mm) and 6x (135mm)",
                                                                               "Video Capability":  "4K 60 fps Dolby Vision HDR across all four camera lenses",
                                                                               "Front Selfie Camera":  "32MP Sony IMX709, f/2.4, 21mm, autofocus, 4K60 video"
                                                                           },
                                     "Battery \u0026 Charging":  {
                                                                     "Battery Capacity":  "5000 mAh dual-cell battery",
                                                                     "Wired Charging":  "100W SUPERVOOC flash charge (100% in 26 minutes)",
                                                                     "Wireless Charging":  "50W AIRVOOC wireless charging and 10W reverse charging",
                                                                     "Battery Life":  "Battery Health Engine maintaining 80% capacity after 1,600 charging cycles"
                                                                 },
                                     "Connectivity \u0026 Software":  {
                                                                          "Operating System":  "ColorOS 14 based on Android 14",
                                                                          "Cellular":  "5G SA/NSA, dual SIM",
                                                                          "Wi-Fi":  "Wi-Fi 7 (802.11be) with dual-antenna technology",
                                                                          "Bluetooth":  "Bluetooth 5.4 with aptX HD, LDAC, LHDC",
                                                                          "Ports":  "USB-C 3.2 Gen 1 (supports DisplayPort)",
                                                                          "Special Hardware":  "Physical VIP privacy alert slider, Dedicated independent security chip"
                                                                      }
                                 },
                       "highlights":  [
                                          "World\u0027s first smartphone engineered with a dual-periscope telephoto architecture (65mm portrait + 135mm super-telephoto)",
                                          "Second-generation 1-inch Sony LYT-900 sensor capturing 50% more dynamic range with 32% lower power consumption",
                                          "Full quad-lens 4K 60fps Dolby Vision HDR pipeline calibrated by Hasselblad Master Mode",
                                          "Hardware-isolated security architecture with physical 3-stage VIP privacy slider"
                                      ]
                   },
                   {
                       "id":  "nothing-phone-2",
                       "brandId":  "nothing",
                       "brandName":  "Nothing",
                       "seriesId":  "phone-series",
                       "seriesName":  "Nothing Phone Series",
                       "model":  "Nothing Phone (2)",
                       "tagline":  "Qualcomm Snapdragon 8+ Gen 1, Customizable Glyph Interface 2.0, and 120Hz LTPO OLED Display.",
                       "releaseDate":  "2023-07",
                       "releaseYear":  2023,
                       "specs":  {
                                     "Design \u0026 Dimensions":  {
                                                                      "Dimensions":  "162.1 x 76.4 x 8.6 mm",
                                                                      "Weight":  "201.2 g",
                                                                      "Materials":  "100% recycled aluminum mid-frame, pillowed 2.5D curved Gorilla Glass back, Gorilla Glass front",
                                                                      "Protection":  "IP54 splash, water, and dust resistance",
                                                                      "Colors":  "Dark Gray, White"
                                                                  },
                                     "Display System":  {
                                                            "Display Size":  "6.7 inches Flexible LTPO OLED",
                                                            "Resolution":  "2412 x 1080 pixels at 394 ppi",
                                                            "Refresh Rate":  "1-120Hz adaptive LTPO refresh rate",
                                                            "Peak Brightness":  "1600 nits peak outdoor brightness (1000 nits full-screen)",
                                                            "Features":  "HDR10+, 10-bit color depth (1.07 billion colors), 240Hz touch sampling rate"
                                                        },
                                     "Processor \u0026 Silicon":  {
                                                                      "SoC":  "Qualcomm Snapdragon 8+ Gen 1 (4nm TSMC node)",
                                                                      "CPU":  "Octa-core (1x 3.0 GHz Cortex-X2 + 3x 2.5 GHz Cortex-A710 + 4x 1.8 GHz Cortex-A510)",
                                                                      "GPU":  "Qualcomm Adreno 730",
                                                                      "NPU":  "Qualcomm 7th Gen AI Engine delivering 27 TOPS"
                                                                  },
                                     "Memory \u0026 Storage":  {
                                                                   "RAM":  "8GB / 12GB LPDDR5",
                                                                   "Internal Storage":  "128GB / 256GB / 512GB UFS 3.1",
                                                                   "Card Slot":  "No expandable storage"
                                                               },
                                     "Optics \u0026 Camera Architecture":  {
                                                                               "Rear Main Camera":  "50MP Sony IMX890 (1/1.56-inch sensor, 24mm, f/1.88, OIS \u0026 EIS, Advanced HDR)",
                                                                               "Ultra-Wide Camera":  "50MP Samsung JN1 (1/2.76-inch sensor, 14mm, f/2.2, 114 deg FOV, 4cm Macro mode)",
                                                                               "Telephoto Camera":  "2x in-sensor lossless sensor crop on 50MP Sony IMX890",
                                                                               "Optical Zoom":  "2x lossless in-sensor crop; up to 10x digital zoom",
                                                                               "Video Capability":  "4K 60 fps with Action Mode stabilization, Live HDR, 1080p 240 fps slow motion",
                                                                               "Front Selfie Camera":  "32MP Sony IMX615, f/2.45, 1080p 60fps video"
                                                                           },
                                     "Battery \u0026 Charging":  {
                                                                     "Battery Capacity":  "4700 mAh dual-cell battery",
                                                                     "Wired Charging":  "45W PPS fast charging (100% charge in ~55 minutes)",
                                                                     "Wireless Charging":  "15W Qi wireless charging and 5W reverse wireless charging",
                                                                     "Battery Life":  "Up to 22.5 hours continuous usage on a single charge"
                                                                 },
                                     "Connectivity \u0026 Software":  {
                                                                          "Operating System":  "Nothing OS 2.5 based on Android 14 (3 Android upgrades, 4 years security patches)",
                                                                          "Cellular":  "5G SA/NSA, dual SIM",
                                                                          "Wi-Fi":  "Wi-Fi 6 (802.11 a/b/g/n/ac/ax) with 2x2 MIMO",
                                                                          "Bluetooth":  "Bluetooth 5.3",
                                                                          "Ports":  "USB-C 2.0",
                                                                          "Special Hardware":  "Glyph Interface 2.0 with 33 addressable LED zones, Glyph Composer, Timer \u0026 Progress indicator"
                                                                      }
                                 },
                       "highlights":  [
                                          "Interactive Glyph Interface with 33 addressable LED illumination zones for notifications, volume tracking, and visual timers",
                                          "Efficient Snapdragon 8+ Gen 1 platform delivering an 80% speed increase over Phone (1)",
                                          "Zero-bloatware Nothing OS monochrome icon pack and custom functional lockscreen widgets",
                                          "Eco-responsible manufacturing with 100% recycled aluminum mid-frame and 80% recycled plastic components"
                                      ]
                   },
                   {
                       "id":  "motorola-razr-50-ultra",
                       "brandId":  "motorola",
                       "brandName":  "Motorola",
                       "seriesId":  "razr-series",
                       "seriesName":  "Razr Flip Series",
                       "model":  "Razr 50 Ultra",
                       "tagline":  "Snapdragon 8s Gen 3, Industry-Largest 4.0-inch 165Hz External Display, and 6.9-inch Foldable pOLED.",
                       "releaseDate":  "2024-06",
                       "releaseYear":  2024,
                       "specs":  {
                                     "Design \u0026 Dimensions":  {
                                                                      "Dimensions":  "Unfolded: 171.4 x 74.0 x 7.1 mm; Folded: 88.1 x 74.0 x 15.3 mm",
                                                                      "Weight":  "189 g",
                                                                      "Materials":  "6000-series aircraft-grade aluminum frame, premium vegan leather back, titanium-reinforced teardrop hinge",
                                                                      "Protection":  "IPX8 certified water resistance (1.5m submersible up to 30 mins)",
                                                                      "Colors":  "Midnight Blue, Spring Green, Peach Fuzz (Pantone), Hot Pink"
                                                                  },
                                     "Display System":  {
                                                            "Display Size":  "External: 4.0 inches pOLED; Internal: 6.9 inches Foldable LTPO pOLED",
                                                            "Resolution":  "External: 1272 x 1080 (417 ppi); Internal: 2640 x 1080 (FHD+)",
                                                            "Refresh Rate":  "165Hz ultra-smooth refresh on both external and internal screens",
                                                            "Peak Brightness":  "3000 nits peak on internal screen; 2400 nits peak on external screen",
                                                            "Features":  "Dolby Vision, HDR10+, 10-bit color, Gorilla Glass Victus cover glass protection"
                                                        },
                                     "Processor \u0026 Silicon":  {
                                                                      "SoC":  "Qualcomm Snapdragon 8s Gen 3 (4nm node)",
                                                                      "CPU":  "Octa-core (1x 3.0 GHz Cortex-X4 + 4x 2.8 GHz Cortex-A720 + 3x 2.0 GHz Cortex-A520)",
                                                                      "GPU":  "Qualcomm Adreno 735",
                                                                      "NPU":  "Qualcomm AI Engine driving on-device moto ai capabilities"
                                                                  },
                                     "Memory \u0026 Storage":  {
                                                                   "RAM":  "12GB LPDDR5X",
                                                                   "Internal Storage":  "512GB UFS 4.0",
                                                                   "Card Slot":  "No expandable storage"
                                                               },
                                     "Optics \u0026 Camera Architecture":  {
                                                                               "Rear Main Camera":  "50MP (1/1.95-inch sensor, 24mm, f/1.7, 0.8um, OIS, Instant All-Pixel Focus)",
                                                                               "Ultra-Wide Camera":  "Replaced by specialized 2x Telephoto lens for portrait clarity",
                                                                               "Telephoto Camera":  "50MP 2x Telephoto (1/2.75-inch sensor, 48mm, f/2.0, 2x optical zoom, 30x AI super-zoom)",
                                                                               "Optical Zoom":  "2x optical zoom; 30x digital AI super-zoom",
                                                                               "Video Capability":  "4K 60 fps, HDR10+, Camcorder mode holding phone at 90 degrees",
                                                                               "Front Selfie Camera":  "32MP internal screen camera, f/2.4; Or shoot selfies using the 50MP main camera with the 4-inch cover screen"
                                                                           },
                                     "Battery \u0026 Charging":  {
                                                                     "Battery Capacity":  "4000 mAh dual-cell battery",
                                                                     "Wired Charging":  "45W TurboPower wired charging",
                                                                     "Wireless Charging":  "15W wireless charging and 5W reverse wireless charging",
                                                                     "Battery Life":  "Full all-day battery endurance optimized by the power-efficient external display"
                                                                 },
                                     "Connectivity \u0026 Software":  {
                                                                          "Operating System":  "Android 14 with Hello UX and moto ai integration",
                                                                          "Cellular":  "5G SA/NSA, dual SIM (Nano-SIM + eSIM)",
                                                                          "Wi-Fi":  "Wi-Fi 7 (802.11be)",
                                                                          "Bluetooth":  "Bluetooth 5.4 with Snapdragon Sound",
                                                                          "Ports":  "USB-C 2.0",
                                                                          "Special Hardware":  "Full-size functional 4.0-inch cover display running any app without unfolding"
                                                                      }
                                 },
                       "highlights":  [
                                          "Largest external cover screen on any flip phone (4.0-inch 165Hz pOLED) capable of running any full Android app",
                                          "IPX8 immersion water resistance rating backed by a simplified teardrop zero-gap hinge mechanism",
                                          "Dual 50MP cameras with telephoto portrait optics replacing traditional low-utility ultra-wide sensors",
                                          "Qualcomm Snapdragon 8s Gen 3 platform powering integrated Google Gemini AI directly on the external screen"
                                      ]
                   },
                   {
                       "id":  "asus-rog-phone-8-pro",
                       "brandId":  "asus",
                       "brandName":  "Asus",
                       "seriesId":  "rog-phone",
                       "seriesName":  "ROG Phone Gaming",
                       "model":  "ROG Phone 8 Pro",
                       "tagline":  "Snapdragon 8 Gen 3, 165Hz Samsung E6 AMOLED, 24GB LPDDR5X RAM, and AniMe Vision LED Matrix.",
                       "releaseDate":  "2024-01",
                       "releaseYear":  2024,
                       "specs":  {
                                     "Design \u0026 Dimensions":  {
                                                                      "Dimensions":  "163.8 x 76.8 x 8.9 mm",
                                                                      "Weight":  "225 g",
                                                                      "Materials":  "Slim aerodynamic aluminum frame, matte anti-glare glass back with programmable AniMe Vision matrix",
                                                                      "Protection":  "World\u0027s first IP68 water and dust resistant dedicated gaming smartphone",
                                                                      "Colors":  "Phantom Black"
                                                                  },
                                     "Display System":  {
                                                            "Display Size":  "6.78 inches Samsung Flexible E6 AMOLED",
                                                            "Resolution":  "2400 x 1080 pixels (Full HD+)",
                                                            "Refresh Rate":  "1-120Hz LTPO adaptive refresh; boostable up to 165Hz in gaming mode",
                                                            "Peak Brightness":  "2500 nits peak outdoor brightness (1600 nits HBM)",
                                                            "Features":  "720Hz touch sampling rate, 23ms touch latency, HDR10, Corning Gorilla Glass Victus 2"
                                                        },
                                     "Processor \u0026 Silicon":  {
                                                                      "SoC":  "Qualcomm Snapdragon 8 Gen 3 (4nm process node)",
                                                                      "CPU":  "Octa-core (1x 3.3 GHz Cortex-X4 + 5x 3.2 GHz Cortex-A720 + 2x 2.3 GHz Cortex-A520)",
                                                                      "GPU":  "Qualcomm Adreno 750",
                                                                      "NPU":  "Qualcomm Hexagon NPU powering X-Sense AI game recognition and AI grabber"
                                                                  },
                                     "Memory \u0026 Storage":  {
                                                                   "RAM":  "16GB / 24GB LPDDR5X (8533 Mbps)",
                                                                   "Internal Storage":  "512GB / 1TB UFS 4.0",
                                                                   "Card Slot":  "No expandable storage"
                                                               },
                                     "Optics \u0026 Camera Architecture":  {
                                                                               "Rear Main Camera":  "50MP Sony IMX890 (1/1.56-inch, 24mm, f/1.9, 6-Axis Hybrid Gimbal Stabilizer 3.0)",
                                                                               "Ultra-Wide Camera":  "13MP free-form lens (12.7mm, f/2.2, 120 deg FOV)",
                                                                               "Telephoto Camera":  "32MP (f/2.4, OIS, 3x optical zoom, 30x HyperClarity zoom)",
                                                                               "Optical Zoom":  "3x optical zoom; up to 30x digital zoom",
                                                                               "Video Capability":  "8K UHD at 24 fps, 4K at 60 fps with Super HyperSteady gimbal stabilization",
                                                                               "Front Selfie Camera":  "32MP RGBW sensor with 90 deg wide field of view"
                                                                           },
                                     "Battery \u0026 Charging":  {
                                                                     "Battery Capacity":  "5500 mAh dual-cell battery",
                                                                     "Wired Charging":  "65W HyperCharge USB PD 3.0 (100% in 39 minutes)",
                                                                     "Wireless Charging":  "15W Qi wireless charging supported",
                                                                     "Battery Life":  "Multi-hour sustained high-framerate gaming with bypass charging support"
                                                                 },
                                     "Connectivity \u0026 Software":  {
                                                                          "Operating System":  "ROG UI / ZenUI based on Android 14",
                                                                          "Cellular":  "5G SA/NSA, dual SIM",
                                                                          "Wi-Fi":  "Wi-Fi 7 (802.11be) with triple-antenna design",
                                                                          "Bluetooth":  "Bluetooth 5.4 with aptX Adaptive, aptX Lossless, LDAC",
                                                                          "Ports":  "Dual USB-C ports (bottom port + side-mounted gaming port with DisplayPort 1.4) and 3.5mm headphone jack",
                                                                          "Special Hardware":  "AniMe Vision with 341 customizable white Mini-LEDs, Ultrasonic AirTrigger shoulder buttons"
                                                                      }
                                 },
                       "highlights":  [
                                          "AniMe Vision auxiliary display featuring 341 programmable Mini-LEDs on the rear back glass",
                                          "6-Axis Hybrid Gimbal Stabilizer 3.0 delivering rock-solid optical video capture",
                                          "Ultrasonic AirTrigger touch sensors providing tactile console-style shoulder controls",
                                          "GameCool 8 rapid-cooling thermal conductor design with optional clip-on AeroActive Cooler X"
                                      ]
                   },
                   {
                       "id":  "honor-magic-6-pro",
                       "brandId":  "honor",
                       "brandName":  "Honor",
                       "seriesId":  "magic-series",
                       "seriesName":  "Magic Pro Series",
                       "model":  "Magic 6 Pro",
                       "tagline":  "Snapdragon 8 Gen 3, 180MP Periscope Telephoto, 5600mAh Silicon-Carbon Battery, and NanoCrystal Shield.",
                       "releaseDate":  "2024-01",
                       "releaseYear":  2024,
                       "specs":  {
                                     "Design \u0026 Dimensions":  {
                                                                      "Dimensions":  "162.5 x 75.8 x 8.9 mm",
                                                                      "Weight":  "229 g (glass) / 225 g (vegan leather)",
                                                                      "Materials":  "Honor NanoCrystal Shield front, premium vegan leather or micro-etched glass back, aluminum frame",
                                                                      "Protection":  "IP68 water and dust resistant (1.5m up to 30 mins) with 10x drop-resistant NanoCrystal Shield",
                                                                      "Colors":  "Epi Green, Black, Cloud Purple"
                                                                  },
                                     "Display System":  {
                                                            "Display Size":  "6.8 inches Quad-Curved Floating LTPO OLED",
                                                            "Resolution":  "2800 x 1280 pixels at 453 ppi (FHD+)",
                                                            "Refresh Rate":  "1-120Hz adaptive variable refresh rate",
                                                            "Peak Brightness":  "5000 nits HDR peak brightness (1600 nits global full-screen)",
                                                            "Features":  "4320Hz ultra-high frequency PWM dimming, Dolby Vision, TUV Rheinland Circadian Friendly certified"
                                                        },
                                     "Processor \u0026 Silicon":  {
                                                                      "SoC":  "Qualcomm Snapdragon 8 Gen 3 (4nm node)",
                                                                      "CPU":  "Octa-core (1x 3.3 GHz Cortex-X4 + 3x 3.2 GHz Cortex-A720 + 2x 3.0 GHz Cortex-A720 + 2x 2.3 GHz Cortex-A520)",
                                                                      "GPU":  "Qualcomm Adreno 750",
                                                                      "NPU":  "Qualcomm Hexagon NPU paired with Honor C1+ RF enhancement chip \u0026 Honor E1 power chip"
                                                                  },
                                     "Memory \u0026 Storage":  {
                                                                   "RAM":  "12GB / 16GB LPDDR5X",
                                                                   "Internal Storage":  "256GB / 512GB / 1TB UFS 4.0",
                                                                   "Card Slot":  "No expandable storage"
                                                               },
                                     "Optics \u0026 Camera Architecture":  {
                                                                               "Rear Main Camera":  "50MP Falcon Camera (1/1.3-inch sensor, 27mm, f/1.4-f/2.0 self-adjusting variable aperture, OIS)",
                                                                               "Ultra-Wide Camera":  "50MP (1/2.88-inch sensor, 13mm, f/2.0, 122 deg FOV, 2.5cm macro focus, AF)",
                                                                               "Telephoto Camera":  "180MP Periscope Telephoto (1/1.49-inch sensor, 68mm, f/2.6, 2.5x optical zoom, OIS)",
                                                                               "Optical Zoom":  "2.5x optical zoom; 5x and 10x high-res in-sensor crop; up to 100x digital zoom",
                                                                               "Video Capability":  "4K 60 fps 10-bit Log video recording, AI Motion Sensing sport capture",
                                                                               "Front Selfie Camera":  "50MP wide angle (f/2.0, 4K60 video) + 3D ToF depth sensor for secure biometric recognition"
                                                                           },
                                     "Battery \u0026 Charging":  {
                                                                     "Battery Capacity":  "5600 mAh second-generation Silicon-Carbon battery",
                                                                     "Wired Charging":  "80W Honor SuperCharge (100% in ~38 minutes)",
                                                                     "Wireless Charging":  "66W Wireless SuperCharge and reverse wireless charging",
                                                                     "Battery Life":  "Exceptional sub-zero cold-weather battery endurance powered by the E1 power management chip"
                                                                 },
                                     "Connectivity \u0026 Software":  {
                                                                          "Operating System":  "MagicOS 8.0 based on Android 14 with Magic Portal intent-based AI",
                                                                          "Cellular":  "5G SA/NSA, dual SIM",
                                                                          "Wi-Fi":  "Wi-Fi 7 (802.11be)",
                                                                          "Bluetooth":  "Bluetooth 5.3 with aptX HD, LDAC",
                                                                          "Ports":  "USB-C 3.1 Gen 1 (DisplayPort 1.2 support)",
                                                                          "Special Hardware":  "Hardware-level 3D Face Unlock, Two-way direct satellite communication (China edition)"
                                                                      }
                                 },
                       "highlights":  [
                                          "Groundbreaking 180MP 1/1.49-inch periscope sensor offering ultra-sharp zoom details and low-light sports capture",
                                          "Second-generation 5600mAh silicon-carbon battery delivering high capacity and cold-weather resistance",
                                          "Industry-first 4320Hz risk-free PWM dimming display certified for eye comfort and sleep cycle preservation",
                                          "Self-adjusting physical variable aperture (f/1.4 - f/2.0) with AI motion-sensing sports shutter"
                                      ]
                   },
                   {
                       "id":  "huawei-pura-70-ultra",
                       "brandId":  "huawei",
                       "brandName":  "Huawei",
                       "seriesId":  "pura-series",
                       "seriesName":  "Pura Flagship Series",
                       "model":  "Pura 70 Ultra",
                       "tagline":  "Kirin 9010 Silicon, Motorized Retractable 1-inch 50MP XMAGE Camera, and 100W SuperCharge.",
                       "releaseDate":  "2024-04",
                       "releaseYear":  2024,
                       "specs":  {
                                     "Design \u0026 Dimensions":  {
                                                                      "Dimensions":  "162.6 x 75.1 x 8.4 mm",
                                                                      "Weight":  "226 g",
                                                                      "Materials":  "Embossed vegan leather back with starburst pattern, forward symbol camera bump, Crystal Armor Kunlun glass",
                                                                      "Protection":  "IP68 water and dust resistance (submersible to 2 meters for 30 minutes)",
                                                                      "Colors":  "Chundao Green, Mocha Brown, Starburst White, Star Black"
                                                                  },
                                     "Display System":  {
                                                            "Display Size":  "6.8 inches Quad-Curved LTPO OLED",
                                                            "Resolution":  "2844 x 1260 pixels at 460 ppi",
                                                            "Refresh Rate":  "1-120Hz dynamic adaptive refresh rate",
                                                            "Peak Brightness":  "2500 nits peak brightness",
                                                            "Features":  "1440Hz high-frequency PWM dimming, 300Hz touch response, Crystal Armor Kunlun Glass with 300% scratch resistance"
                                                        },
                                     "Processor \u0026 Silicon":  {
                                                                      "SoC":  "HiSilicon Kirin 9010 (7nm architecture)",
                                                                      "CPU":  "Octa-core architecture (2x 2.3 GHz Taishan + 3x 2.18 GHz Taishan + 4x 1.55 GHz Cortex-A510)",
                                                                      "GPU":  "Maleoon 910 GPU",
                                                                      "NPU":  "DaVinci NPU architecture with on-device generative AI photo processing"
                                                                  },
                                     "Memory \u0026 Storage":  {
                                                                   "RAM":  "16GB RAM",
                                                                   "Internal Storage":  "512GB / 1TB High-speed Flash Storage",
                                                                   "Card Slot":  "No expandable storage"
                                                               },
                                     "Optics \u0026 Camera Architecture":  {
                                                                               "Rear Main Camera":  "50MP 1-inch Retractable XMAGE Camera (22.5mm, f/1.6-f/4.0 variable aperture, Sensor-shift OIS, Motorized pop-out lens)",
                                                                               "Ultra-Wide Camera":  "40MP (13mm, f/2.2, autofocus)",
                                                                               "Telephoto Camera":  "50MP Macro Telephoto (90mm, f/2.1, OIS, 3.5x optical zoom, 35x super macro focusing at 5cm)",
                                                                               "Optical Zoom":  "3.5x optical zoom; 100x digital zoom",
                                                                               "Video Capability":  "4K video recording, Ultra Speed Snapshot tracking moving objects up to 300 km/h",
                                                                               "Front Selfie Camera":  "13MP ultra-wide angle, f/2.4, autofocus"
                                                                           },
                                     "Battery \u0026 Charging":  {
                                                                     "Battery Capacity":  "5200 mAh silicon-carbon composite battery",
                                                                     "Wired Charging":  "100W Huawei SuperCharge",
                                                                     "Wireless Charging":  "80W Wireless SuperCharge and 20W reverse wireless charging",
                                                                     "Battery Life":  "Intelligent power management delivering full-day heavy productivity"
                                                                 },
                                     "Connectivity \u0026 Software":  {
                                                                          "Operating System":  "EMUI 14.2 (Global) / HarmonyOS 4.2 (China)",
                                                                          "Cellular":  "5G-capable architecture, dual SIM",
                                                                          "Wi-Fi":  "Wi-Fi 6 (802.11 a/b/g/n/ac/ax)",
                                                                          "Bluetooth":  "Bluetooth 5.2 with L2HC, LDAC high-res codecs",
                                                                          "Ports":  "USB-C 3.1 Gen 1 with DisplayPort support",
                                                                          "Special Hardware":  "Motorized retractable mechanical lens barrel tested for 300,000 cycles, Dual satellite communication"
                                                                      }
                                 },
                       "highlights":  [
                                          "Revolutionary retractable mechanical lens structure extending a full 1-inch sensor outwards upon camera activation",
                                          "Ultra Speed Snapshot technology capable of capturing blur-free photos of subjects moving at up to 300 km/h",
                                          "Versatile 50MP macro periscope telephoto lens focusing as close as 5cm with 35x super macro magnification",
                                          "Second-generation Crystal Armor Kunlun glass providing a 300% boost in surface scratch resistance"
                                      ]
                   },
                   {
                       "id":  "realme-gt-6",
                       "brandId":  "realme",
                       "brandName":  "Realme",
                       "seriesId":  "gt-series",
                       "seriesName":  "GT Performance Series",
                       "model":  "Realme GT 6",
                       "tagline":  "Snapdragon 8s Gen 3, Record-Breaking 6000-nit 8T LTPO Display, and 120W SuperVOOC Charge.",
                       "releaseDate":  "2024-06",
                       "releaseYear":  2024,
                       "specs":  {
                                     "Design \u0026 Dimensions":  {
                                                                      "Dimensions":  "162.0 x 75.1 x 8.6 mm",
                                                                      "Weight":  "199 g",
                                                                      "Materials":  "Nano-level mirror finish dual-texture glass back, Gorilla Glass Victus 2 front, reinforced frame",
                                                                      "Protection":  "IP65 dust and water jet resistance rating",
                                                                      "Colors":  "Fluid Silver, Razor Green"
                                                                  },
                                     "Display System":  {
                                                            "Display Size":  "6.78 inches 8T LTPO AMOLED",
                                                            "Resolution":  "2780 x 1264 pixels at 450 ppi (1.5K Ultra)",
                                                            "Refresh Rate":  "1-120Hz adaptive dynamic refresh rate",
                                                            "Peak Brightness":  "World-record 6000 nits local peak brightness (1600 nits HBM, 1000 nits typical)",
                                                            "Features":  "2160Hz high-frequency PWM dimming, Dolby Vision, HDR10+, 100% DCI-P3 color gamut"
                                                        },
                                     "Processor \u0026 Silicon":  {
                                                                      "SoC":  "Qualcomm Snapdragon 8s Gen 3 (4nm process)",
                                                                      "CPU":  "Octa-core (1x 3.0 GHz Cortex-X4 + 4x 2.8 GHz Cortex-A720 + 3x 2.0 GHz Cortex-A520)",
                                                                      "GPU":  "Qualcomm Adreno 735",
                                                                      "NPU":  "Qualcomm AI Engine powering Next AI smart removal and AI smart loop"
                                                                  },
                                     "Memory \u0026 Storage":  {
                                                                   "RAM":  "8GB / 12GB / 16GB LPDDR5X",
                                                                   "Internal Storage":  "256GB / 512GB UFS 4.0",
                                                                   "Card Slot":  "No expandable storage"
                                                               },
                                     "Optics \u0026 Camera Architecture":  {
                                                                               "Rear Main Camera":  "50MP Sony LYT-808 (1/1.4-inch sensor, 24mm, f/1.69, OIS \u0026 EIS, 4K Dolby Vision)",
                                                                               "Ultra-Wide Camera":  "8MP Sony IMX355 (16mm, f/2.2, 112 deg FOV)",
                                                                               "Telephoto Camera":  "50MP Samsung JN5 Portrait Telephoto (47mm, f/2.0, 2x optical zoom, 4x in-sensor lossless)",
                                                                               "Optical Zoom":  "2x optical zoom; 4x in-sensor lossless zoom",
                                                                               "Video Capability":  "4K 60 fps, Super Nightscape video algorithms",
                                                                               "Front Selfie Camera":  "32MP Sony IMX615, f/2.45, 4K30 video"
                                                                           },
                                     "Battery \u0026 Charging":  {
                                                                     "Battery Capacity":  "5500 mAh dual-cell battery",
                                                                     "Wired Charging":  "120W SUPERVOOC charging (50% in 10 minutes, 100% in 28 minutes)",
                                                                     "Wireless Charging":  "No wireless charging",
                                                                     "Battery Life":  "Over 46 hours of continuous call time and multi-year battery health guarantee"
                                                                 },
                                     "Connectivity \u0026 Software":  {
                                                                          "Operating System":  "Realme UI 5.0 based on Android 14 (3 major OS upgrades)",
                                                                          "Cellular":  "5G SA/NSA, dual SIM",
                                                                          "Wi-Fi":  "Wi-Fi 7 (802.11be)",
                                                                          "Bluetooth":  "Bluetooth 5.4 with aptX HD, LHDC",
                                                                          "Ports":  "USB-C 2.0",
                                                                          "Special Hardware":  "Iceberg dual-vapor chamber cooling system with 10,014 mm^2 cooling area"
                                                                      }
                                 },
                       "highlights":  [
                                          "World\u0027s brightest smartphone screen reaching an unprecedented 6000-nit local peak brightness",
                                          "Flagship 50MP Sony LYT-808 primary sensor with OIS paired with dedicated 50MP portrait telephoto",
                                          "Blazing 120W SUPERVOOC charging replenishing 50% of the massive 5500mAh battery in only 10 minutes",
                                          "Flagship-tier 10,014 mm^2 Iceberg Vapor Chamber delivering sustained gaming thermal stability"
                                      ]
                   },
                   {
                       "id":  "apple-iphone-16",
                       "brandId":  "apple",
                       "brandName":  "Apple",
                       "seriesId":  "iphone-base",
                       "seriesName":  "Standard iPhone Series",
                       "model":  "iPhone 16",
                       "tagline":  "Apple A18 3nm Chip, Camera Control, 48MP Fusion 2-in-1 Optics, and Apple Intelligence.",
                       "releaseDate":  "2024-09",
                       "releaseYear":  2024,
                       "specs":  {
                                     "Design \u0026 Dimensions":  {
                                                                      "Dimensions":  "147.6 x 71.6 x 7.8 mm",
                                                                      "Weight":  "170 g",
                                                                      "Materials":  "Aerospace-grade aluminum enclosure, color-infused back glass, latest Ceramic Shield front",
                                                                      "Protection":  "IP68 water and dust resistant (6m up to 30 mins)",
                                                                      "Colors":  "Ultramarine, Teal, Pink, White, Black"
                                                                  },
                                     "Display System":  {
                                                            "Display Size":  "6.1 inches Super Retina XDR OLED",
                                                            "Resolution":  "2556 x 1179 pixels at 460 ppi",
                                                            "Refresh Rate":  "60Hz refresh rate",
                                                            "Peak Brightness":  "2000 nits peak outdoor brightness (1000 nits typical, 1 nit minimum)",
                                                            "Features":  "Dynamic Island, HDR display, True Tone, Wide color (P3), Haptic Touch"
                                                        },
                                     "Processor \u0026 Silicon":  {
                                                                      "SoC":  "Apple A18 (second-generation 3-nanometer architecture)",
                                                                      "CPU":  "6-core CPU (2 performance cores + 4 efficiency cores)",
                                                                      "GPU":  "5-core Apple-designed GPU with hardware-accelerated ray tracing",
                                                                      "NPU":  "16-core Neural Engine optimized for generative Apple Intelligence models"
                                                                  },
                                     "Memory \u0026 Storage":  {
                                                                   "RAM":  "8GB LPDDR5X",
                                                                   "Internal Storage":  "128GB / 256GB / 512GB NVMe Flash storage",
                                                                   "Card Slot":  "No expandable storage"
                                                               },
                                     "Optics \u0026 Camera Architecture":  {
                                                                               "Rear Main Camera":  "48MP Fusion (26mm, f/1.6, Sensor-shift OIS, 100% Focus Pixels, 24MP \u0026 48MP super-high-resolution)",
                                                                               "Ultra-Wide Camera":  "12MP Ultra-Wide (13mm, f/2.2, 120 deg FOV, Autofocus, Macro photography)",
                                                                               "Telephoto Camera":  "12MP 2x Telephoto enabled by 48MP quad-pixel sensor crop (52mm, f/1.6)",
                                                                               "Optical Zoom":  "2x optical zoom in, 2x optical zoom out, 4x optical zoom range",
                                                                               "Video Capability":  "4K Dolby Vision video up to 60 fps, Spatial Video recording at 1080p 30 fps",
                                                                               "Front Selfie Camera":  "12MP TrueDepth, f/1.9, autofocus with Focus Pixels, 4K60 Dolby Vision"
                                                                           },
                                     "Battery \u0026 Charging":  {
                                                                     "Battery Capacity":  "3561 mAh lithium-ion battery",
                                                                     "Wired Charging":  "50% charge in ~30 minutes with 20W+ adapter",
                                                                     "Wireless Charging":  "MagSafe wireless charging up to 25W with 30W adapter, Qi2 up to 15W",
                                                                     "Battery Life":  "Up to 22 hours video playback"
                                                                 },
                                     "Connectivity \u0026 Software":  {
                                                                          "Operating System":  "iOS 18 with Apple Intelligence on-device architecture",
                                                                          "Cellular":  "5G (sub-6 GHz \u0026 mmWave), Gigabit LTE",
                                                                          "Wi-Fi":  "Wi-Fi 7 (802.11be) with 2x2 MIMO",
                                                                          "Bluetooth":  "Bluetooth 5.3",
                                                                          "Ports":  "USB-C with USB 2 support",
                                                                          "Special Hardware":  "Capacitive Camera Control button, Action button"
                                                                      }
                                 },
                       "highlights":  [
                                          "Brand-new Apple A18 3nm silicon engineered from the ground up for on-device Apple Intelligence",
                                          "Tactile flush Camera Control button with force sensor and touch surface for instant focus and zoom",
                                          "48MP Fusion camera delivers two optical focal lengths in one sensor with 2x lossless telephoto",
                                          "Customizable Action Button replacing traditional mute switch for one-touch workflow actions"
                                      ]
                   },
                   {
                       "id":  "samsung-galaxy-s24",
                       "brandId":  "samsung",
                       "brandName":  "Samsung",
                       "seriesId":  "galaxy-s-plus",
                       "seriesName":  "Galaxy S Plus / Base Series",
                       "model":  "Galaxy S24",
                       "tagline":  "Snapdragon 8 Gen 3 / Exynos 2400, 6.2-inch 120Hz Dynamic AMOLED 2X, and Galaxy AI.",
                       "releaseDate":  "2024-01",
                       "releaseYear":  2024,
                       "specs":  {
                                     "Design \u0026 Dimensions":  {
                                                                      "Dimensions":  "147.0 x 70.6 x 7.6 mm",
                                                                      "Weight":  "167 g",
                                                                      "Materials":  "Enhanced Armor Aluminum 2.0 frame, Corning Gorilla Glass Victus 2 front and back",
                                                                      "Protection":  "IP68 water and dust resistant (1.5m up to 30 mins)",
                                                                      "Colors":  "Onyx Black, Marble Gray, Cobalt Violet, Amber Yellow"
                                                                  },
                                     "Display System":  {
                                                            "Display Size":  "6.2 inches Dynamic LTPO AMOLED 2X",
                                                            "Resolution":  "2340 x 1080 pixels at 416 ppi (FHD+)",
                                                            "Refresh Rate":  "1-120Hz adaptive variable refresh rate",
                                                            "Peak Brightness":  "2600 nits peak brightness (Vision Booster technology)",
                                                            "Features":  "HDR10+, Always-on Display, 100% DCI-P3 color volume, Corning Gorilla Glass Victus 2"
                                                        },
                                     "Processor \u0026 Silicon":  {
                                                                      "SoC":  "Qualcomm Snapdragon 8 Gen 3 for Galaxy (US/CA) / Samsung Exynos 2400 (Global) (4nm)",
                                                                      "CPU":  "Deca-core Exynos 2400 (1x 3.2 GHz X4 + 5x A720 + 4x A520) / Octa-core Snapdragon 8 Gen 3",
                                                                      "GPU":  "Samsung Xclipse 940 (AMD RDNA 3) / Adreno 750",
                                                                      "NPU":  "High-efficiency NPU driving on-device Galaxy AI translation, summarization, and Circle to Search"
                                                                  },
                                     "Memory \u0026 Storage":  {
                                                                   "RAM":  "8GB LPDDR5X",
                                                                   "Internal Storage":  "128GB (UFS 3.1) / 256GB / 512GB (UFS 4.0)",
                                                                   "Card Slot":  "No expandable storage"
                                                               },
                                     "Optics \u0026 Camera Architecture":  {
                                                                               "Rear Main Camera":  "50MP (24mm, f/1.8, Dual Pixel PDAF, OIS)",
                                                                               "Ultra-Wide Camera":  "12MP (13mm, f/2.2, 120 deg FOV)",
                                                                               "Telephoto Camera":  "10MP (67mm, f/2.4, PDAF, OIS, 3x optical zoom)",
                                                                               "Optical Zoom":  "3x optical zoom, 2x in-sensor optical quality crop, up to 30x Space Zoom",
                                                                               "Video Capability":  "8K video recording at 30 fps, 4K at 60 fps, Super Slow-Mo",
                                                                               "Front Selfie Camera":  "12MP Dual Pixel AF, f/2.2, 26mm, 4K60 video"
                                                                           },
                                     "Battery \u0026 Charging":  {
                                                                     "Battery Capacity":  "4000 mAh battery",
                                                                     "Wired Charging":  "25W fast wired charging (50% in 30 minutes)",
                                                                     "Wireless Charging":  "Fast Wireless Charging 2.0 (15W) and Wireless PowerShare (4.5W)",
                                                                     "Battery Life":  "Up to 29 hours video playback"
                                                                 },
                                     "Connectivity \u0026 Software":  {
                                                                          "Operating System":  "One UI 6.1 based on Android 14 with 7 years of major OS upgrades",
                                                                          "Cellular":  "5G SA/NSA, dual SIM (Nano-SIM + eSIM)",
                                                                          "Wi-Fi":  "Wi-Fi 6E (802.11 a/b/g/n/ac/ax)",
                                                                          "Bluetooth":  "Bluetooth 5.3",
                                                                          "Ports":  "USB-C 3.2 Gen 1 (Samsung DeX desktop experience support)",
                                                                          "Special Hardware":  "Ultrasonic in-display fingerprint sensor, Galaxy AI on-device translation"
                                                                      }
                                 },
                       "highlights":  [
                                          "Guaranteed 7 generations of major Android OS upgrades and 7 years of security patches",
                                          "Compact 167g pocket-friendly form factor with 6.2-inch 1-120Hz LTPO 2600-nit display",
                                          "Comprehensive suite of on-device Galaxy AI tools including Live Call Translation and Circle to Search",
                                          "Dedicated 3x optical telephoto camera paired with 50MP Dual Pixel primary shooter"
                                      ]
                   },
                   {
                       "id":  "google-pixel-9",
                       "brandId":  "google",
                       "brandName":  "Google Pixel",
                       "seriesId":  "pixel-base",
                       "seriesName":  "Pixel Base Flagship",
                       "model":  "Pixel 9",
                       "tagline":  "Google Tensor G4 Silicon, Gemini Nano On-Device AI, and 6.3-inch 120Hz Actua OLED Display.",
                       "releaseDate":  "2024-08",
                       "releaseYear":  2024,
                       "specs":  {
                                     "Design \u0026 Dimensions":  {
                                                                      "Dimensions":  "152.8 x 72.0 x 8.5 mm",
                                                                      "Weight":  "198 g",
                                                                      "Materials":  "Polished satin metal frame, glossy Gorilla Glass Victus 2 back, Gorilla Glass Victus 2 front",
                                                                      "Protection":  "IP68 water and dust resistant (1.5m up to 30 mins)",
                                                                      "Colors":  "Obsidian, Porcelain, Wintergreen, Peony"
                                                                  },
                                     "Display System":  {
                                                            "Display Size":  "6.3 inches Actua OLED flat display",
                                                            "Resolution":  "2424 x 1080 pixels at 422 ppi (FHD+)",
                                                            "Refresh Rate":  "60-120Hz Smooth Display adaptive refresh",
                                                            "Peak Brightness":  "2700 nits peak brightness (1800 nits HDR)",
                                                            "Features":  "HDR10+, 24-bit depth for 16 million colors, \u003e1,000,000:1 contrast ratio"
                                                        },
                                     "Processor \u0026 Silicon":  {
                                                                      "SoC":  "Google Tensor G4 (4nm node) with Titan M2 security coprocessor",
                                                                      "CPU":  "Octa-core (1x 3.1 GHz Cortex-X4 + 3x 2.6 GHz Cortex-A720 + 4x 1.92 GHz Cortex-A520)",
                                                                      "GPU":  "ARM Mali-G715 MC7",
                                                                      "NPU":  "Google TPU running Gemini Nano multimodal on-device AI"
                                                                  },
                                     "Memory \u0026 Storage":  {
                                                                   "RAM":  "12GB LPDDR5X (engineered specifically for Gemini AI models)",
                                                                   "Internal Storage":  "128GB / 256GB UFS 3.1",
                                                                   "Card Slot":  "No expandable storage"
                                                               },
                                     "Optics \u0026 Camera Architecture":  {
                                                                               "Rear Main Camera":  "50MP Octa PD (1/1.31-inch sensor, 25mm, f/1.68, 1.2um, OIS \u0026 EIS)",
                                                                               "Ultra-Wide Camera":  "48MP Quad PD with Macro Focus (1/2.55-inch sensor, 123 deg FOV, f/1.7)",
                                                                               "Telephoto Camera":  "Super Res Zoom up to 8x with 2x optical-grade in-sensor crop",
                                                                               "Optical Zoom":  "2x lossless sensor crop, up to 8x Super Res digital zoom",
                                                                               "Video Capability":  "4K 60 fps, Audio Magic Eraser, Cinematic Blur, Night Sight Video",
                                                                               "Front Selfie Camera":  "10.5MP Dual PD, f/2.2, autofocus, 95 deg ultrawide FOV"
                                                                           },
                                     "Battery \u0026 Charging":  {
                                                                     "Battery Capacity":  "4700 mAh battery",
                                                                     "Wired Charging":  "27W fast wired charging (55% in 30 minutes)",
                                                                     "Wireless Charging":  "Fast wireless charging up to 15W with Qi / Pixel Stand",
                                                                     "Battery Life":  "24+ hours typical battery life, up to 100 hours with Extreme Battery Saver"
                                                                 },
                                     "Connectivity \u0026 Software":  {
                                                                          "Operating System":  "Android 14 with guaranteed 7 years of OS upgrades, security updates, and Pixel Feature Drops",
                                                                          "Cellular":  "5G SA/NSA, dual SIM (Nano-SIM + eSIM)",
                                                                          "Wi-Fi":  "Wi-Fi 7 (802.11be) tri-band with 2x2 MIMO",
                                                                          "Bluetooth":  "Bluetooth 5.3 with dual antennas",
                                                                          "Ports":  "USB-C 3.2",
                                                                          "Special Hardware":  "Ultrasonic in-display fingerprint sensor, Gemini Nano AI, Satellite SOS support"
                                                                      }
                                 },
                       "highlights":  [
                                          "Industry-leading 7 years of full OS upgrades, security patches, and quarterly Pixel Feature Drops",
                                          "Upgraded to 12GB of LPDDR5X RAM ensuring smooth local execution of Gemini Nano AI models",
                                          "Upgraded 48MP ultra-wide sensor with macro focus and wider f/1.7 light-gathering aperture",
                                          "Bright 2700-nit Actua OLED screen offering 35% higher visibility in outdoor sunlight"
                                      ]
                   },
                   {
                       "id":  "oneplus-open",
                       "brandId":  "oneplus",
                       "brandName":  "OnePlus",
                       "seriesId":  "oneplus-open",
                       "seriesName":  "Open Foldable Series",
                       "model":  "OnePlus Open",
                       "tagline":  "Snapdragon 8 Gen 2, Dual 2K 120Hz ProXDR Displays, Hasselblad Camera for Fold, and Open Canvas.",
                       "releaseDate":  "2023-10",
                       "releaseYear":  2023,
                       "specs":  {
                                     "Design \u0026 Dimensions":  {
                                                                      "Dimensions":  "Unfolded: 153.4 x 143.1 x 5.8 mm; Folded: 153.4 x 73.3 x 11.7 mm",
                                                                      "Weight":  "239 g (leather) / 245 g (glass)",
                                                                      "Materials":  "Titanium alloy hinge architecture, carbon fiber structural components, Ceramic Guard cover glass",
                                                                      "Protection":  "IPX4 splash and liquid spray resistant",
                                                                      "Colors":  "Emerald Dusk, Voyager Black"
                                                                  },
                                     "Display System":  {
                                                            "Display Size":  "Main: 7.82 inches Foldable Flexi-fluid LTPO 3.0 AMOLED; Cover: 6.31 inches Super Fluid LTPO 3.0 AMOLED",
                                                            "Resolution":  "Main: 2440 x 2268 (426 ppi); Cover: 2484 x 1116 (431 ppi, standard 20:9 ratio)",
                                                            "Refresh Rate":  "1-120Hz dynamic adaptive refresh rate on both screens",
                                                            "Peak Brightness":  "2800 nits peak brightness on both internal and external screens",
                                                            "Features":  "Dolby Vision, Ultra-Thin Glass (UTG), 1440Hz high-frequency PWM dimming"
                                                        },
                                     "Processor \u0026 Silicon":  {
                                                                      "SoC":  "Qualcomm Snapdragon 8 Gen 2 (4nm node)",
                                                                      "CPU":  "Octa-core (1x 3.2 GHz Cortex-X3 + 4x 2.8 GHz Cortex-A715/A710 + 3x 2.0 GHz Cortex-A510)",
                                                                      "GPU":  "Qualcomm Adreno 740",
                                                                      "NPU":  "Qualcomm Hexagon NPU with Snapdragon Sight ISP"
                                                                  },
                                     "Memory \u0026 Storage":  {
                                                                   "RAM":  "16GB LPDDR5X (with RAM-Vita software expansion)",
                                                                   "Internal Storage":  "512GB UFS 4.0",
                                                                   "Card Slot":  "No expandable storage"
                                                               },
                                     "Optics \u0026 Camera Architecture":  {
                                                                               "Rear Main Camera":  "48MP Sony LYT-T808 Pixel Stacked sensor (1/1.43-inch, 24mm, f/1.7, OIS)",
                                                                               "Ultra-Wide Camera":  "48MP (1/2-inch sensor, 14mm, f/2.2, 114 deg FOV, 3.5cm macro focus, AF)",
                                                                               "Telephoto Camera":  "64MP OmniVision OV64B Periscope (1/2-inch sensor, 70mm, f/2.6, OIS, 3x optical, 6x in-sensor)",
                                                                               "Optical Zoom":  "3x optical zoom, 6x lossless in-sensor zoom, up to 120x Ultra Res zoom",
                                                                               "Video Capability":  "4K 60 fps Dolby Vision video recording on all camera modules",
                                                                               "Front Selfie Camera":  "Cover: 32MP (f/2.4); Main Screen: 20MP (f/2.2)"
                                                                           },
                                     "Battery \u0026 Charging":  {
                                                                     "Battery Capacity":  "4805 mAh dual-cell battery",
                                                                     "Wired Charging":  "67W SUPERVOOC fast charging (1% to 100% in ~42 minutes)",
                                                                     "Wireless Charging":  "No wireless charging (engineered for slim 5.8mm chassis)",
                                                                     "Battery Life":  "Full day heavy multitasking battery runtime"
                                                                 },
                                     "Connectivity \u0026 Software":  {
                                                                          "Operating System":  "OxygenOS 14 based on Android 14 with Open Canvas multitasking",
                                                                          "Cellular":  "5G SA/NSA, dual SIM",
                                                                          "Wi-Fi":  "Wi-Fi 7 (802.11be)",
                                                                          "Bluetooth":  "Bluetooth 5.3 with aptX HD, LDAC, LHDC",
                                                                          "Ports":  "USB-C 3.1 Gen 1",
                                                                          "Special Hardware":  "Physical Alert Slider, Spatial Audio triple-speaker system, Open Canvas 3-app split view"
                                                                      }
                                 },
                       "highlights":  [
                                          "Open Canvas operating system allows running three full-screen mobile apps simultaneously with fluid sliding navigation",
                                          "Next-generation Sony LYT-T808 \u0027Pixel Stacked\u0027 main sensor achieving 1-inch sensor dynamic range in a slim foldable chassis",
                                          "Comfortable standard 20:9 external 6.31-inch smartphone screen that feels identical to a traditional non-folding phone",
                                          "Ultralight 239g construction utilizing proprietary titanium alloy and carbon fiber for a seamless, near-invisible display crease"
                                      ]
                   },
                   {
                       "id":  "xiaomi-14",
                       "brandId":  "xiaomi",
                       "brandName":  "Xiaomi",
                       "seriesId":  "xiaomi-pro",
                       "seriesName":  "Pro / Standard Series",
                       "model":  "Xiaomi 14",
                       "tagline":  "Qualcomm Snapdragon 8 Gen 3, Leica Summilux 75mm Floating Telephoto, and Compact 6.36-inch 120Hz OLED.",
                       "releaseDate":  "2023-11",
                       "releaseYear":  2023,
                       "specs":  {
                                     "Design \u0026 Dimensions":  {
                                                                      "Dimensions":  "152.8 x 71.5 x 8.2 mm",
                                                                      "Weight":  "193 g (glass) / 188 g (nano-leather)",
                                                                      "Materials":  "Curved high-strength aluminum frame, Corning Gorilla Glass Victus front, glass or nano-tech leather back",
                                                                      "Protection":  "IP68 water and dust resistance (1.5m up to 30 mins)",
                                                                      "Colors":  "Black, White, Jade Green"
                                                                  },
                                     "Display System":  {
                                                            "Display Size":  "6.36 inches Custom C8 LTPO OLED",
                                                            "Resolution":  "2670 x 1200 pixels at 460 ppi (1.5K CrystalRes)",
                                                            "Refresh Rate":  "1-120Hz dynamic adaptive AdaptiveSync Pro",
                                                            "Peak Brightness":  "3000 nits peak brightness (1000 nits typical)",
                                                            "Features":  "Dolby Vision, HDR10+, 68 billion colors (12-bit), DC dimming, ultra-thin 1.61mm symmetric borders"
                                                        },
                                     "Processor \u0026 Silicon":  {
                                                                      "SoC":  "Qualcomm Snapdragon 8 Gen 3 (4nm node)",
                                                                      "CPU":  "Octa-core (1x 3.3 GHz Cortex-X4 + 3x 3.2 GHz Cortex-A720 + 2x 3.0 GHz Cortex-A720 + 2x 2.3 GHz Cortex-A520)",
                                                                      "GPU":  "Qualcomm Adreno 750",
                                                                      "NPU":  "Qualcomm Hexagon NPU with on-device generative AI photo editing"
                                                                  },
                                     "Memory \u0026 Storage":  {
                                                                   "RAM":  "8GB / 12GB / 16GB LPDDR5X (8533 Mbps)",
                                                                   "Internal Storage":  "256GB / 512GB / 1TB UFS 4.0",
                                                                   "Card Slot":  "No expandable storage"
                                                               },
                                     "Optics \u0026 Camera Architecture":  {
                                                                               "Rear Main Camera":  "50MP Light Fusion 900 sensor (1/1.31-inch, 23mm, f/1.6 Leica Summilux lens, HyperOIS)",
                                                                               "Ultra-Wide Camera":  "50MP (1/2.76-inch, 14mm, f/2.2, 115 deg FOV)",
                                                                               "Telephoto Camera":  "50MP Leica 75mm Floating Telephoto (f/2.0, OIS, 3.2x optical zoom, 10cm telephoto macro)",
                                                                               "Optical Zoom":  "3.2x optical zoom, up to 60x digital zoom",
                                                                               "Video Capability":  "8K at 24 fps, 4K at 24/30/60 fps with 10-bit Dolby Vision HDR support",
                                                                               "Front Selfie Camera":  "32MP high-resolution camera, f/2.0, 4K60 video recording"
                                                                           },
                                     "Battery \u0026 Charging":  {
                                                                     "Battery Capacity":  "4610 mAh high-density silicon-carbon battery",
                                                                     "Wired Charging":  "90W HyperCharge wired charging (100% in ~31 minutes)",
                                                                     "Wireless Charging":  "50W wireless HyperCharge (100% in 46 minutes) and 10W reverse charging",
                                                                     "Battery Life":  "Xiaomi Surge battery management system providing all-day endurance"
                                                                 },
                                     "Connectivity \u0026 Software":  {
                                                                          "Operating System":  "Xiaomi HyperOS based on Android 14",
                                                                          "Cellular":  "5G SA/NSA, dual SIM (Nano-SIM + eSIM)",
                                                                          "Wi-Fi":  "Wi-Fi 7 (802.11be)",
                                                                          "Bluetooth":  "Bluetooth 5.4 with aptX Adaptive, aptX Lossless, LDAC, LHDC 5.0",
                                                                          "Ports":  "USB-C 3.2 Gen 1 (5Gbps high-speed data transfer)",
                                                                          "Special Hardware":  "Infrared (IR) blaster, 4-microphone array, IceLoop liquid cooling system"
                                                                      }
                                 },
                       "highlights":  [
                                          "Compact 6.36-inch flagship design with ultra-thin 1.61mm bezels offering comfortable one-handed ergonomics",
                                          "Custom 50MP Light Fusion 900 sensor paired with high-transmittance f/1.6 Leica Summilux optics",
                                          "Unique Leica 75mm floating telephoto lens shifting internally to focus from portraits down to 10cm macro",
                                          "Blazing charging versatility: 90W wired HyperCharge (31 mins) and 50W wireless HyperCharge (46 mins)"
                                      ]
                   }
               ]
};

const STORAGE_KEY = 'phonespecs_catalog_v3';
const ADMIN_PASS_KEY = 'phonespecs_admin_session_active';
const AUDIT_STORAGE_KEY = 'phonespecs_catalog_audit_v1';
const MAX_ITEM_VERSIONS = 5;

/**
 * PhoneSpecsApp — Pure Native JavaScript UI Controller & DOM Engine
 * Zero Alpine.js, zero external runtime.
 */
class PhoneSpecsApp {
  constructor() {
    this.catalogService = new CatalogService(DEFAULT_CATALOG_DATA);

    // Reactive State
    this.selectedBrand = 'all';
    this.selectedSeries = 'all';
    this.searchQuery = '';
    this.searchSortBy = 'name-asc';
    this.catalogSortBy = 'name-asc';

    this.activePhone = null;
    this.showDetailsModal = false;

    this.compareList = [];
    this.showCompareModal = false;

    this.adminMode = false;
    this.showFormModal = false;
    this.formTitle = 'Add New Mobile Phone';

    // Robust Audit Trail & Versioning: Maintains 5 recent versions for each catalog item
    this.auditData = {
      schemaVersion: "1.0.0",
      description: "PhoneSpecs Catalog Versioned Audit Trail",
      lastUpdated: new Date().toISOString(),
      items: {}
    };

    this.toasts = [];
    this.searchDebounceTimer = null;

    // Cache DOM Elements
    this.dom = {};
  }

  get isAnyModalOpen() {
    return Boolean(this.showDetailsModal || this.showCompareModal || this.showFormModal);
  }

  async init() {
    this.cacheDomElements();

    if (sessionStorage.getItem(ADMIN_PASS_KEY) === 'true') {
      this.adminMode = true;
    }

    this.bindEvents();
    await this.loadCatalogData();
    this.handleHashRoute();

    window.addEventListener('hashchange', () => this.handleHashRoute());
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeAllModals();
      }
    });

    this.render();
  }

  cacheDomElements() {
    this.dom.body = document.getElementById('app-body');
    this.dom.brandLogoBtn = document.getElementById('brand-logo-btn');
    this.dom.headerCompareBtn = document.getElementById('header-compare-btn');
    this.dom.headerCompareBadge = document.getElementById('header-compare-badge');
    this.dom.btnAdminToggle = document.getElementById('btn-admin-toggle');
    this.dom.btnAdminText = document.getElementById('btn-admin-text');

    this.dom.adminBanner = document.getElementById('admin-banner');
    this.dom.btnAdminAdd = document.getElementById('btn-admin-add');
    this.dom.btnAdminExport = document.getElementById('btn-admin-export');
    this.dom.btnAdminExportAudit = document.getElementById('btn-admin-export-audit');
    this.dom.btnAdminReset = document.getElementById('btn-admin-reset');

    this.dom.searchInput = document.getElementById('search-input');
    this.dom.searchIconWrap = document.getElementById('search-icon-wrap');
    this.dom.searchClearInner = document.getElementById('search-clear-inner');
    this.dom.searchSortSelect = document.getElementById('search-sort-select');

    this.dom.brandsContainer = document.getElementById('brands-container');
    this.dom.seriesContainer = document.getElementById('series-container');

    this.dom.catalogHeadingTitle = document.getElementById('catalog-heading-title');
    this.dom.catalogSortGroup = document.getElementById('catalog-sort-group');
    this.dom.catalogSortSelect = document.getElementById('catalog-sort-select');

    this.dom.itemsGrid = document.getElementById('items-grid');
    this.dom.emptyState = document.getElementById('empty-state');
    this.dom.btnEmptyReset = document.getElementById('btn-empty-reset');

    this.dom.compareDrawer = document.getElementById('compare-drawer');
    this.dom.compareChipsContainer = document.getElementById('compare-chips-container');
    this.dom.compareDrawerCount = document.getElementById('compare-drawer-count');
    this.dom.btnClearCompare = document.getElementById('btn-clear-compare');
    this.dom.btnOpenCompareDrawer = document.getElementById('btn-open-compare-drawer');

    this.dom.compareModal = document.getElementById('compare-modal');
    this.dom.compareModalCard = document.getElementById('compare-modal-card');
    this.dom.btnCloseCompare = document.getElementById('btn-close-compare');
    this.dom.compareTableContainer = document.getElementById('compare-table-container');

    this.dom.detailsModal = document.getElementById('details-modal');
    this.dom.detailsModalCard = document.getElementById('details-modal-card');
    this.dom.detailsBrandBadge = document.getElementById('details-brand-badge');
    this.dom.detailsModelTitle = document.getElementById('details-model-title');
    this.dom.btnCloseDetails = document.getElementById('btn-close-details');
    this.dom.detailsBodyContent = document.getElementById('details-body-content');

    this.dom.formModal = document.getElementById('form-modal');
    this.dom.formModalCard = document.getElementById('form-modal-card');
    this.dom.formModalTitle = document.getElementById('form-modal-title');
    this.dom.btnCloseForm = document.getElementById('btn-close-form');
    this.dom.btnCancelForm = document.getElementById('btn-cancel-form');
    this.dom.phoneCrudForm = document.getElementById('phone-crud-form');
    this.dom.formPhoneId = document.getElementById('form-phone-id');
    this.dom.formModel = document.getElementById('form-model');
    this.dom.formBrandId = document.getElementById('form-brand-id');
    this.dom.formSeriesId = document.getElementById('form-series-id');
    this.dom.formReleaseYear = document.getElementById('form-release-year');
    this.dom.formReleaseDate = document.getElementById('form-release-date');
    this.dom.formTagline = document.getElementById('form-tagline');
    this.dom.formHighlights = document.getElementById('form-highlights');
    this.dom.formSpecsJson = document.getElementById('form-specs-json');
    this.dom.btnFormFormatJson = document.getElementById('btn-form-format-json');
    this.dom.btnFormLoadTemplate = document.getElementById('btn-form-load-template');

    this.dom.formVersionHistoryGroup = document.getElementById('form-version-history-group');
    this.dom.formVersionSelect = document.getElementById('form-version-select');
    this.dom.btnFetchVersion = document.getElementById('btn-fetch-version');

    this.dom.toastContainer = document.getElementById('toast-container');
  }

  bindEvents() {
    this.dom.brandLogoBtn.addEventListener('click', () => this.showAllPhones());
    this.dom.headerCompareBtn.addEventListener('click', () => this.openCompareModal());

    this.dom.btnAdminToggle.addEventListener('click', () => this.toggleAdmin());
    this.dom.btnAdminAdd.addEventListener('click', () => this.openAddModal());
    this.dom.btnAdminExport.addEventListener('click', () => this.exportCatalogJson());
    if (this.dom.btnAdminExportAudit) {
      this.dom.btnAdminExportAudit.addEventListener('click', () => this.exportAuditJson());
    }
    this.dom.btnAdminReset.addEventListener('click', () => this.resetToDisk());

    if (this.dom.btnFetchVersion) {
      this.dom.btnFetchVersion.addEventListener('click', () => this.fetchSelectedAuditVersion());
    }

    // Instant Search with 120ms debounce
    this.dom.searchInput.addEventListener('input', (e) => {
      clearTimeout(this.searchDebounceTimer);
      this.searchDebounceTimer = setTimeout(() => {
        this.searchQuery = e.target.value;
        this.render();
      }, 120);
    });

    this.dom.searchClearInner.addEventListener('click', () => {
      this.dom.searchInput.value = '';
      this.searchQuery = '';
      this.render();
    });

    this.dom.searchSortSelect.addEventListener('change', (e) => {
      this.searchSortBy = e.target.value;
      this.render();
    });

    this.dom.catalogSortSelect.addEventListener('change', (e) => {
      this.catalogSortBy = e.target.value;
      this.render();
    });

    this.dom.btnEmptyReset.addEventListener('click', () => this.showAllPhones());

    // Compare Drawer
    this.dom.btnClearCompare.addEventListener('click', () => this.clearCompare());
    this.dom.btnOpenCompareDrawer.addEventListener('click', () => this.openCompareModal());

    // Compare Modal
    this.dom.btnCloseCompare.addEventListener('click', () => this.closeCompareModal());
    this.dom.compareModal.addEventListener('click', (e) => {
      if (e.target === this.dom.compareModal) this.closeCompareModal();
    });

    // Details Modal
    this.dom.btnCloseDetails.addEventListener('click', () => this.closeDetails());
    this.dom.detailsModal.addEventListener('click', (e) => {
      if (e.target === this.dom.detailsModal) this.closeDetails();
    });

    // Add/Edit Form Modal
    this.dom.btnCloseForm.addEventListener('click', () => this.closeFormModal());
    this.dom.btnCancelForm.addEventListener('click', () => this.closeFormModal());
    this.dom.formModal.addEventListener('click', (e) => {
      if (e.target === this.dom.formModal) this.closeFormModal();
    });

    this.dom.formBrandId.addEventListener('change', () => this.onBrandChange());
    this.dom.btnFormFormatJson.addEventListener('click', () => this.formatFormSpecs());
    this.dom.btnFormLoadTemplate.addEventListener('click', () => this.resetFormSpecsTemplate());

    this.dom.phoneCrudForm.addEventListener('submit', (e) => {
      e.preventDefault();
      this.savePhone();
    });
  }

  async loadCatalogData() {
    try {
      const cached = localStorage.getItem(STORAGE_KEY);
      let rawData = null;

      if (cached) {
        rawData = JSON.parse(cached);
      } else {
        const res = await fetch('./data/catalog.json');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        rawData = await res.json();
      }

      this.catalogService.initData(rawData);
    } catch (err) {
      this.catalogService.initData(DEFAULT_CATALOG_DATA);
    }

    // Load Audit Trail Data
    await this.loadAuditData();
  }

  async loadAuditData() {
    try {
      const cachedAudit = localStorage.getItem(AUDIT_STORAGE_KEY);
      if (cachedAudit) {
        this.auditData = JSON.parse(cachedAudit);
      } else {
        const res = await fetch('./data/audit.json');
        if (res.ok) {
          this.auditData = await res.json();
        }
      }
    } catch (e) {
      // Fallback empty schema
      this.auditData = {
        schemaVersion: "1.0.0",
        description: "PhoneSpecs Catalog Versioned Audit Trail",
        lastUpdated: new Date().toISOString(),
        items: {}
      };
    }
  }

  handleHashRoute() {
    const hash = window.location.hash.replace(/^#\/?/, '');
    if (!hash || hash === 'all') {
      this.selectedBrand = 'all';
      this.selectedSeries = 'all';
      if (window.location.hash) history.replaceState(null, '', window.location.pathname);
      this.render();
      return;
    }

    if (hash.startsWith('phone/')) {
      const phoneId = hash.replace('phone/', '');
      const found = this.catalogService.getPhoneById(phoneId);
      if (found) this.openDetails(found);
      return;
    }

    const parts = hash.split('/');
    const brandId = parts[0] || 'all';
    const seriesId = parts[1] || 'all';

    const brandExists = brandId === 'all' || this.catalogService.brands.some(b => b.id === brandId);
    this.selectedBrand = brandExists ? brandId : 'all';

    if (this.selectedBrand !== 'all' && seriesId !== 'all') {
      const hasSeriesPhones = this.catalogService.phones.some(p => p.brandId === this.selectedBrand && p.seriesId === seriesId);
      this.selectedSeries = hasSeriesPhones ? seriesId : 'all';
    } else {
      this.selectedSeries = 'all';
    }

    this.render();
  }

  selectBrand(brandId, seriesId = 'all') {
    this.searchQuery = '';
    this.dom.searchInput.value = '';
    this.selectedBrand = brandId;

    if (seriesId !== 'all') {
      const hasSeriesPhones = this.catalogService.phones.some(p => p.brandId === brandId && p.seriesId === seriesId);
      this.selectedSeries = hasSeriesPhones ? seriesId : 'all';
    } else {
      this.selectedSeries = 'all';
    }

    if (brandId === 'all') {
      window.location.hash = '';
      if (window.location.hash) history.replaceState(null, '', window.location.pathname);
    } else if (this.selectedSeries === 'all') {
      window.location.hash = brandId;
    } else {
      window.location.hash = `${brandId}/${this.selectedSeries}`;
    }

    this.render();
  }

  selectSeries(seriesId) {
    this.selectBrand(this.selectedBrand, seriesId);
  }

  showAllPhones() {
    this.searchQuery = '';
    this.dom.searchInput.value = '';
    this.selectedBrand = 'all';
    this.selectedSeries = 'all';
    this.closeAllModals();
    window.location.hash = '';
    if (window.location.hash) history.replaceState(null, '', window.location.pathname);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.render();
  }

  openDetails(phone) {
    this.activePhone = phone;
    this.showDetailsModal = true;
    window.location.hash = `phone/${phone.id}`;
    this.render();
  }

  closeDetails() {
    this.showDetailsModal = false;
    this.activePhone = null;
    if (this.selectedBrand !== 'all') {
      window.location.hash = this.selectedSeries !== 'all' ? `${this.selectedBrand}/${this.selectedSeries}` : this.selectedBrand;
    } else {
      window.location.hash = '';
    }
    this.render();
  }

  isInCompare(phoneId) {
    return this.compareList.some(p => p.id === phoneId);
  }

  toggleCompare(phone) {
    if (!phone) return;
    if (this.isInCompare(phone.id)) {
      this.compareList = this.compareList.filter(p => p.id !== phone.id);
    } else {
      if (this.compareList.length >= 3) {
        this.showToast('You can compare a maximum of 3 phones at once.', 'error');
        return;
      }
      this.compareList.push(phone);
    }
    this.render();
  }

  removeCompare(phoneId) {
    this.compareList = this.compareList.filter(p => p.id !== phoneId);
    if (this.compareList.length < 2 && this.showCompareModal) {
      this.closeCompareModal();
    }
    this.render();
  }

  clearCompare() {
    this.compareList = [];
    if (this.showCompareModal) this.closeCompareModal();
    this.render();
  }

  openCompareModal() {
    if (this.compareList.length < 2) {
      this.showToast('Please select at least 2 phones to compare.', 'info');
      return;
    }
    this.showCompareModal = true;
    this.render();
  }

  closeCompareModal() {
    this.showCompareModal = false;
    this.render();
  }

  closeAllModals() {
    this.showDetailsModal = false;
    this.showCompareModal = false;
    this.showFormModal = false;
    this.activePhone = null;
    this.render();
  }

  toggleAdmin() {
    if (this.adminMode) {
      this.adminMode = false;
      sessionStorage.removeItem(ADMIN_PASS_KEY);
      this.showToast('Exited Admin Mode. Webpage is now in read-only public view.', 'info');
    } else {
      const pass = prompt('Enter App Owner Passcode (default is: admin123):');
      if (pass === 'admin123' || pass === 'owner') {
        this.adminMode = true;
        sessionStorage.setItem(ADMIN_PASS_KEY, 'true');
        this.showToast('Admin Mode Active! You can now Add, Edit, Delete, and Export JSON.', 'success');
      } else if (pass !== null) {
        this.showToast('Incorrect passcode. Access denied.', 'error');
      }
    }
    this.render();
  }

  openAddModal() {
    try {
      this.formTitle = 'Add New Mobile Phone';
      const defaultBrand = this.catalogService.brands[0] ? this.catalogService.brands[0].id : 'apple';
      const brandObj = this.catalogService.brands.find(b => b.id === defaultBrand);
      const defaultSeries = brandObj?.series?.[0]?.id || '';

      this.populateFormFields({
        id: '',
        brandId: defaultBrand,
        seriesId: defaultSeries,
        model: '',
        tagline: '',
        releaseYear: new Date().getFullYear(),
        releaseDate: `${new Date().getFullYear()}-01`,
        specsRawJson: JSON.stringify({
          "Display System": {
            "Display Size": "6.7\" AMOLED 120Hz",
            "Resolution": "2778 x 1284 pixels"
          },
          "Processor & Silicon": {
            "SoC": "Snapdragon 8 Gen 3 (4nm)",
            "RAM": "12GB RAM"
          },
          "Optics & Camera Architecture": {
            "Rear Main Camera": "50MP OIS",
            "Front Selfie Camera": "32MP"
          },
          "Battery & Charging": {
            "Battery Capacity": "5000 mAh",
            "Wired Charging": "65W Wired Fast Charging"
          }
        }, null, 2),
        highlightsRaw: "Feature Specification 1\nFeature Specification 2"
      });

      this.showFormModal = true;
      if (this.dom.formVersionHistoryGroup) {
        this.dom.formVersionHistoryGroup.classList.add('is-hidden');
      }
      this.render();
    } catch (err) {
      this.showToast('Could not initialize add form. Please try again.', 'error');
    }
  }

  openEditModal(phone) {
    if (!phone) {
      this.showToast('Cannot edit: phone record is missing.', 'error');
      return;
    }

    try {
      this.formTitle = `Edit Phone: ${phone.model || 'Device'}`;
      this.populateFormFields({
        id: phone.id || '',
        brandId: phone.brandId || (this.catalogService.brands[0]?.id || 'apple'),
        seriesId: phone.seriesId || '',
        model: phone.model || '',
        tagline: phone.tagline || '',
        releaseYear: phone.releaseYear || new Date().getFullYear(),
        releaseDate: phone.releaseDate || `${phone.releaseYear || new Date().getFullYear()}-01`,
        specsRawJson: JSON.stringify(phone.specs || {}, null, 2),
        highlightsRaw: Array.isArray(phone.highlights) ? phone.highlights.join('\n') : ''
      });

      this.populateFormVersionSelect(phone.id);

      this.showFormModal = true;
      this.render();
    } catch (err) {
      this.showToast('Failed to load phone data for editing.', 'error');
    }
  }

  populateFormVersionSelect(phoneId) {
    if (!this.dom.formVersionHistoryGroup || !this.dom.formVersionSelect) return;
    const versions = this.getAuditVersionsForItem(phoneId);

    if (versions.length === 0) {
      this.dom.formVersionHistoryGroup.classList.add('is-hidden');
      this.dom.formVersionSelect.innerHTML = '';
      return;
    }

    this.dom.formVersionHistoryGroup.classList.remove('is-hidden');
    this.dom.formVersionSelect.innerHTML = versions.map(v => {
      const timeStr = new Date(v.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', month: 'short', day: 'numeric' });
      return `<option value="${v.versionId}">v${v.version} (${timeStr})</option>`;
    }).join('');
  }

  fetchSelectedAuditVersion() {
    const phoneId = this.dom.formPhoneId.value.trim();
    if (!phoneId) return;

    const versionId = this.dom.formVersionSelect.value;
    const versions = this.getAuditVersionsForItem(phoneId);
    const targetVersion = versions.find(v => v.versionId === versionId);

    if (!targetVersion || !targetVersion.snapshot) {
      this.showToast('Selected version snapshot not found.', 'error');
      return;
    }

    const snap = targetVersion.snapshot;
    this.populateFormFields({
      id: phoneId,
      brandId: snap.brandId || this.dom.formBrandId.value,
      seriesId: snap.seriesId || '',
      model: snap.model || '',
      tagline: snap.tagline || '',
      releaseYear: snap.releaseYear || new Date().getFullYear(),
      releaseDate: snap.releaseDate || '',
      specsRawJson: JSON.stringify(snap.specs || {}, null, 2),
      highlightsRaw: Array.isArray(snap.highlights) ? snap.highlights.join('\n') : ''
    });

    this.showToast(`Fetched version ${targetVersion.version} into form. You can now edit and save!`, 'success');
  }

  closeFormModal() {
    this.showFormModal = false;
    this.render();
  }

  populateFormFields(formData) {
    this.dom.formModalTitle.textContent = this.formTitle;
    this.dom.formPhoneId.value = formData.id;
    this.dom.formModel.value = formData.model;
    this.dom.formReleaseYear.value = formData.releaseYear;
    this.dom.formReleaseDate.value = formData.releaseDate;
    this.dom.formTagline.value = formData.tagline;
    this.dom.formHighlights.value = formData.highlightsRaw;
    this.dom.formSpecsJson.value = formData.specsRawJson;

    // Populate Brand select dropdown
    this.dom.formBrandId.innerHTML = this.catalogService.brands.map(b =>
      `<option value="${b.id}" ${b.id === formData.brandId ? 'selected' : ''}>${this.escapeHtml(b.name)}</option>`
    ).join('');

    // Populate Series select dropdown
    this.updateFormSeriesDropdown(formData.brandId, formData.seriesId);
  }

  updateFormSeriesDropdown(brandId, selectedSeriesId) {
    const brand = this.catalogService.brands.find(b => b.id === brandId);
    const seriesList = Array.isArray(brand?.series) ? brand.series : [];

    this.dom.formSeriesId.innerHTML = seriesList.map(s =>
      `<option value="${s.id}" ${s.id === selectedSeriesId ? 'selected' : ''}>${this.escapeHtml(s.name)}</option>`
    ).join('');
  }

  onBrandChange() {
    const selectedBrandId = this.dom.formBrandId.value;
    const brand = this.catalogService.brands.find(b => b.id === selectedBrandId);
    const defaultSeries = brand?.series?.[0]?.id || '';
    this.updateFormSeriesDropdown(selectedBrandId, defaultSeries);
  }

  formatFormSpecs() {
    try {
      const parsed = JSON.parse(this.dom.formSpecsJson.value);
      this.dom.formSpecsJson.value = JSON.stringify(parsed, null, 2);
      this.showToast('JSON formatted cleanly.', 'info');
    } catch (err) {
      this.showToast(`Cannot format: ${err.message}`, 'error');
    }
  }

  resetFormSpecsTemplate() {
    const template = {
      "Display System": {
        "Display Size": "6.7\" AMOLED 120Hz",
        "Resolution": "2778 x 1284 pixels",
        "Peak Brightness": "2500 nits",
        "Refresh Rate": "120Hz LTPO"
      },
      "Processor & Silicon": {
        "SoC": "Qualcomm Snapdragon 8 Gen 3 (4nm)",
        "CPU": "Octa-core up to 3.3GHz",
        "GPU": "Adreno 750",
        "Architecture": "64-bit"
      },
      "Memory & Storage": {
        "RAM": "12GB LPDDR5X",
        "Internal Storage": "256GB / 512GB UFS 4.0"
      },
      "Optics & Camera Architecture": {
        "Rear Main Camera": "50MP f/1.7 OIS",
        "Ultra-Wide Camera": "50MP 120 deg FOV",
        "Telephoto Camera": "50MP 3x Optical Zoom",
        "Front Selfie Camera": "32MP AF"
      },
      "Battery & Charging": {
        "Battery Capacity": "5000 mAh",
        "Wired Charging": "80W Wired Fast Charging",
        "Wireless Charging": "50W Wireless"
      },
      "Connectivity & Software": {
        "Operating System": "Android 15",
        "Network Bands": "5G SA/NSA, 4G LTE",
        "Wi-Fi & Bluetooth": "Wi-Fi 7, Bluetooth 5.4",
        "Port": "USB-C 3.2"
      }
    };
    this.dom.formSpecsJson.value = JSON.stringify(template, null, 2);
    this.showToast('Starter specifications template loaded.', 'info');
  }

  savePhone() {
    try {
      const rawModel = this.dom.formModel.value.trim();
      if (!rawModel) {
        this.showToast('Phone Model Name is required.', 'error');
        return;
      }

      let parsedSpecs = {};
      try {
        parsedSpecs = JSON.parse(this.dom.formSpecsJson.value);
        if (typeof parsedSpecs !== 'object' || parsedSpecs === null || Array.isArray(parsedSpecs)) {
          throw new Error('Specifications must be a valid JSON object mapping category names to spec details.');
        }
      } catch (err) {
        this.showToast(`Invalid JSON in Specifications: ${err.message}`, 'error');
        return;
      }

      const rawHighlights = this.dom.formHighlights.value
        .split('\n')
        .map(h => h.trim())
        .filter(Boolean);

      const phoneId = this.dom.formPhoneId.value.trim();
      const isEditing = Boolean(phoneId);

      const phoneData = {
        id: phoneId,
        brandId: this.dom.formBrandId.value,
        seriesId: this.dom.formSeriesId.value,
        model: rawModel,
        tagline: this.dom.formTagline.value.trim(),
        releaseDate: this.dom.formReleaseDate.value.trim() || `${this.dom.formReleaseYear.value || 2024}-01`,
        releaseYear: parseInt(this.dom.formReleaseYear.value, 10) || new Date().getFullYear(),
        specs: parsedSpecs,
        highlights: rawHighlights
      };

      let savedRecord = null;
      if (isEditing) {
        // Capture snapshot of original state before updating for robust versioning & undo
        const previousPhoneState = this.catalogService.getPhoneById(phoneId);
        if (previousPhoneState) {
          this.recordAuditVersion(phoneId, previousPhoneState);
        }

        savedRecord = this.catalogService.updatePhone(phoneData);
        this.showToast(`Updated specs for "${savedRecord.model}". Version saved to audit trail.`, 'success');
        if (this.activePhone && this.activePhone.id === savedRecord.id) {
          this.activePhone = savedRecord;
        }
      } else {
        savedRecord = this.catalogService.addPhone(phoneData);
        this.showToast(`Added new phone "${savedRecord.model}"`, 'success');
      }

      this.persistToLocalStorage();
      this.closeFormModal();
    } catch (err) {
      this.showToast(`Failed to save record: ${err.message}`, 'error');
    }
  }

  persistAuditData() {
    try {
      this.auditData.lastUpdated = new Date().toISOString();
      localStorage.setItem(AUDIT_STORAGE_KEY, JSON.stringify(this.auditData));
    } catch (e) {
      // Storage quota safety
    }
  }

  recordAuditVersion(phoneId, phoneRecord) {
    if (!phoneId || !phoneRecord) return;
    if (!this.auditData.items[phoneId]) {
      this.auditData.items[phoneId] = {
        model: phoneRecord.model,
        brandId: phoneRecord.brandId,
        currentVersion: 0,
        versions: []
      };
    }

    const itemMeta = this.auditData.items[phoneId];
    itemMeta.model = phoneRecord.model;
    itemMeta.brandId = phoneRecord.brandId;
    itemMeta.currentVersion += 1;

    // Clean snapshot without runtime cached search buffers
    const snapshot = {
      id: phoneRecord.id,
      brandId: phoneRecord.brandId,
      brandName: phoneRecord.brandName,
      seriesId: phoneRecord.seriesId || '',
      seriesName: phoneRecord.seriesName || '',
      model: phoneRecord.model,
      tagline: phoneRecord.tagline || '',
      releaseDate: phoneRecord.releaseDate || '',
      releaseYear: phoneRecord.releaseYear,
      specs: JSON.parse(JSON.stringify(phoneRecord.specs || {})),
      highlights: Array.isArray(phoneRecord.highlights) ? [...phoneRecord.highlights] : []
    };

    const newVersionEntry = {
      version: itemMeta.currentVersion,
      versionId: `v${itemMeta.currentVersion}-${Date.now().toString().slice(-6)}`,
      timestamp: new Date().toISOString(),
      snapshot: snapshot
    };

    // Prepend latest update and maintain strictly 5 recent updates
    itemMeta.versions.unshift(newVersionEntry);
    if (itemMeta.versions.length > MAX_ITEM_VERSIONS) {
      itemMeta.versions = itemMeta.versions.slice(0, MAX_ITEM_VERSIONS);
    }

    this.persistAuditData();
  }

  getAuditVersionsForItem(phoneId) {
    if (!phoneId || !this.auditData.items[phoneId]) return [];
    return this.auditData.items[phoneId].versions || [];
  }

  hasItemUndo(phoneId) {
    return this.getAuditVersionsForItem(phoneId).length > 0;
  }

  getItemUndoCount(phoneId) {
    return this.getAuditVersionsForItem(phoneId).length;
  }

  undoItemEdit(phoneId) {
    if (!phoneId || !this.hasItemUndo(phoneId)) {
      this.showToast('No previous audit version found for this phone.', 'info');
      return;
    }

    try {
      const versions = this.getAuditVersionsForItem(phoneId);
      // Remove latest version snapshot and restore it
      const restoredVersion = versions.shift();
      this.persistAuditData();

      // Restore snapshot directly in CatalogService
      const restored = this.catalogService.setPhone(restoredVersion.snapshot);

      if (this.activePhone && this.activePhone.id === phoneId) {
        this.activePhone = restored;
      }

      this.persistToLocalStorage();
      this.showToast(`Restored version ${restoredVersion.version} for "${restored.model}"!`, 'success');
      this.render();
    } catch (err) {
      this.showToast(`Failed to undo edit: ${err.message}`, 'error');
    }
  }

  deletePhone(phoneId) {
    if (!phoneId) return;

    try {
      const phone = this.catalogService.getPhoneById(phoneId);
      const name = phone ? phone.model : phoneId;

      if (!confirm(`Are you sure you want to delete "${name}"?`)) return;

      this.catalogService.deletePhone(phoneId);
      this.compareList = this.compareList.filter(p => p.id !== phoneId);

      if (this.auditData.items[phoneId]) {
        delete this.auditData.items[phoneId];
        this.persistAuditData();
      }

      if (this.activePhone && this.activePhone.id === phoneId) {
        this.closeDetails();
      }

      this.persistToLocalStorage();
      this.showToast(`Deleted phone "${name}".`, 'info');
      this.render();
    } catch (err) {
      this.showToast('Failed to delete phone record.', 'error');
    }
  }

  persistToLocalStorage() {
    try {
      const payload = this.catalogService.getCleanExportPayload();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch (err) {
      if (err.name === 'QuotaExceededError') {
        this.showToast('Storage quota exceeded. Please export JSON and clear browser storage.', 'error');
      }
    }
  }

  exportCatalogJson() {
    try {
      const payload = this.catalogService.getCleanExportPayload();
      const jsonString = JSON.stringify(payload, null, 2);
      const blob = new Blob([jsonString], { type: 'application/json' });
      const url = URL.createObjectURL(blob);

      const downloadAnchor = document.createElement('a');
      downloadAnchor.href = url;
      downloadAnchor.download = 'catalog.json';
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
      URL.revokeObjectURL(url);

      this.showToast('catalog.json exported! Save it to your data/catalog.json file to persist in repo.', 'success');
    } catch (err) {
      this.showToast('Failed to export catalog JSON file.', 'error');
    }
  }

  exportAuditJson() {
    try {
      this.auditData.lastUpdated = new Date().toISOString();
      const jsonString = JSON.stringify(this.auditData, null, 2);
      const blob = new Blob([jsonString], { type: 'application/json' });
      const url = URL.createObjectURL(blob);

      const downloadAnchor = document.createElement('a');
      downloadAnchor.href = url;
      downloadAnchor.download = 'audit.json';
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
      URL.revokeObjectURL(url);

      this.showToast('audit.json exported! Save it to data/audit.json to track versioned history in repo.', 'success');
    } catch (err) {
      this.showToast('Failed to export audit.json file.', 'error');
    }
  }

  resetToDisk() {
    try {
      if (confirm('Reset catalog and audit history back to pristine disk files? This clears local browser edits.')) {
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(AUDIT_STORAGE_KEY);
        window.location.reload();
      }
    } catch (err) {
      window.location.reload();
    }
  }

  showToast(message, type = 'info') {
    const id = Date.now() + Math.random();
    this.toasts.push({ id, message, type });
    this.renderToasts();

    setTimeout(() => {
      this.toasts = this.toasts.filter(t => t.id !== id);
      this.renderToasts();
    }, 4000);
  }

  escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  getSpecValue(phone, category, key) {
    return phone?.specs?.[category]?.[key] || '—';
  }

  // ==========================================
  // PURE NATIVE DOM RENDERING
  // ==========================================
  render() {
    // 1. Modal Open Body Scroll Lock
    if (this.isAnyModalOpen) {
      this.dom.body.classList.add('modal-open');
    } else {
      this.dom.body.classList.remove('modal-open');
    }

    // 2. Admin Header Controls & Banner
    if (this.adminMode) {
      this.dom.btnAdminToggle.classList.add('admin-active');
      this.dom.btnAdminText.textContent = 'Admin Active';
      this.dom.adminBanner.classList.remove('is-hidden');
    } else {
      this.dom.btnAdminToggle.classList.remove('admin-active');
      this.dom.btnAdminText.textContent = 'Admin Access';
      this.dom.adminBanner.classList.add('is-hidden');
    }

    // 3. Search Controls
    const hasSearch = Boolean(this.searchQuery && this.searchQuery.trim() !== '');
    if (hasSearch) {
      this.dom.searchIconWrap.classList.add('is-hidden');
      this.dom.searchClearInner.classList.remove('is-hidden');
      this.dom.searchInput.classList.add('has-query');
    } else {
      this.dom.searchIconWrap.classList.remove('is-hidden');
      this.dom.searchClearInner.classList.add('is-hidden');
      this.dom.searchInput.classList.remove('has-query');
    }

    // 4. Query filtered phones via CatalogService
    const filteredPhones = this.catalogService.filterAndSortPhones({
      brandId: this.selectedBrand,
      seriesId: this.selectedSeries,
      searchQuery: this.searchQuery,
      catalogSortBy: this.catalogSortBy,
      searchSortBy: this.searchSortBy
    });

    // 5. Header Compare Button
    if (this.compareList.length > 0) {
      this.dom.headerCompareBtn.classList.remove('is-hidden');
      this.dom.headerCompareBadge.textContent = this.compareList.length;
    } else {
      this.dom.headerCompareBtn.classList.add('is-hidden');
    }

    // 6. Sort Select states
    this.dom.searchSortSelect.disabled = filteredPhones.length === 0;
    this.dom.searchSortSelect.value = this.searchSortBy;
    this.dom.catalogSortSelect.disabled = filteredPhones.length === 0;
    this.dom.catalogSortSelect.value = this.catalogSortBy;

    if (hasSearch) {
      this.dom.catalogSortGroup.classList.add('is-hidden');
    } else {
      this.dom.catalogSortGroup.classList.remove('is-hidden');
    }

    // 7. Render Brand Pills
    this.renderBrandPills();

    // 8. Render Series Pills
    this.renderSeriesPills();

    // 9. Render Catalog Heading
    this.renderCatalogHeading();

    // 10. Render Items Grid or Empty State
    this.renderItemsGrid(filteredPhones);

    // 11. Render Compare Drawer Bar
    this.renderCompareDrawer();

    // 12. Render Compare Modal
    this.renderCompareModal();

    // 13. Render Details Modal
    this.renderDetailsModal();

    // 14. Render Form Modal Visibility
    if (this.showFormModal) {
      this.dom.formModal.classList.remove('is-hidden');
    } else {
      this.dom.formModal.classList.add('is-hidden');
    }

    // 15. Render Toasts
    this.renderToasts();
  }

  renderBrandPills() {
    let html = `
      <button class="circle-brand-pill ${this.selectedBrand === 'all' ? 'active' : ''}" data-brand-id="all">
        All
      </button>
    `;

    this.catalogService.brands.forEach(brand => {
      const activeClass = this.selectedBrand === brand.id ? 'active' : '';
      html += `
        <button class="circle-brand-pill ${activeClass}" data-brand-id="${brand.id}">
          ${this.escapeHtml(brand.name)}
        </button>
      `;
    });

    this.dom.brandsContainer.innerHTML = html;

    // Attach click listeners
    const buttons = this.dom.brandsContainer.querySelectorAll('.circle-brand-pill');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const bId = btn.getAttribute('data-brand-id');
        this.selectBrand(bId, 'all');
      });
    });
  }

  renderSeriesPills() {
    const activeSeriesList = this.catalogService.getActiveSeriesList(this.selectedBrand);

    if (this.selectedBrand !== 'all' && activeSeriesList.length > 1) {
      this.dom.seriesContainer.classList.remove('is-hidden');
      let html = `
        <button class="filter-pill ${this.selectedSeries === 'all' ? 'active' : ''}" data-series-id="all">
          All Series
        </button>
      `;

      activeSeriesList.forEach(s => {
        const activeClass = this.selectedSeries === s.id ? 'active' : '';
        html += `
          <button class="filter-pill ${activeClass}" data-series-id="${s.id}">
            ${this.escapeHtml(s.name)}
          </button>
        `;
      });

      this.dom.seriesContainer.innerHTML = html;

      const buttons = this.dom.seriesContainer.querySelectorAll('.filter-pill');
      buttons.forEach(btn => {
        btn.addEventListener('click', () => {
          const sId = btn.getAttribute('data-series-id');
          this.selectSeries(sId);
        });
      });
    } else {
      this.dom.seriesContainer.classList.add('is-hidden');
      this.dom.seriesContainer.innerHTML = '';
    }
  }

  renderCatalogHeading() {
    const hasSearch = Boolean(this.searchQuery && this.searchQuery.trim() !== '');

    if (hasSearch) {
      this.dom.catalogHeadingTitle.innerHTML = `
        <span class="search-results-heading-wrap">
          <span>Search Results for "<span class="brand-title-accent">${this.escapeHtml(this.searchQuery.trim())}</span>"</span>
          <button id="btn-search-heading-clear" class="btn-search-clear-badge" title="Clear search">✕ Clear Search</button>
        </span>
      `;
      const clearBtn = document.getElementById('btn-search-heading-clear');
      if (clearBtn) {
        clearBtn.addEventListener('click', () => {
          this.dom.searchInput.value = '';
          this.searchQuery = '';
          this.render();
        });
      }
    } else {
      const brandObj = this.catalogService.brands.find(b => b.id === this.selectedBrand);
      const brandTitle = this.selectedBrand === 'all' ? 'All Mobile Models' : (brandObj ? brandObj.name : 'Mobile Models');
      const activeSeriesList = this.catalogService.getActiveSeriesList(this.selectedBrand);
      const activeSeries = activeSeriesList.find(s => s.id === this.selectedSeries);
      const seriesTitle = (this.selectedSeries !== 'all' && activeSeries) ? ` › ${activeSeries.name}` : '';

      this.dom.catalogHeadingTitle.innerHTML = `
        <span>${this.escapeHtml(brandTitle)}${this.escapeHtml(seriesTitle)}</span>
      `;
    }
  }

  renderItemsGrid(phones) {
    if (phones.length === 0) {
      this.dom.itemsGrid.innerHTML = '';
      this.dom.emptyState.classList.remove('is-hidden');
      return;
    }

    this.dom.emptyState.classList.add('is-hidden');

    let html = '';
    phones.forEach(phone => {
      const inCompare = this.isInCompare(phone.id);
      const compareBtnClass = inCompare ? 'in-compare' : '';
      const compareBtnText = inCompare ? '✓ In Compare' : '+ Compare';
      const displaySize = phone.specs?.['Display System']?.['Display Size'] || '';

      html += `
        <div class="phone-banner-card" data-phone-id="${phone.id}">
          <div class="banner-top-row">
            <span class="banner-brand-pill">${this.escapeHtml(phone.brandName)}</span>
          </div>

          <div class="banner-model-row">
            <h3 class="banner-model-title">${this.escapeHtml(phone.model)}</h3>
            ${phone.releaseYear ? `<span class="banner-year-pill">${phone.releaseYear}</span>` : ''}
          </div>

          <div class="card-table-wrapper">
            <table class="card-specs-table">
              <tbody>
                <tr>
                  <th class="c-key">CPU</th>
                  <td class="c-val" title="${this.escapeHtml(phone.cardSpecs?.cpu || '—')}">${this.escapeHtml(phone.cardSpecs?.cpu || '—')}</td>
                </tr>
                <tr>
                  <th class="c-key">GPU</th>
                  <td class="c-val" title="${this.escapeHtml(phone.cardSpecs?.gpu || '—')}">${this.escapeHtml(phone.cardSpecs?.gpu || '—')}</td>
                </tr>
                <tr>
                  <th class="c-key">Bit</th>
                  <td class="c-val">${this.escapeHtml(phone.cardSpecs?.bit || '64-bit')}</td>
                </tr>
                <tr>
                  <th class="c-key">RAM</th>
                  <td class="c-val">${this.escapeHtml(phone.cardSpecs?.ram || '—')}</td>
                </tr>
                <tr>
                  <th class="c-key">Storage</th>
                  <td class="c-val">${this.escapeHtml(phone.cardSpecs?.storage || '—')}</td>
                </tr>
                <tr>
                  <th class="c-key">Display</th>
                  <td class="c-val" title="${this.escapeHtml(displaySize)}">${this.escapeHtml(phone.cardSpecs?.display || '—')}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="banner-bottom-row">
            <span class="btn-banner-view">Full Specs →</span>
            <button class="btn-banner-compare ${compareBtnClass}" data-action="compare" data-phone-id="${phone.id}">
              ${compareBtnText}
            </button>
          </div>

          <div class="item-card-admin-bar ${this.adminMode ? '' : 'is-hidden'}" data-admin-bar="true">
            <button class="btn-card-edit" data-action="edit" data-phone-id="${phone.id}">Edit</button>
            ${this.hasItemUndo(phone.id) ? `<button class="btn-card-undo" data-action="undo" data-phone-id="${phone.id}" title="Undo last edit for this phone (${this.getItemUndoCount(phone.id)} available)">↶ Undo</button>` : ''}
            <button class="btn-card-delete" data-action="delete" data-phone-id="${phone.id}">Delete</button>
          </div>
        </div>
      `;
    });

    this.dom.itemsGrid.innerHTML = html;

    // Delegate clicks on cards
    const cards = this.dom.itemsGrid.querySelectorAll('.phone-banner-card');
    cards.forEach(card => {
      card.addEventListener('click', (e) => {
        const phoneId = card.getAttribute('data-phone-id');
        const phone = this.catalogService.getPhoneById(phoneId);

        // Check if an action button was clicked
        const compareBtn = e.target.closest('[data-action="compare"]');
        if (compareBtn) {
          e.stopPropagation();
          this.toggleCompare(phone);
          return;
        }

        const editBtn = e.target.closest('[data-action="edit"]');
        if (editBtn) {
          e.stopPropagation();
          this.openEditModal(phone);
          return;
        }

        const undoBtn = e.target.closest('[data-action="undo"]');
        if (undoBtn) {
          e.stopPropagation();
          this.undoItemEdit(phoneId);
          return;
        }

        const deleteBtn = e.target.closest('[data-action="delete"]');
        if (deleteBtn) {
          e.stopPropagation();
          this.deletePhone(phoneId);
          return;
        }

        if (e.target.closest('[data-admin-bar]')) {
          e.stopPropagation();
          return;
        }

        if (phone) {
          this.openDetails(phone);
        }
      });
    });
  }

  renderCompareDrawer() {
    if (this.compareList.length > 0) {
      this.dom.compareDrawer.classList.remove('is-hidden');
      this.dom.compareDrawerCount.textContent = this.compareList.length;

      let html = '';
      this.compareList.forEach(p => {
        html += `
          <div class="compare-chip">
            <span>${this.escapeHtml(p.model)}</span>
            <span class="compare-chip-remove" data-remove-id="${p.id}" title="Remove">✕</span>
          </div>
        `;
      });

      this.dom.compareChipsContainer.innerHTML = html;

      const removeButtons = this.dom.compareChipsContainer.querySelectorAll('.compare-chip-remove');
      removeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          const pId = btn.getAttribute('data-remove-id');
          this.removeCompare(pId);
        });
      });
    } else {
      this.dom.compareDrawer.classList.add('is-hidden');
      this.dom.compareChipsContainer.innerHTML = '';
    }
  }

  renderCompareModal() {
    if (!this.showCompareModal) {
      this.dom.compareModal.classList.add('is-hidden');
      this.dom.compareTableContainer.innerHTML = '';
      return;
    }

    this.dom.compareModal.classList.remove('is-hidden');

    let theadCells = `
      <th class="compare-corner-header">
        <span class="compare-param-corner-badge">Specs</span>
      </th>
    `;

    this.compareList.forEach(phone => {
      theadCells += `
        <td class="compare-model-header-cell">
          <div class="compare-header-card">
            <button class="compare-remove-btn" data-remove-compare="${phone.id}" title="Remove phone">✕ Remove</button>
            <span class="banner-brand-pill">${this.escapeHtml(phone.brandName)}</span>
            <h4 class="compare-model-name">${this.escapeHtml(phone.model)}</h4>
            ${phone.releaseYear ? `<span class="compare-year-chip">${phone.releaseYear}</span>` : ''}
          </div>
        </td>
      `;
    });

    const rows = [
      {
        label: 'Processor & Silicon',
        valFn: (p) => this.getSpecValue(p, 'Processor & Silicon', 'SoC')
      },
      {
        label: 'Display & Refresh Rate',
        valFn: (p) => `${this.getSpecValue(p, 'Display System', 'Display Size')} • ${this.getSpecValue(p, 'Display System', 'Refresh Rate')}`
      },
      {
        label: 'Peak Brightness',
        valFn: (p) => this.getSpecValue(p, 'Display System', 'Peak Brightness')
      },
      {
        label: 'Primary Rear Camera',
        valFn: (p) => this.getSpecValue(p, 'Optics & Camera Architecture', 'Rear Main Camera')
      },
      {
        label: 'Telephoto / Zoom',
        valFn: (p) => this.getSpecValue(p, 'Optics & Camera Architecture', 'Periscope Telephoto') || this.getSpecValue(p, 'Optics & Camera Architecture', 'Telephoto Camera') || 'Standard Digital Zoom'
      },
      {
        label: 'Battery & Charging',
        valFn: (p) => `${this.getSpecValue(p, 'Battery & Charging', 'Battery Capacity')} • ${this.getSpecValue(p, 'Battery & Charging', 'Wired Charging')}`
      },
      {
        label: 'Build Materials',
        valFn: (p) => `${this.getSpecValue(p, 'Design & Dimensions', 'Materials')} • ${this.getSpecValue(p, 'Design & Dimensions', 'Protection')}`
      },
      {
        label: 'Operating System',
        valFn: (p) => this.getSpecValue(p, 'Connectivity & Software', 'Operating System')
      }
    ];

    let tbodyRows = '';
    rows.forEach(r => {
      tbodyRows += `<tr><th>${this.escapeHtml(r.label)}</th>`;
      this.compareList.forEach(p => {
        tbodyRows += `<td>${this.escapeHtml(r.valFn(p))}</td>`;
      });
      tbodyRows += '</tr>';
    });

    this.dom.compareTableContainer.innerHTML = `
      <table class="compare-table">
        <thead>
          <tr>${theadCells}</tr>
        </thead>
        <tbody>
          ${tbodyRows}
        </tbody>
      </table>
    `;

    const removeBtns = this.dom.compareTableContainer.querySelectorAll('[data-remove-compare]');
    removeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-remove-compare');
        this.removeCompare(id);
      });
    });
  }

  renderDetailsModal() {
    if (!this.showDetailsModal || !this.activePhone) {
      this.dom.detailsModal.classList.add('is-hidden');
      this.dom.detailsBodyContent.innerHTML = '';
      return;
    }

    this.dom.detailsModal.classList.remove('is-hidden');
    const phone = this.activePhone;

    this.dom.detailsBrandBadge.textContent = phone.brandName || '';
    this.dom.detailsModelTitle.textContent = phone.model || '';

    const inCompare = this.isInCompare(phone.id);
    const compareBtnClass = inCompare ? 'in-compare' : '';
    const compareBtnText = inCompare ? '✓ In Comparison Drawer' : '+ Add to Comparison';
    const releaseText = phone.releaseDate || phone.releaseYear || '';

    let highlightsHtml = '';
    if (Array.isArray(phone.highlights) && phone.highlights.length > 0) {
      const pills = phone.highlights.map(h => `<div class="highlight-pill-subtle">${this.escapeHtml(h)}</div>`).join('');
      highlightsHtml = `
        <div>
          <h4 class="specs-section-title">Key Architectural Highlights</h4>
          <div class="highlights-list">
            ${pills}
          </div>
        </div>
      `;
    }

    let specsHtml = '';
    if (phone.specs && typeof phone.specs === 'object') {
      let groups = '';
      Object.entries(phone.specs).forEach(([groupName, groupObj]) => {
        let paramRows = '';
        if (groupObj && typeof groupObj === 'object') {
          Object.entries(groupObj).forEach(([param, val]) => {
            paramRows += `
              <tr>
                <td class="spec-param">${this.escapeHtml(param)}</td>
                <td class="spec-val">${this.escapeHtml(String(val))}</td>
              </tr>
            `;
          });
        }
        groups += `
          <div class="modern-spec-group">
            <div class="modern-spec-header">
              <span class="spec-header-bullet"></span>
              <span class="spec-header-text">${this.escapeHtml(groupName)}</span>
            </div>
            <table class="specs-table">
              <tbody>
                ${paramRows}
              </tbody>
            </table>
          </div>
        `;
      });

      specsHtml = `
        <div>
          <h4 class="specs-section-title">Detailed Hardware Specifications</h4>
          ${groups}
        </div>
      `;
    }

    this.dom.detailsBodyContent.innerHTML = `
      <div class="details-model-overview-card">
        <div class="overview-tags-row">
          ${phone.seriesName ? `<span class="overview-series-tag">${this.escapeHtml(phone.seriesName)}</span>` : ''}
          ${releaseText ? `<span class="overview-year-badge">Release: ${this.escapeHtml(releaseText)}</span>` : ''}
        </div>

        <p class="details-overview-tagline">${this.escapeHtml(phone.tagline || '')}</p>

        <div class="overview-actions-row">
          <button id="btn-modal-compare-toggle" class="btn-modal-compare ${compareBtnClass}">
            ${compareBtnText}
          </button>
          ${this.adminMode ? `
            <button id="btn-modal-edit" class="btn-modal-edit" title="Edit specifications">
              ✏ Edit Phone
            </button>
            ${this.hasItemUndo(phone.id) ? `
              <button id="btn-modal-undo" class="btn-modal-undo" title="Undo last edit for this phone (${this.getItemUndoCount(phone.id)} available)">
                ↶ Undo Edit (${this.getItemUndoCount(phone.id)})
              </button>
            ` : ''}
          ` : ''}
        </div>
      </div>

      ${highlightsHtml}
      ${specsHtml}
    `;

    const compareBtn = document.getElementById('btn-modal-compare-toggle');
    if (compareBtn) {
      compareBtn.addEventListener('click', () => {
        this.toggleCompare(phone);
      });
    }

    const editBtn = document.getElementById('btn-modal-edit');
    if (editBtn) {
      editBtn.addEventListener('click', () => {
        this.openEditModal(phone);
      });
    }

    const undoBtn = document.getElementById('btn-modal-undo');
    if (undoBtn) {
      undoBtn.addEventListener('click', () => {
        this.undoItemEdit(phone.id);
      });
    }
  }

  renderToasts() {
    this.dom.toastContainer.innerHTML = this.toasts.map(t =>
      `<div class="toast toast-${t.type}"><span>${this.escapeHtml(t.message)}</span></div>`
    ).join('');
  }
}

// Instantiate and initialize when DOM is ready
window.addEventListener('DOMContentLoaded', () => {
  window.phoneSpecsApp = new PhoneSpecsApp();
  window.phoneSpecsApp.init();
});

