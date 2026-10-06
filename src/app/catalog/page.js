"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Toast from "@/components/Toast";
import {
  Layers,
  Tag,
  Package,
  Plus,
  Edit2,
  Trash2,
  Search,
  CheckCircle,
  XCircle,
  ArrowLeft,
  ChevronRight,
  Sparkles,
  Lock,
  LogOut,
  FolderTree,
  UploadCloud,
} from "lucide-react";

// Mock Seed Data for standalone catalog exploration
const INITIAL_CATEGORIES = [
  { id: 1, name: "Groceries & Staples", description: "Daily essentials, rice, flour, oil and grains", is_active: true, icon: "🌾" },
  { id: 2, name: "Bakery & Dairy", description: "Fresh milk, bread, butter, eggs and pastries", is_active: true, icon: "🥖" },
  { id: 3, name: "Fresh Fruits & Veggies", description: "Farm fresh organic produce", is_active: true, icon: "🍏" },
];

const INITIAL_SUBCATEGORIES = [
  { id: 101, category_id: 1, name: "Atta, Rice & Dals", description: "Flour and pulses", is_active: true },
  { id: 102, category_id: 1, name: "Edible Oils & Ghee", description: "Cooking oils and ghee", is_active: true },
  { id: 201, category_id: 2, name: "Artisanal Bread", description: "Sourdough, multigrain & pav", is_active: true },
  { id: 202, category_id: 2, name: "Farm Milk & Curd", description: "Cow milk and dairy items", is_active: true },
  { id: 301, category_id: 3, name: "Seasonal Fruits", description: "Apples, bananas, mangoes", is_active: true },
];

const INITIAL_PRODUCTS = [
  {
    id: 1001,
    category_id: 1,
    subcategory_id: 101,
    name: "Chakki Fresh Whole Wheat Atta (5kg)",
    price: 245,
    compare_at_price: 280,
    stock: 45,
    sku: "WHT-005",
    is_active: true,
    tags: ["flour", "healthy"],
    short_description: "100% whole wheat stone-ground flour.",
  },
  {
    id: 1002,
    category_id: 1,
    subcategory_id: 101,
    name: "Royal Basmati Rice (1kg)",
    price: 130,
    compare_at_price: 155,
    stock: 60,
    sku: "RCE-001",
    is_active: true,
    tags: ["rice", "grain"],
    short_description: "Aromatic aged long-grain basmati.",
  },
  {
    id: 2001,
    category_id: 2,
    subcategory_id: 201,
    name: "Whole Wheat Sourdough Loaf (400g)",
    price: 85,
    compare_at_price: 100,
    stock: 20,
    sku: "BK-SRD-01",
    is_active: true,
    tags: ["bakery", "fresh"],
    short_description: "Naturally fermented artisan sourdough.",
  },
];

const INITIAL_BRANDS = [
  { id: 1, name: "Aashirvaad", description: "Staples & whole grain staples", is_active: true },
  { id: 2, name: "Amul", description: "Dairy, milk, butter & cheese", is_active: true },
  { id: 3, name: "Fortune", description: "Refined cooking oil & pulses", is_active: true },
];

export default function CatalogPage() {
  const [activeTab, setActiveTab] = useState("categories"); // 'categories', 'brands'
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  // States
  const [categories, setCategories] = useState(INITIAL_CATEGORIES);
  const [subcategories, setSubcategories] = useState(INITIAL_SUBCATEGORIES);
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [brands, setBrands] = useState(INITIAL_BRANDS);
  const [searchQuery, setSearchQuery] = useState("");

  // Modal State
  const [modalType, setModalType] = useState(null); // 'category', 'subcategory', 'product', 'brand'
  const [editingItem, setEditingItem] = useState(null);
  const [toast, setToast] = useState(null);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  // Filtered lists
  const currentSubcategories = selectedCategory
    ? subcategories.filter((s) => s.category_id === selectedCategory.id)
    : [];

  const currentProducts = selectedSubcategory
    ? products.filter((p) => p.subcategory_id === selectedSubcategory.id)
    : selectedCategory
    ? products.filter((p) => p.category_id === selectedCategory.id)
    : products;

  const filteredProducts = currentProducts.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handlers for Add / Edit / Delete
  const handleSaveCategory = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const description = formData.get("description");
    const isActive = formData.get("is_active") === "true";

    if (editingItem) {
      setCategories(
        categories.map((c) =>
          c.id === editingItem.id ? { ...c, name, description, is_active: isActive } : c
        )
      );
      showToast("Category updated successfully!");
    } else {
      const newCat = {
        id: Date.now(),
        name,
        description,
        is_active: isActive,
        icon: "📦",
      };
      setCategories([...categories, newCat]);
      showToast("Category added successfully!");
    }
    setModalType(null);
  };

  const handleSaveSubcategory = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const description = formData.get("description");
    const isActive = formData.get("is_active") === "true";

    if (editingItem) {
      setSubcategories(
        subcategories.map((s) =>
          s.id === editingItem.id ? { ...s, name, description, is_active: isActive } : s
        )
      );
      showToast("Subcategory updated!");
    } else {
      const newSub = {
        id: Date.now(),
        category_id: selectedCategory.id,
        name,
        description,
        is_active: isActive,
      };
      setSubcategories([...subcategories, newSub]);
      showToast("Subcategory created!");
    }
    setModalType(null);
  };

  const handleSaveProduct = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const price = parseFloat(formData.get("price"));
    const comparePrice = parseFloat(formData.get("compare_at_price")) || null;
    const stock = parseInt(formData.get("stock")) || 0;
    const sku = formData.get("sku") || "";
    const shortDesc = formData.get("short_description") || "";
    const isActive = formData.get("is_active") === "true";

    if (editingItem) {
      setProducts(
        products.map((p) =>
          p.id === editingItem.id
            ? {
                ...p,
                name,
                price,
                compare_at_price: comparePrice,
                stock,
                sku,
                short_description: shortDesc,
                is_active: isActive,
              }
            : p
        )
      );
      showToast("Product updated!");
    } else {
      const newP = {
        id: Date.now(),
        category_id: selectedCategory ? selectedCategory.id : 1,
        subcategory_id: selectedSubcategory ? selectedSubcategory.id : 101,
        name,
        price,
        compare_at_price: comparePrice,
        stock,
        sku,
        short_description: shortDesc,
        is_active: isActive,
        tags: ["fresh", "catalog"],
      };
      setProducts([newP, ...products]);
      showToast("Product added to catalog!");
    }
    setModalType(null);
  };

  const handleSaveBrand = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const description = formData.get("description");
    const isActive = formData.get("is_active") === "true";

    if (editingItem) {
      setBrands(
        brands.map((b) =>
          b.id === editingItem.id ? { ...b, name, description, is_active: isActive } : b
        )
      );
      showToast("Brand updated!");
    } else {
      setBrands([...brands, { id: Date.now(), name, description, is_active: isActive }]);
      showToast("Brand registered!");
    }
    setModalType(null);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col justify-between">
      <Navbar activePage="catalog" />

      {/* Main Catalog View */}
      <main className="flex-1 pt-28 pb-20 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title & Nav Breadcrumb */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider mb-2">
              <FolderTree size={14} />
              <span>Merchant & Sector Admin Central</span>
            </div>
            <h1 className="text-3xl font-extrabold text-white font-heading">
              BetterMend Catalog Manager
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setActiveTab("categories");
                setSelectedCategory(null);
                setSelectedSubcategory(null);
              }}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeTab === "categories"
                  ? "bg-primary text-slate-950 shadow-glow-primary"
                  : "bg-card text-text-muted hover:text-white border border-white/10"
              }`}
            >
              Categories & Products
            </button>
            <button
              onClick={() => {
                setActiveTab("brands");
                setSelectedCategory(null);
                setSelectedSubcategory(null);
              }}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeTab === "brands"
                  ? "bg-primary text-slate-950 shadow-glow-primary"
                  : "bg-card text-text-muted hover:text-white border border-white/10"
              }`}
            >
              Brand Directory
            </button>
          </div>
        </div>

        {/* Dynamic Breadcrumbs */}
        {activeTab === "categories" && (
          <div className="flex items-center gap-2 text-xs text-text-muted mb-6 bg-card/60 p-3 rounded-xl border border-white/5">
            <button
              onClick={() => {
                setSelectedCategory(null);
                setSelectedSubcategory(null);
              }}
              className="hover:text-primary transition-colors flex items-center gap-1 font-semibold"
            >
              <span>🏠 All Categories</span>
            </button>

            {selectedCategory && (
              <>
                <ChevronRight size={14} />
                <button
                  onClick={() => setSelectedSubcategory(null)}
                  className={`hover:text-primary transition-colors font-semibold ${
                    !selectedSubcategory ? "text-primary" : ""
                  }`}
                >
                  {selectedCategory.name}
                </button>
              </>
            )}

            {selectedSubcategory && (
              <>
                <ChevronRight size={14} />
                <span className="text-primary font-bold">{selectedSubcategory.name}</span>
              </>
            )}
          </div>
        )}

        {/* View 1: CATEGORIES & SUB-TREE */}
        {activeTab === "categories" && !selectedCategory && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-white">Main Product Categories</h2>
                <p className="text-xs text-text-muted">Select a category to inspect subcategories and SKUs.</p>
              </div>
              <button
                onClick={() => {
                  setEditingItem(null);
                  setModalType("category");
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-slate-950 font-bold text-xs shadow-glow-primary"
              >
                <Plus size={16} />
                <span>Add Category</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {categories.map((cat) => (
                <div
                  key={cat.id}
                  className="group p-6 rounded-2xl bg-card border border-white/5 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
                  onClick={() => setSelectedCategory(cat)}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl p-2.5 rounded-xl bg-white/5 border border-white/10">
                        {cat.icon || "📦"}
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          cat.is_active
                            ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                            : "bg-rose-500/10 text-rose-400 border border-rose-500/20"
                        }`}
                      >
                        {cat.is_active ? "Active" : "Disabled"}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-text-muted mt-2 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-primary">
                    <span>Manage Subcategories →</span>
                    <div
                      className="flex items-center gap-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        onClick={() => {
                          setEditingItem(cat);
                          setModalType("category");
                        }}
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-text-muted hover:text-white"
                      >
                        <Edit2 size={13} />
                      </button>
                      <button
                        onClick={() => {
                          if (confirm("Delete this category?")) {
                            setCategories(categories.filter((c) => c.id !== cat.id));
                            showToast("Category removed");
                          }
                        }}
                        className="p-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* View 2: SUBCATEGORIES & PRODUCTS UNDER A CATEGORY */}
        {activeTab === "categories" && selectedCategory && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Col: Subcategories */}
            <div className="lg:col-span-4 space-y-4">
              <div className="p-5 rounded-2xl bg-card border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                    Subcategories
                  </h3>
                  <button
                    onClick={() => {
                      setEditingItem(null);
                      setModalType("subcategory");
                    }}
                    className="p-1.5 rounded-lg bg-primary text-slate-950 text-xs font-bold"
                  >
                    <Plus size={14} />
                  </button>
                </div>

                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedSubcategory(null)}
                    className={`w-full text-left p-3 rounded-xl text-xs font-semibold transition-all flex items-center justify-between ${
                      !selectedSubcategory
                        ? "bg-primary/20 text-primary border border-primary/30"
                        : "bg-white/5 text-text-muted hover:text-white"
                    }`}
                  >
                    <span>All Subcategories ({currentSubcategories.length})</span>
                    <span>→</span>
                  </button>

                  {currentSubcategories.map((sub) => {
                    const isSelected = selectedSubcategory?.id === sub.id;
                    return (
                      <div
                        key={sub.id}
                        className={`p-3 rounded-xl border transition-all flex items-center justify-between ${
                          isSelected
                            ? "bg-primary/15 border-primary/30 text-white"
                            : "bg-white/5 border-white/5 text-text-muted hover:text-white"
                        }`}
                      >
                        <button
                          onClick={() => setSelectedSubcategory(sub)}
                          className="text-xs font-semibold text-left flex-1"
                        >
                          {sub.name}
                        </button>
                        <div className="flex items-center gap-1.5 ml-2">
                          <button
                            onClick={() => {
                              setEditingItem(sub);
                              setModalType("subcategory");
                            }}
                            className="p-1 text-text-muted hover:text-white"
                          >
                            <Edit2 size={12} />
                          </button>
                          <button
                            onClick={() => {
                              if (confirm("Delete subcategory?")) {
                                setSubcategories(subcategories.filter((s) => s.id !== sub.id));
                                showToast("Subcategory deleted");
                              }
                            }}
                            className="p-1 text-rose-400 hover:text-rose-300"
                          >
                            <Trash2 size={12} />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Col: Products Table */}
            <div className="lg:col-span-8 space-y-4">
              <div className="p-6 rounded-2xl bg-card border border-white/10">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      Products in {selectedSubcategory ? selectedSubcategory.name : selectedCategory.name}
                    </h3>
                    <p className="text-xs text-text-muted">
                      Showing {filteredProducts.length} items
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
                      <input
                        type="text"
                        placeholder="Search product..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-8 pr-3 py-1.5 rounded-xl bg-dark-900 border border-white/10 text-xs text-white placeholder:text-text-muted focus:outline-none focus:border-primary"
                      />
                    </div>
                    <button
                      onClick={() => {
                        setEditingItem(null);
                        setModalType("product");
                      }}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-primary text-slate-950 font-bold text-xs"
                    >
                      <Plus size={14} />
                      <span>New Product</span>
                    </button>
                  </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs text-text-main">
                    <thead className="bg-white/5 text-text-muted uppercase tracking-wider border-b border-white/10">
                      <tr>
                        <th className="p-3">Product Name</th>
                        <th className="p-3">Price</th>
                        <th className="p-3">Stock</th>
                        <th className="p-3">SKU</th>
                        <th className="p-3">Status</th>
                        <th className="p-3 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {filteredProducts.map((p) => (
                        <tr key={p.id} className="hover:bg-white/[0.02]">
                          <td className="p-3 font-semibold text-white">
                            <div>{p.name}</div>
                            <div className="text-[10px] text-text-muted">{p.short_description}</div>
                          </td>
                          <td className="p-3">
                            <span className="font-bold text-primary">₹{p.price}</span>
                            {p.compare_at_price && (
                              <span className="text-text-muted line-through ml-1.5 text-[10px]">
                                ₹{p.compare_at_price}
                              </span>
                            )}
                          </td>
                          <td className="p-3">
                            <span className={p.stock < 10 ? "text-amber-400 font-bold" : ""}>
                              {p.stock} units
                            </span>
                          </td>
                          <td className="p-3 font-mono text-text-muted">{p.sku || "—"}</td>
                          <td className="p-3">
                            <span
                              className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                p.is_active
                                  ? "bg-emerald-500/10 text-emerald-400"
                                  : "bg-rose-500/10 text-rose-400"
                              }`}
                            >
                              {p.is_active ? "In Stock" : "Inactive"}
                            </span>
                          </td>
                          <td className="p-3 text-right">
                            <div className="inline-flex items-center gap-2">
                              <button
                                onClick={() => {
                                  setEditingItem(p);
                                  setModalType("product");
                                }}
                                className="p-1 rounded bg-white/5 hover:bg-white/10 text-text-muted hover:text-white"
                              >
                                <Edit2 size={13} />
                              </button>
                              <button
                                onClick={() => {
                                  if (confirm("Delete this product?")) {
                                    setProducts(products.filter((item) => item.id !== p.id));
                                    showToast("Product deleted");
                                  }
                                }}
                                className="p-1 rounded bg-rose-500/10 hover:bg-rose-500/20 text-rose-400"
                              >
                                <Trash2 size={13} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  {filteredProducts.length === 0 && (
                    <div className="text-center py-12 text-text-muted text-xs">
                      No products found in this category. Click "+ New Product" to add.
                    </div>
                  )}
                </div>

              </div>
            </div>

          </div>
        )}

        {/* View 3: BRANDS DIRECTORY */}
        {activeTab === "brands" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-white">Registered Brands</h2>
                <p className="text-xs text-text-muted">Manage product brand logos and catalog partnerships.</p>
              </div>
              <button
                onClick={() => {
                  setEditingItem(null);
                  setModalType("brand");
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-slate-950 font-bold text-xs shadow-glow-primary"
              >
                <Plus size={16} />
                <span>Register Brand</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {brands.map((b) => (
                <div
                  key={b.id}
                  className="p-6 rounded-2xl bg-card border border-white/5 hover:border-primary/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl">
                        🏷️
                      </div>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          b.is_active
                            ? "bg-emerald-500/10 text-emerald-400"
                            : "bg-rose-500/10 text-rose-400"
                        }`}
                      >
                        {b.is_active ? "Active" : "Inactive"}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white">{b.name}</h3>
                    <p className="text-xs text-text-muted mt-1 leading-relaxed">
                      {b.description || "Official brand partner in BetterMend network."}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-end gap-2">
                    <button
                      onClick={() => {
                        setEditingItem(b);
                        setModalType("brand");
                      }}
                      className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-text-muted hover:text-white text-xs"
                    >
                      <Edit2 size={13} />
                    </button>
                    <button
                      onClick={() => {
                        if (confirm("Delete brand?")) {
                          setBrands(brands.filter((item) => item.id !== b.id));
                          showToast("Brand deleted");
                        }
                      }}
                      className="p-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 text-xs"
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>

      {/* Reusable Modal */}
      {modalType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-lg rounded-3xl bg-dark-850 border border-white/10 p-6 shadow-2xl animate-fadeIn">
            <h3 className="text-lg font-bold text-white mb-4">
              {editingItem ? `Edit ${modalType}` : `Add New ${modalType}`}
            </h3>

            {/* Category Form */}
            {modalType === "category" && (
              <form onSubmit={handleSaveCategory} className="space-y-4 text-xs">
                <div>
                  <label className="block text-text-muted mb-1 font-semibold">Category Name *</label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={editingItem?.name || ""}
                    required
                    className="w-full p-2.5 rounded-xl bg-dark-900 border border-white/10 text-white focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-text-muted mb-1 font-semibold">Description</label>
                  <textarea
                    name="description"
                    defaultValue={editingItem?.description || ""}
                    rows={3}
                    className="w-full p-2.5 rounded-xl bg-dark-900 border border-white/10 text-white focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-text-muted mb-1 font-semibold">Status</label>
                  <select
                    name="is_active"
                    defaultValue={editingItem?.is_active ? "true" : "false"}
                    className="w-full p-2.5 rounded-xl bg-dark-900 border border-white/10 text-white focus:outline-none"
                  >
                    <option value="true">Active</option>
                    <option value="false">Inactive</option>
                  </select>
                </div>
                <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setModalType(null)}
                    className="px-4 py-2 rounded-xl bg-white/5 text-text-muted hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-primary text-slate-950 font-bold"
                  >
                    Save Category
                  </button>
                </div>
              </form>
            )}

            {/* Subcategory Form */}
            {modalType === "subcategory" && (
              <form onSubmit={handleSaveSubcategory} className="space-y-4 text-xs">
                <div>
                  <label className="block text-text-muted mb-1 font-semibold">Subcategory Name *</label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={editingItem?.name || ""}
                    required
                    className="w-full p-2.5 rounded-xl bg-dark-900 border border-white/10 text-white focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-text-muted mb-1 font-semibold">Description</label>
                  <textarea
                    name="description"
                    defaultValue={editingItem?.description || ""}
                    rows={3}
                    className="w-full p-2.5 rounded-xl bg-dark-900 border border-white/10 text-white focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-text-muted mb-1 font-semibold">Status</label>
                  <select
                    name="is_active"
                    defaultValue={editingItem?.is_active ? "true" : "false"}
                    className="w-full p-2.5 rounded-xl bg-dark-900 border border-white/10 text-white"
                  >
                    <option value="true">Active</option>
                    <option value="false">Inactive</option>
                  </select>
                </div>
                <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setModalType(null)}
                    className="px-4 py-2 rounded-xl bg-white/5 text-text-muted hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-primary text-slate-950 font-bold"
                  >
                    Save Subcategory
                  </button>
                </div>
              </form>
            )}

            {/* Product Form */}
            {modalType === "product" && (
              <form onSubmit={handleSaveProduct} className="space-y-3.5 text-xs">
                <div>
                  <label className="block text-text-muted mb-1 font-semibold">Product Name *</label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={editingItem?.name || ""}
                    required
                    placeholder="e.g. Farm Fresh Eggs (6 pcs)"
                    className="w-full p-2.5 rounded-xl bg-dark-900 border border-white/10 text-white focus:outline-none focus:border-primary"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-text-muted mb-1 font-semibold">Price (₹) *</label>
                    <input
                      type="number"
                      step="0.01"
                      name="price"
                      defaultValue={editingItem?.price || ""}
                      required
                      className="w-full p-2.5 rounded-xl bg-dark-900 border border-white/10 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-text-muted mb-1 font-semibold">Compare MRP (₹)</label>
                    <input
                      type="number"
                      step="0.01"
                      name="compare_at_price"
                      defaultValue={editingItem?.compare_at_price || ""}
                      className="w-full p-2.5 rounded-xl bg-dark-900 border border-white/10 text-white"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-text-muted mb-1 font-semibold">Stock Quantity</label>
                    <input
                      type="number"
                      name="stock"
                      defaultValue={editingItem?.stock ?? 10}
                      className="w-full p-2.5 rounded-xl bg-dark-900 border border-white/10 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-text-muted mb-1 font-semibold">SKU / Code</label>
                    <input
                      type="text"
                      name="sku"
                      defaultValue={editingItem?.sku || ""}
                      placeholder="SKU-1002"
                      className="w-full p-2.5 rounded-xl bg-dark-900 border border-white/10 text-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-text-muted mb-1 font-semibold">Short Description</label>
                  <input
                    type="text"
                    name="short_description"
                    defaultValue={editingItem?.short_description || ""}
                    placeholder="100% natural, locally sourced"
                    className="w-full p-2.5 rounded-xl bg-dark-900 border border-white/10 text-white"
                  />
                </div>
                <div>
                  <label className="block text-text-muted mb-1 font-semibold">Availability</label>
                  <select
                    name="is_active"
                    defaultValue={editingItem?.is_active ? "true" : "false"}
                    className="w-full p-2.5 rounded-xl bg-dark-900 border border-white/10 text-white"
                  >
                    <option value="true">In Stock & Active</option>
                    <option value="false">Out of Stock</option>
                  </select>
                </div>
                <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setModalType(null)}
                    className="px-4 py-2 rounded-xl bg-white/5 text-text-muted hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-primary text-slate-950 font-bold"
                  >
                    Save Product
                  </button>
                </div>
              </form>
            )}

            {/* Brand Form */}
            {modalType === "brand" && (
              <form onSubmit={handleSaveBrand} className="space-y-4 text-xs">
                <div>
                  <label className="block text-text-muted mb-1 font-semibold">Brand Name *</label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={editingItem?.name || ""}
                    required
                    placeholder="e.g. Amul"
                    className="w-full p-2.5 rounded-xl bg-dark-900 border border-white/10 text-white focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-text-muted mb-1 font-semibold">Description</label>
                  <textarea
                    name="description"
                    defaultValue={editingItem?.description || ""}
                    rows={3}
                    className="w-full p-2.5 rounded-xl bg-dark-900 border border-white/10 text-white focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-text-muted mb-1 font-semibold">Status</label>
                  <select
                    name="is_active"
                    defaultValue={editingItem?.is_active ? "true" : "false"}
                    className="w-full p-2.5 rounded-xl bg-dark-900 border border-white/10 text-white"
                  >
                    <option value="true">Active</option>
                    <option value="false">Inactive</option>
                  </select>
                </div>
                <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setModalType(null)}
                    className="px-4 py-2 rounded-xl bg-white/5 text-text-muted hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-primary text-slate-950 font-bold"
                  >
                    Save Brand
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}

      {/* Toast */}
      <Toast toast={toast} onClose={() => setToast(null)} />

      <Footer />
    </div>
  );
}
