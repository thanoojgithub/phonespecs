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
                                  ]
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
                                  ]
                   },
                   {
                       "id":  "huawei",
                       "name":  "Huawei",
                       "series":  [
                                      {
                                          "id":  "pura-series",
                                          "name":  "Pura Series"
                                      }
                                  ]
                   },
                   {
                       "id":  "motorola",
                       "name":  "Motorola",
                       "series":  [
                                      {
                                          "id":  "razr-series",
                                          "name":  "Razr Series"
                                      }
                                  ]
                   },
                   {
                       "id":  "nothing",
                       "name":  "Nothing",
                       "series":  [
                                      {
                                          "id":  "phone-series",
                                          "name":  "Phone Series"
                                      }
                                  ]
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
                                  ]
                   },
                   {
                       "id":  "oppo",
                       "name":  "Oppo",
                       "series":  [
                                      {
                                          "id":  "find-x",
                                          "name":  "Find X Series"
                                      }
                                  ]
                   },
                   {
                       "id":  "realme",
                       "name":  "Realme",
                       "series":  [
                                      {
                                          "id":  "gt-series",
                                          "name":  "GT Series"
                                      }
                                  ]
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
                                  ]
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
                                  ]
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
                                                                               "Ultra-Wide Camera":  "48MP Ultra-Wide, 13mm, f/2.2, 120° FOV, Hybrid Focus Pixels, Macro mode",
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
                                                                               "Ultra-Wide Camera":  "48MP Ultra-Wide, 13mm, f/2.2, 120° FOV, Hybrid Focus Pixels, Macro mode",
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
                                                                               "Ultra-Wide Camera":  "12MP Ultra-Wide, 1/2.55\", f/2.2, 13mm, 120° FOV, Dual Pixel PDAF, Super Steady",
                                                                               "Telephoto 1":  "10MP 3x Optical Telephoto, f/2.4, 67mm, Dual Pixel PDAF, OIS",
                                                                               "Periscope Telephoto 2":  "50MP 5x Optical Periscope (10x Optical Quality), f/3.4, 111mm, PDAF, OIS",
                                                                               "Optical Zoom":  "3x and 5x optical zoom, 100x Space Zoom with AI Super Resolution",
                                                                               "Video Capability":  "8K at 24/30fps, 4K at 30/60/120fps, 1080p at 240fps, HDR10+, stereo audio",
                                                                               "Front Selfie Camera":  "12MP Dual Pixel PDAF, f/2.2, 26mm, 4K video recording up to 60fps"
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
                                                                               "Ultra-Wide Camera":  "48MP Quad PD Ultra-Wide with Macro Focus, 1/2.55\", f/1.7, 123° FOV",
                                                                               "Periscope Telephoto":  "48MP Quad PD 5x Optical Periscope Telephoto, f/2.8, 110mm, OIS, Super Res Zoom 30x",
                                                                               "Video Capability":  "8K video with Video Boost AI at 30fps, 4K at 24/30/60fps, Night Sight Video",
                                                                               "Front Selfie Camera":  "42MP Dual PD Ultra-Wide with autofocus, f/2.2, 103° ultrawide FOV, 4K60"
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
                                                            "Features":  "Under-Display Camera on inner panel, S-Pen Fold Edition digitizer layer, HDR10+"
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
                                                                               "Ultra-Wide Camera":  "12MP Ultra-Wide, f/2.2, 12mm, 123° FOV",
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
                                                                          "Special Hardware":  "Dual-rail zero-gap hinge tested for 200,000+ folds, S-Pen stylus support"
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
                                                                      "GPU":  "Adreno 750 with Dual Cryo-velocity Vapor Chamber (9140mm² heat dissipation)",
                                                                      "NPU":  "Qualcomm AI Engine with 98% faster generative text and image rendering"
                                                                  },
                                     "Memory \u0026 Storage":  {
                                                                   "RAM":  "12GB / 16GB LPDDR5X",
                                                                   "Internal Storage":  "256GB / 512GB UFS 4.0 flash",
                                                                   "Card Slot":  "No expandable storage"
                                                               },
                                     "Optics \u0026 Camera Architecture":  {
                                                                               "Rear Main Camera":  "50MP Sony LYT-808 Dual-layer Transistor Pixel sensor, 1/1.4\", f/1.6, 23mm, OIS",
                                                                               "Ultra-Wide Camera":  "48MP Sony IMX581, 1/2.0\", f/2.2, 14mm, 114° FOV, 3.5cm Macro mode",
                                                                               "Periscope Telephoto":  "64MP OmniVision OV64B 3x Optical Periscope, 1/2.0\", f/2.6, 70mm, OIS, 120x digital",
                                                                               "Color Calibration":  "4th Generation Hasselblad Camera for Mobile Natural Color Solution",
                                                                               "Front Selfie Camera":  "32MP Sony IMX615, f/2.4, 21mm, 4K30 video recording"
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
                                                            "Features":  "Dolby Vision, HDR10+, 1920Hz PWM dimming, TÃœV Rheinland eye comfort certified"
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
                                                                               "Ultra-Wide Camera":  "50MP Sony IMX858, f/1.8, 12mm, 122° FOV, 5cm macro shooting",
                                                                               "Floating Telephoto":  "50MP Sony IMX858 3.2x Optical, f/1.8, 75mm, OIS, 10cm telephoto macro",
                                                                               "Periscope Telephoto":  "50MP Sony IMX858 5x Optical Periscope, f/2.5, 120mm, OIS, 30cm telephoto macro",
                                                                               "Optical Lenses":  "Leica VARIO-SUMMILUX 1:1.63-2.5/12-120 ASPH with multi-layer ALD coating",
                                                                               "Video Capability":  "8K video recording at 30fps on ALL 4 rear cameras, 4K at 120fps on main camera",
                                                                               "Front Selfie Camera":  "32MP in-display selfie camera, f/2.0, 4K60 video"
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
                                                                               "Ultra-Wide Camera":  "12MP Exmor RS (16mm, f/2.2, 1/2.5-inch, 123° FOV, AF)",
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
                                                                               "Ultra-Wide Camera":  "50MP (1/2.0-inch sensor, 14mm, f/2.2, 116° FOV, AF)",
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
                                                                               "Ultra-Wide Camera":  "50MP Sony LYT-600 (14mm, f/2.0, 123° FOV, 4cm macro focus, PDAF)",
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
                                                                               "Ultra-Wide Camera":  "50MP Samsung JN1 (1/2.76-inch sensor, 14mm, f/2.2, 114° FOV, 4cm Macro mode)",
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
                                                                               "Rear Main Camera":  "50MP (1/1.95-inch sensor, 24mm, f/1.7, 0.8µm, OIS, Instant All-Pixel Focus)",
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
                                                                               "Ultra-Wide Camera":  "13MP free-form lens (12.7mm, f/2.2, 120° FOV)",
                                                                               "Telephoto Camera":  "32MP (f/2.4, OIS, 3x optical zoom, 30x HyperClarity zoom)",
                                                                               "Optical Zoom":  "3x optical zoom; up to 30x digital zoom",
                                                                               "Video Capability":  "8K UHD at 24 fps, 4K at 60 fps with Super HyperSteady gimbal stabilization",
                                                                               "Front Selfie Camera":  "32MP RGBW sensor with 90° wide field of view"
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
                                                            "Features":  "4320Hz ultra-high frequency PWM dimming, Dolby Vision, TÃœV Rheinland Circadian Friendly certified"
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
                                                                               "Ultra-Wide Camera":  "50MP (1/2.88-inch sensor, 13mm, f/2.0, 122° FOV, 2.5cm macro focus, AF)",
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
                                                                               "Ultra-Wide Camera":  "8MP Sony IMX355 (16mm, f/2.2, 112° FOV)",
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
                                                                          "Special Hardware":  "Iceberg dual-vapor chamber cooling system with 10,014 mm² cooling area"
                                                                      }
                                 },
                       "highlights":  [
                                          "World\u0027s brightest smartphone screen reaching an unprecedented 6000-nit local peak brightness",
                                          "Flagship 50MP Sony LYT-808 primary sensor with OIS paired with dedicated 50MP portrait telephoto",
                                          "Blazing 120W SUPERVOOC charging replenishing 50% of the massive 5500mAh battery in only 10 minutes",
                                          "Flagship-tier 10,014 mm² Iceberg Vapor Chamber delivering sustained gaming thermal stability"
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
                                                                               "Ultra-Wide Camera":  "12MP Ultra-Wide (13mm, f/2.2, 120° FOV, Autofocus, Macro photography)",
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
                                                                               "Ultra-Wide Camera":  "12MP (13mm, f/2.2, 120° FOV)",
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
                                                                               "Rear Main Camera":  "50MP Octa PD (1/1.31-inch sensor, 25mm, f/1.68, 1.2µm, OIS \u0026 EIS)",
                                                                               "Ultra-Wide Camera":  "48MP Quad PD with Macro Focus (1/2.55-inch sensor, 123° FOV, f/1.7)",
                                                                               "Telephoto Camera":  "Super Res Zoom up to 8x with 2x optical-grade in-sensor crop",
                                                                               "Optical Zoom":  "2x lossless sensor crop, up to 8x Super Res digital zoom",
                                                                               "Video Capability":  "4K 60 fps, Audio Magic Eraser, Cinematic Blur, Night Sight Video",
                                                                               "Front Selfie Camera":  "10.5MP Dual PD, f/2.2, autofocus, 95° ultrawide FOV"
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
                                                                               "Ultra-Wide Camera":  "48MP (1/2-inch sensor, 14mm, f/2.2, 114° FOV, 3.5cm macro focus, AF)",
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
                                                                               "Ultra-Wide Camera":  "50MP (1/2.76-inch, 14mm, f/2.2, 115° FOV)",
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

document.addEventListener('alpine:init', () => {
  Alpine.data('phoneCatalog', () => ({
    brands: [],
    phones: [],
    
    selectedBrand: 'all',
    selectedSeries: 'all',
    searchQuery: '',
    searchSortBy: 'name-asc',
    catalogSortBy: 'name-asc',
    
    activePhone: null,
    showDetailsModal: false,
    
    compareList: [],
    showCompareModal: false,
    
    adminMode: false,
    showFormModal: false,
    formTitle: '',
    formData: {
      id: '',
      brandId: 'apple',
      seriesId: '',
      model: '',
      tagline: '',
      releaseYear: 2024,
      releaseDate: '2024-09',
      specsRawJson: '',
      highlightsRaw: ''
    },
    
    toasts: [],

    async init() {
      if (sessionStorage.getItem(ADMIN_PASS_KEY) === 'true') {
        this.adminMode = true;
      }

      await this.loadCatalogData();
      this.handleHashRoute();

      window.addEventListener('hashchange', () => this.handleHashRoute());

      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          this.showDetailsModal = false;
          this.showCompareModal = false;
          this.showFormModal = false;
        }
      });
    },

    /**
     * Pure GET call loading JSON content from file.
     * Pre-indexes search tokens & card specs at ingestion time so rendering and typing are 100% instantaneous.
     */
    async loadCatalogData() {
      try {
        const cached = localStorage.getItem(STORAGE_KEY);
        let rawBrands = [];
        let rawPhones = [];

        if (cached) {
          const parsed = JSON.parse(cached);
          rawBrands = parsed.brands || [];
          rawPhones = parsed.phones || [];
        } else {
          // Pure GET API HTTP fetch to static JSON file
          const res = await fetch('./data/catalog.json');
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          const data = await res.json();
          rawBrands = data.brands || [];
          rawPhones = data.phones || [];
        }

        // Sort brand pills in clean A-Z alphabetical order
        rawBrands.sort((a, b) => (a.name || '').localeCompare(b.name || '', undefined, { sensitivity: 'base' }));

        this.brands = Object.freeze(rawBrands);
        this.phones = Object.freeze(this.processPhonesData(rawPhones));
      } catch (err) {
        // Fallback allows instant opening directly via double-click on index.html
        const fallbackBrands = [...DEFAULT_CATALOG_DATA.brands].sort((a, b) => (a.name || '').localeCompare(b.name || '', undefined, { sensitivity: 'base' }));
        this.brands = Object.freeze(fallbackBrands);
        this.phones = Object.freeze(this.processPhonesData(DEFAULT_CATALOG_DATA.phones));
      }
    },

    /**
     * High-Performance Pre-Processor:
     * 1. Precomputes cardSpecs once so x-for does not re-extract strings on every keystroke
     * 2. Builds a 100% comprehensive inverted search buffer (_searchText & _normSearchText) covering:
     *    - Brand names, Brand IDs, and Origins
     *    - Model names, series names, release years, release dates, taglines
     *    - Banner card table items (all keys & values): Processor/CPU, GPU, Architecture bit, Memory/RAM, Storage, Display
     *    - Full spec detailed popup page (all category titles, parameter keys, parameter values, key:value pairs)
     *    - Highlights and technical architectural features
     */
    processPhonesData(phoneList) {
      return (phoneList || []).map(phone => {
        const ps = phone?.specs?.['Processor & Silicon'] || {};
        const ms = phone?.specs?.['Memory & Storage'] || {};
        const ds = phone?.specs?.['Display System'] || {};

        // Clean Processor/CPU extraction
        let cpu = ps['CPU'] || ps['SoC'] || '—';
        if (cpu.length > 40) {
          cpu = cpu.split('+')[0].trim();
        }

        // GPU extraction
        let gpu = ps['GPU'] || '—';
        if (gpu.length > 28) {
          gpu = gpu.split(' with ')[0].trim();
        }

        // Architecture bit
        const bit = ps['Architecture'] || ps['Bit'] || '64-bit';

        // RAM
        const ram = ms['RAM'] || '—';

        // Storage
        const storage = ms['Internal Storage'] || ms['Storage'] || '—';

        // Display
        let display = ds['Display Size'] || ds['Screen'] || '—';
        if (display.includes('inches')) {
          const parts = display.split('inches');
          display = `${parts[0].trim()}" ${parts[1] ? parts[1].replace('Super Retina XDR OLED', 'OLED').replace('Dynamic LTPO AMOLED 2X', 'AMOLED').trim() : ''}`.trim();
        }

        // Pre-calculated card specs object (re-used directly by Alpine templates)
        const cardSpecs = Object.freeze({ cpu, gpu, bit, ram, storage, display });

        // 100% Comprehensive Inverted Search Buffer
        const parts = [];

        // 1. Brand Names & Aliases
        if (phone.brandName) parts.push(phone.brandName, 'brand ' + phone.brandName, 'brand: ' + phone.brandName);
        if (phone.brandId) parts.push(phone.brandId);
        if (phone.origin) parts.push(phone.origin);

        // 2. Model Names, Series, Release Info & Taglines
        if (phone.model) parts.push(phone.model, 'model ' + phone.model, 'model: ' + phone.model);
        if (phone.seriesName) parts.push(phone.seriesName, 'series ' + phone.seriesName, 'series: ' + phone.seriesName);
        if (phone.seriesId) parts.push(phone.seriesId);
        if (phone.tagline) parts.push(phone.tagline);
        if (phone.releaseYear) parts.push(String(phone.releaseYear), 'year ' + phone.releaseYear, 'year: ' + phone.releaseYear, 'release year ' + phone.releaseYear);
        if (phone.releaseDate) parts.push(phone.releaseDate);

        // 3. Banner Items (All Keys & Values)
        parts.push(
          'processor cpu soc chipset silicon',
          'processor: ' + cpu, 'cpu: ' + cpu, 'soc: ' + cpu, cpu,
          'gpu graphics adreno mali immence ray tracing',
          'gpu: ' + gpu, 'graphics: ' + gpu, gpu,
          'architecture bit 64-bit 64bit',
          'architecture: ' + bit, 'bit: ' + bit, bit,
          'memory ram lpddr lpddr5x lpddr5',
          'memory: ' + ram, 'ram: ' + ram, ram,
          'storage rom internal storage ufs nvme flash',
          'storage: ' + storage, 'rom: ' + storage, storage,
          'display screen oled amoled ltpo retina resolution refresh rate',
          'display: ' + display, 'screen: ' + display, display
        );

        // 4. Highlights
        if (Array.isArray(phone.highlights)) {
          phone.highlights.forEach(h => {
            if (h) parts.push(h);
          });
        }

        // 5. Full Spec Detailed Popup Page: All Categories, Parameter Keys, and Parameter Values
        if (phone.specs && typeof phone.specs === 'object') {
          Object.entries(phone.specs).forEach(([catTitle, group]) => {
            if (catTitle) parts.push(catTitle);
            if (group && typeof group === 'object') {
              Object.entries(group).forEach(([specKey, specVal]) => {
                if (specKey) parts.push(specKey);
                if (specVal !== undefined && specVal !== null) {
                  const valStr = String(specVal);
                  parts.push(valStr);
                  // Explicit key:value pairings for targeted queries
                  parts.push(`${specKey}: ${valStr}`, `${specKey} = ${valStr}`);
                }
              });
            }
          });
        }

        // 6. Filter keys
        if (phone.filterKeys && typeof phone.filterKeys === 'object') {
          Object.entries(phone.filterKeys).forEach(([fk, fv]) => {
            parts.push(fk, String(fv));
          });
        }

        const _searchText = parts.join(' ').toLowerCase();
        const _normSearchText = _searchText.replace(/[^a-z0-9]/g, ' ');

        return Object.freeze({
          ...phone,
          cardSpecs,
          _searchText,
          _normSearchText
        });
      });
    },

    get filteredPhones() {
      const rawQuery = (this.searchQuery || '').trim();
      const allPhones = this.phones;

      // When NO search query is entered, filter strictly by selected brand & series
      if (!rawQuery) {
        const currentBrand = this.selectedBrand;
        const currentSeries = this.selectedSeries;
        
        const list = [];
        for (let i = 0; i < allPhones.length; i++) {
          const p = allPhones[i];
          if (currentBrand !== 'all' && p.brandId !== currentBrand) continue;
          if (currentSeries !== 'all' && p.seriesId !== currentSeries) continue;
          list.push(p);
        }
        return this.sortPhoneList(list, this.catalogSortBy);
      }

      // SEARCH QUERY IS ACTIVE:
      // Searches across ALL phones regardless of previously selected brand
      // Supports:
      // 1. True RegEx evaluation (native regular expression pattern matching)
      // 2. Multi-token smart matching (each token evaluated against all searchable fields)
      // 3. Punctuation & alphanumeric normalization
      // Works consistently on all browsers (Chrome, Edge, Safari, Firefox) and OS (Windows, macOS, Linux, iOS, Android)

      let fullRegex = null;
      // Check for /pattern/flags syntax
      const slashMatch = rawQuery.match(/^\/(.+)\/([a-z]*)$/);
      if (slashMatch) {
        try {
          const flags = slashMatch[2] ? (slashMatch[2].includes('i') ? slashMatch[2] : slashMatch[2] + 'i') : 'i';
          fullRegex = new RegExp(slashMatch[1], flags);
        } catch (e) {
          fullRegex = null;
        }
      } else if (/[|*+?()\[\]\\^$]/.test(rawQuery)) {
        // Raw query contains regex metacharacters
        try {
          fullRegex = new RegExp(rawQuery, 'i');
        } catch (e) {
          fullRegex = null;
        }
      }

      // Tokenize query for smart multi-word matching
      const tokens = rawQuery.split(/\s+/).filter(Boolean);
      const tokenMatchers = tokens.map(token => {
        const lower = token.toLowerCase();
        const clean = lower.replace(/[^a-z0-9]/g, '');
        let tokenRegex = null;
        try {
          tokenRegex = new RegExp(token, 'i');
        } catch (e) {
          tokenRegex = null;
        }
        return { lower, clean, tokenRegex };
      });

      const matchedPhones = [];
      for (let i = 0; i < allPhones.length; i++) {
        const phone = allPhones[i];
        const searchStr = phone._searchText;
        const normStr = phone._normSearchText;

        // Strategy A: If whole-query RegEx matches
        if (fullRegex && fullRegex.test(searchStr)) {
          matchedPhones.push(phone);
          continue;
        }

        // Strategy B: All tokens must match (via RegExp, literal substring, or normalized alphanumeric)
        let allTokensMatch = true;
        for (let j = 0; j < tokenMatchers.length; j++) {
          const tm = tokenMatchers[j];
          let tokenPass = false;

          // 1. Literal substring match
          if (searchStr.includes(tm.lower)) {
            tokenPass = true;
          }
          // 2. Normalized alphanumeric match
          else if (tm.clean && normStr.includes(tm.clean)) {
            tokenPass = true;
          }
          // 3. Token-level regex match
          else if (tm.tokenRegex && tm.tokenRegex.test(searchStr)) {
            tokenPass = true;
          }

          if (!tokenPass) {
            allTokensMatch = false;
            break;
          }
        }

        if (allTokensMatch) {
          matchedPhones.push(phone);
        }
      }

      // Relevance Ranking: prioritize direct model and brand matches, then apply user-selected sort
      const qLower = rawQuery.toLowerCase();
      const getScore = (p) => {
        const mLower = (p.model || '').toLowerCase();
        const bLower = (p.brandName || '').toLowerCase();
        if (mLower === qLower) return 100;
        if (mLower.startsWith(qLower)) return 90;
        if (mLower.includes(qLower)) return 80;
        if (bLower === qLower) return 70;
        if (bLower.startsWith(qLower)) return 60;
        if (bLower.includes(qLower)) return 50;
        return 10;
      };

      return matchedPhones.sort((a, b) => {
        const scoreDiff = getScore(b) - getScore(a);
        if (scoreDiff !== 0) return scoreDiff;

        if (this.searchSortBy === 'name-asc') {
          return (a.model || '').localeCompare(b.model || '', undefined, { numeric: true, sensitivity: 'base' });
        }
        if (this.searchSortBy === 'name-desc') {
          return (b.model || '').localeCompare(a.model || '', undefined, { numeric: true, sensitivity: 'base' });
        }
        if (this.searchSortBy === 'year-desc') {
          const yearDiff = (b.releaseYear || 0) - (a.releaseYear || 0);
          return yearDiff !== 0 ? yearDiff : (b.releaseDate || '').localeCompare(a.releaseDate || '');
        }
        if (this.searchSortBy === 'year-asc') {
          const yearDiff = (a.releaseYear || 0) - (b.releaseYear || 0);
          return yearDiff !== 0 ? yearDiff : (a.releaseDate || '').localeCompare(b.releaseDate || '');
        }
        return 0;
      });
    },

    sortPhoneList(list, sortBy) {
      const copy = [...list];
      copy.sort((a, b) => {
        if (sortBy === 'name-asc') {
          return (a.model || '').localeCompare(b.model || '', undefined, { numeric: true, sensitivity: 'base' });
        }
        if (sortBy === 'name-desc') {
          return (b.model || '').localeCompare(a.model || '', undefined, { numeric: true, sensitivity: 'base' });
        }
        if (sortBy === 'year-desc') {
          const yearDiff = (b.releaseYear || 0) - (a.releaseYear || 0);
          return yearDiff !== 0 ? yearDiff : (b.releaseDate || '').localeCompare(a.releaseDate || '');
        }
        if (sortBy === 'year-asc') {
          const yearDiff = (a.releaseYear || 0) - (b.releaseYear || 0);
          return yearDiff !== 0 ? yearDiff : (a.releaseDate || '').localeCompare(b.releaseDate || '');
        }
        return 0;
      });
      return copy;
    },

    get activeBrandObject() {
      return this.brands.find(b => b.id === this.selectedBrand) || null;
    },

    /**
     * Return only series that actually contain phone models in the catalog.
     * Prevents displaying series pills that lead to empty pages.
     */
    get activeSeriesList() {
      const b = this.activeBrandObject;
      if (!b || !Array.isArray(b.series)) return [];

      const currentBrandPhones = this.phones.filter(p => p.brandId === b.id);
      return b.series.filter(s => currentBrandPhones.some(p => p.seriesId === s.id));
    },

    showAllPhones() {
      this.searchQuery = '';
      this.selectedBrand = 'all';
      this.selectedSeries = 'all';
      this.showDetailsModal = false;
      this.showCompareModal = false;
      window.location.hash = '';
      if (window.location.hash) {
        history.replaceState(null, '', window.location.pathname);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    selectBrand(brandId, seriesId = 'all') {
      this.searchQuery = '';
      this.selectedBrand = brandId;
      
      // Guard: if requested series has 0 phones in catalog, fallback cleanly to 'all'
      if (seriesId !== 'all') {
        const hasSeriesPhones = this.phones.some(p => p.brandId === brandId && p.seriesId === seriesId);
        this.selectedSeries = hasSeriesPhones ? seriesId : 'all';
      } else {
        this.selectedSeries = 'all';
      }
      
      if (brandId === 'all') {
        this.searchQuery = '';
        window.location.hash = '';
        if (window.location.hash) {
          history.replaceState(null, '', window.location.pathname);
        }
      } else if (this.selectedSeries === 'all') {
        window.location.hash = brandId;
      } else {
        window.location.hash = `${brandId}/${this.selectedSeries}`;
      }
    },

    selectSeries(seriesId) {
      this.selectBrand(this.selectedBrand, seriesId);
    },

    handleHashRoute() {
      const hash = window.location.hash.replace(/^#\/?/, '');
      if (!hash || hash === 'all') {
        this.selectedBrand = 'all';
        this.selectedSeries = 'all';
        if (window.location.hash) history.replaceState(null, '', window.location.pathname);
        return;
      }

      if (hash.startsWith('phone/')) {
        const phoneId = hash.replace('phone/', '');
        const found = this.phones.find(p => p.id === phoneId);
        if (found) this.openDetails(found);
        return;
      }

      const parts = hash.split('/');
      const brandId = parts[0] || 'all';
      let seriesId = parts[1] || 'all';

      // Validate brand exists
      const brandExists = brandId === 'all' || this.brands.some(b => b.id === brandId);
      this.selectedBrand = brandExists ? brandId : 'all';

      // Validate series has phones
      if (this.selectedBrand !== 'all' && seriesId !== 'all') {
        const hasSeriesPhones = this.phones.some(p => p.brandId === this.selectedBrand && p.seriesId === seriesId);
        this.selectedSeries = hasSeriesPhones ? seriesId : 'all';
      } else {
        this.selectedSeries = 'all';
      }
    },

    openDetails(phone) {
      this.activePhone = phone;
      this.showDetailsModal = true;
      window.location.hash = `phone/${phone.id}`;
    },

    closeDetails() {
      this.showDetailsModal = false;
      this.activePhone = null;
      if (this.selectedBrand !== 'all') {
        window.location.hash = this.selectedSeries !== 'all' ? `${this.selectedBrand}/${this.selectedSeries}` : this.selectedBrand;
      } else {
        window.location.hash = '';
      }
    },

    isInCompare(phoneId) {
      return this.compareList.some(p => p.id === phoneId);
    },

    toggleCompare(phone) {
      if (this.isInCompare(phone.id)) {
        this.compareList = this.compareList.filter(p => p.id !== phone.id);
      } else {
        if (this.compareList.length >= 3) {
          this.showToast('You can compare a maximum of 3 phones at once.', 'error');
          return;
        }
        this.compareList.push(phone);
      }
    },

    removeCompare(phoneId) {
      this.compareList = this.compareList.filter(p => p.id !== phoneId);
    },

    clearCompare() {
      this.compareList = [];
    },

    openCompareModal() {
      if (this.compareList.length < 2) {
        this.showToast('Please select at least 2 phones to compare.', 'info');
        return;
      }
      this.showCompareModal = true;
    },

    getSpecValue(phone, category, key) {
      return phone?.specs?.[category]?.[key] || 'Ã¢â‚¬â€';
    },

    getCardSpecs(phone) {
      const ps = phone?.specs?.['Processor & Silicon'] || {};
      const ms = phone?.specs?.['Memory & Storage'] || {};
      const ds = phone?.specs?.['Display System'] || {};

      // Clean Processor/CPU extraction
      let cpu = ps['CPU'] || ps['SoC'] || 'Ã¢â‚¬â€';
      if (cpu.length > 40) {
        // e.g. "Octa-core up to 3.39GHz Cortex-X4" -> "Octa-core up to 3.39GHz"
        cpu = cpu.split('+')[0].trim();
      }

      // GPU extraction
      let gpu = ps['GPU'] || 'Ã¢â‚¬â€';
      if (gpu.length > 28) {
        gpu = gpu.split(' with ')[0].trim();
      }

      // Architecture bit
      let bit = ps['Architecture'] || ps['Bit'] || '64-bit';

      // RAM
      let ram = ms['RAM'] || 'Ã¢â‚¬â€';

      // Storage
      let storage = ms['Internal Storage'] || ms['Storage'] || 'Ã¢â‚¬â€';

      // Display
      let display = ds['Display Size'] || ds['Screen'] || 'Ã¢â‚¬â€';
      if (display.includes('inches')) {
        const parts = display.split('inches');
        display = `${parts[0].trim()}" ${parts[1] ? parts[1].replace('Super Retina XDR OLED', 'OLED').replace('Dynamic LTPO AMOLED 2X', 'AMOLED').trim() : ''}`.trim();
      }

      return { cpu, gpu, bit, ram, storage, display };
    },

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
    },

    openAddModal() {
      this.formTitle = 'Add New Mobile Phone';
      const defaultBrand = this.brands[0] ? this.brands[0].id : 'apple';
      const defaultSeries = this.brands[0]?.series?.[0]?.id || '';

      this.formData = {
        id: '',
        brandId: defaultBrand,
        seriesId: defaultSeries,
        model: '',
        tagline: '',
        releaseYear: 2024,
        releaseDate: '2024-09',
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
      };

      this.showFormModal = true;
    },

    openEditModal(phone) {
      this.formTitle = `Edit Phone: ${phone.model}`;
      this.formData = {
        id: phone.id,
        brandId: phone.brandId,
        seriesId: phone.seriesId,
        model: phone.model,
        tagline: phone.tagline || '',
        releaseYear: phone.releaseYear || 2024,
        releaseDate: phone.releaseDate || `${phone.releaseYear || 2024}-01`,
        specsRawJson: JSON.stringify(phone.specs || {}, null, 2),
        highlightsRaw: (phone.highlights || []).join('\n')
      };

      this.showFormModal = true;
    },

    savePhone() {
      let parsedSpecs = {};
      try {
        parsedSpecs = JSON.parse(this.formData.specsRawJson);
      } catch (err) {
        alert('Invalid JSON in Specifications field. Please verify format.');
        return;
      }

      const rawHighlights = this.formData.highlightsRaw
        .split('\n')
        .map(h => h.trim())
        .filter(Boolean);

      const brandObj = this.brands.find(b => b.id === this.formData.brandId);
      const seriesObj = brandObj?.series?.find(s => s.id === this.formData.seriesId);

      const isEditing = Boolean(this.formData.id);
      const generatedId = isEditing ? this.formData.id : `${this.formData.brandId}-${this.formData.model.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`;

      const phoneRecord = {
        id: generatedId,
        brandId: this.formData.brandId,
        brandName: brandObj ? brandObj.name : this.formData.brandId,
        seriesId: this.formData.seriesId,
        seriesName: seriesObj ? seriesObj.name : this.formData.seriesId,
        model: this.formData.model.trim(),
        tagline: this.formData.tagline.trim(),
        releaseDate: this.formData.releaseDate ? this.formData.releaseDate.trim() : `${this.formData.releaseYear}-01`,
        releaseYear: parseInt(this.formData.releaseYear, 10) || 2024,
        specs: parsedSpecs,
        highlights: rawHighlights
      };

      if (isEditing) {
        const idx = this.phones.findIndex(p => p.id === this.formData.id);
        if (idx !== -1) {
          this.phones[idx] = phoneRecord;
          this.showToast(`Updated specs for "${phoneRecord.model}"`, 'success');
        }
      } else {
        this.phones.unshift(phoneRecord);
        this.showToast(`Added new phone "${phoneRecord.model}"`, 'success');
      }

      this.persistToLocalStorage();
      this.showFormModal = false;
    },

    deletePhone(phoneId) {
      const phone = this.phones.find(p => p.id === phoneId);
      if (!confirm(`Are you sure you want to delete "${phone ? phone.model : phoneId}"?`)) return;

      this.phones = this.phones.filter(p => p.id !== phoneId);
      this.compareList = this.compareList.filter(p => p.id !== phoneId);
      this.persistToLocalStorage();
      this.showToast('Phone record deleted.', 'info');
    },

    persistToLocalStorage() {
      const payload = {
        brands: this.brands,
        phones: this.phones
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    },

    exportCatalogJson() {
      const payload = {
        brands: this.brands,
        phones: this.phones
      };
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(payload, null, 2));
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", "catalog.json");
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();

      this.showToast('catalog.json exported! Save it to your data/catalog.json file to persist in repo.', 'success');
    },

    resetToDisk() {
      if (confirm('Reset catalog back to pristine data/catalog.json file from disk? This clears any local browser edits.')) {
        localStorage.removeItem(STORAGE_KEY);
        window.location.reload();
      }
    },

    showToast(message, type = 'info') {
      const id = Date.now();
      this.toasts.push({ id, message, type });
      setTimeout(() => {
        this.toasts = this.toasts.filter(t => t.id !== id);
      }, 4000);
    }
  }));
});
