'use client';

import { useState } from 'react';

export default function Page() {
    const [formData, setFormData] = useState({
        description: '',
        language: 'en',
        isSalable: false,
        isInventory: false,
        plants: [''],
        salesOrganizations: [''],
        availabilityCheck: '',
        profitCenter: '',
        purchasingGroup: '',
        storageLocation: '',
        mrpType: '',
        reorderPoint: '',
        lotSizing: '',
    });

    const validateInput = (value, maxLength, allowDecimals = false) => {
        if (allowDecimals) {
            // For decimal numbers (e.g., reorderPoint)
            const numValue = value.replace(/[^\d.]/g, '');
            const parts = numValue.split('.');
            if (parts.length > 2) return parts[0] + '.' + parts[1];
            if (parts[1]?.length > 3) return parts[0] + '.' + parts[1].slice(0, 3);
            if (parts[0].length > 13)
                return parts[0].slice(0, 13) + (parts[1] ? '.' + parts[1] : '');
            return numValue;
        } else {
            // For regular numbers and text
            return value.slice(0, maxLength);
        }
    };

    const handleInventoryFieldChange = (field, value) => {
        let validatedValue;
        switch (field) {
            case 'availabilityCheck':
                validatedValue = validateInput(value, 2);
                break;
            case 'profitCenter':
                validatedValue = validateInput(value, 10);
                break;
            case 'purchasingGroup':
                validatedValue = validateInput(value, 3);
                break;
            case 'storageLocation':
                validatedValue = validateInput(value, 4);
                break;
            case 'mrpType':
                validatedValue = validateInput(value, 2);
                break;
            case 'reorderPoint':
                validatedValue = validateInput(value, 17, true);
                break;
            case 'lotSizing':
                validatedValue = validateInput(value, 2);
                break;
            default:
                validatedValue = value;
        }
        setFormData({ ...formData, [field]: validatedValue });
    };

    const handlePlantChange = (index, value) => {
        const validatedValue = validateFourDigits(value);
        const newPlants = [...formData.plants];
        newPlants[index] = validatedValue;
        setFormData({ ...formData, plants: newPlants });
    };

    const handleSalesOrgChange = (index, value) => {
        const validatedValue = validateFourDigits(value);
        const newSalesOrgs = [...formData.salesOrganizations];
        newSalesOrgs[index] = validatedValue;
        setFormData({ ...formData, salesOrganizations: newSalesOrgs });
    };

    const addPlant = () => {
        setFormData({ ...formData, plants: [...formData.plants, ''] });
    };

    const addSalesOrg = () => {
        setFormData({ ...formData, salesOrganizations: [...formData.salesOrganizations, ''] });
    };

    const removePlant = (index) => {
        const newPlants = formData.plants.filter((_, i) => i !== index);
        setFormData({ ...formData, plants: newPlants });
    };

    const removeSalesOrg = (index) => {
        const newSalesOrgs = formData.salesOrganizations.filter((_, i) => i !== index);
        setFormData({ ...formData, salesOrganizations: newSalesOrgs });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 p-8"
            data-oid="sq7-632"
        >
            <div
                className="max-w-2xl mx-auto bg-white rounded-xl shadow-2xl p-8"
                data-oid="xn_4dz7"
            >
                <h1 className="text-4xl font-bold text-indigo-800 mb-8" data-oid="8c6mcdg">
                    Create New Product
                </h1>

                <form onSubmit={handleSubmit} className="space-y-6" data-oid="2se_zd-">
                    <div className="space-y-4" data-oid="a-se.ym">
                        <div data-oid="p-74rxc">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="zfmuz1v"
                            >
                                Product Description
                            </label>
                            <textarea
                                value={formData.description}
                                onChange={(e) =>
                                    setFormData({ ...formData, description: e.target.value })
                                }
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                rows="4"
                                required
                                data-oid="sfn4yjf"
                            />
                        </div>

                        <div data-oid="udfa_ml">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="sokst7a"
                            >
                                Language
                            </label>
                            <select
                                value={formData.language}
                                onChange={(e) =>
                                    setFormData({ ...formData, language: e.target.value })
                                }
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                data-oid="5fd85lj"
                            >
                                <option value="en" data-oid="g16kme9">
                                    English
                                </option>
                                <option value="es" data-oid=".cohj4g">
                                    Spanish
                                </option>
                                <option value="fr" data-oid="pxz322h">
                                    French
                                </option>
                                <option value="de" data-oid="..3t06s">
                                    German
                                </option>
                            </select>
                        </div>

                        <div className="flex space-x-6" data-oid="i5agt4i">
                            <label
                                className="flex items-center space-x-2 cursor-pointer"
                                data-oid="s2mrsu8"
                            >
                                <input
                                    type="checkbox"
                                    checked={formData.isInventory}
                                    onChange={(e) =>
                                        setFormData({ ...formData, isInventory: e.target.checked })
                                    }
                                    className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
                                    data-oid=".mweceu"
                                />

                                <span className="text-gray-700" data-oid="9tgpy8p">
                                    Inventory Product
                                </span>
                            </label>

                            <label
                                className="flex items-center space-x-2 cursor-pointer"
                                data-oid=".-sf9yv"
                            >
                                <input
                                    type="checkbox"
                                    checked={formData.isSalable}
                                    onChange={(e) =>
                                        setFormData({ ...formData, isSalable: e.target.checked })
                                    }
                                    className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
                                    data-oid="l:sd0vp"
                                />

                                <span className="text-gray-700" data-oid="i0du07q">
                                    Salable Product
                                </span>
                            </label>
                        </div>

                        {formData.isInventory && (
                            <div className="space-y-4" data-oid="l13to3l">
                                <label
                                    className="block text-sm font-medium text-gray-700"
                                    data-oid="l9rmco6"
                                >
                                    Plants
                                </label>
                                {/* Existing Plants inputs */}
                                {formData.plants.map((plant, index) => (
                                    <div key={index} className="flex space-x-2" data-oid="zyzpxk8">
                                        <input
                                            type="text"
                                            inputMode="numeric"
                                            pattern="[0-9]{4}"
                                            maxLength={4}
                                            value={plant}
                                            onChange={(e) =>
                                                handlePlantChange(index, e.target.value)
                                            }
                                            className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                            placeholder="Enter 4-digit plant number"
                                            data-oid="u1rsvdv"
                                        />

                                        <button
                                            type="button"
                                            onClick={() => removePlant(index)}
                                            className="px-4 py-2 text-red-600 hover:text-red-800"
                                            data-oid="shl9-uy"
                                        >
                                            ×
                                        </button>
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    onClick={addPlant}
                                    className="px-4 py-2 text-sm text-indigo-600 hover:text-indigo-800"
                                    data-oid="fs-k:-m"
                                >
                                    + Add Plant
                                </button>

                                {/* New Inventory Fields */}
                                <div className="grid grid-cols-2 gap-4 mt-4" data-oid="t.we3jl">
                                    <div data-oid="m__yf2g">
                                        <label
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                            data-oid="tennq78"
                                        >
                                            Availability Check
                                        </label>
                                        <input
                                            type="text"
                                            maxLength={2}
                                            value={formData.availabilityCheck}
                                            onChange={(e) =>
                                                handleInventoryFieldChange(
                                                    'availabilityCheck',
                                                    e.target.value,
                                                )
                                            }
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                            placeholder="2 characters"
                                            data-oid="w-rm09i"
                                        />
                                    </div>

                                    <div data-oid="1c172zj">
                                        <label
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                            data-oid="mpfz_kc"
                                        >
                                            Profit Center
                                        </label>
                                        <input
                                            type="text"
                                            maxLength={10}
                                            value={formData.profitCenter}
                                            onChange={(e) =>
                                                handleInventoryFieldChange(
                                                    'profitCenter',
                                                    e.target.value,
                                                )
                                            }
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                            placeholder="10 characters"
                                            data-oid="6jopazb"
                                        />
                                    </div>

                                    <div data-oid="u58i5y4">
                                        <label
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                            data-oid="6e277-3"
                                        >
                                            Purchasing Group
                                        </label>
                                        <input
                                            type="text"
                                            maxLength={3}
                                            value={formData.purchasingGroup}
                                            onChange={(e) =>
                                                handleInventoryFieldChange(
                                                    'purchasingGroup',
                                                    e.target.value,
                                                )
                                            }
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                            placeholder="3 characters"
                                            data-oid="94ddiva"
                                        />
                                    </div>

                                    <div data-oid="t5b:::j">
                                        <label
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                            data-oid="jmj6xc:"
                                        >
                                            Storage Location
                                        </label>
                                        <input
                                            type="text"
                                            maxLength={4}
                                            value={formData.storageLocation}
                                            onChange={(e) =>
                                                handleInventoryFieldChange(
                                                    'storageLocation',
                                                    e.target.value,
                                                )
                                            }
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                            placeholder="4 characters"
                                            data-oid="vsoo0ns"
                                        />
                                    </div>

                                    <div data-oid="8kh3pio">
                                        <label
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                            data-oid="1m28_s3"
                                        >
                                            MRP Type
                                        </label>
                                        <input
                                            type="text"
                                            maxLength={2}
                                            value={formData.mrpType}
                                            onChange={(e) =>
                                                handleInventoryFieldChange(
                                                    'mrpType',
                                                    e.target.value,
                                                )
                                            }
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                            placeholder="2 characters"
                                            data-oid="_rf3ick"
                                        />
                                    </div>

                                    <div data-oid="ac0tglc">
                                        <label
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                            data-oid="prir2jd"
                                        >
                                            Reorder Point
                                        </label>
                                        <input
                                            type="text"
                                            inputMode="decimal"
                                            value={formData.reorderPoint}
                                            onChange={(e) =>
                                                handleInventoryFieldChange(
                                                    'reorderPoint',
                                                    e.target.value,
                                                )
                                            }
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                            placeholder="13 digits, 3 decimals"
                                            data-oid="tyg2j.5"
                                        />
                                    </div>

                                    <div data-oid="5l6bs8p">
                                        <label
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                            data-oid="tbzuxkb"
                                        >
                                            Lot Sizing
                                        </label>
                                        <input
                                            type="text"
                                            maxLength={2}
                                            value={formData.lotSizing}
                                            onChange={(e) =>
                                                handleInventoryFieldChange(
                                                    'lotSizing',
                                                    e.target.value,
                                                )
                                            }
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                            placeholder="2 characters"
                                            data-oid="7li-0w-"
                                        />
                                    </div>
                                </div>
                                {formData.plants.map((plant, index) => (
                                    <div key={index} className="flex space-x-2" data-oid="g73lz0m">
                                        <input
                                            type="text"
                                            inputMode="numeric"
                                            pattern="[0-9]{4}"
                                            maxLength={4}
                                            value={plant}
                                            onChange={(e) =>
                                                handlePlantChange(index, e.target.value)
                                            }
                                            className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                            placeholder="Enter 4-digit plant number"
                                            data-oid="-y8oi:b"
                                        />

                                        <button
                                            type="button"
                                            onClick={() => removePlant(index)}
                                            className="px-4 py-2 text-red-600 hover:text-red-800"
                                            data-oid=":zt:p9o"
                                        >
                                            ×
                                        </button>
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    onClick={addPlant}
                                    className="px-4 py-2 text-sm text-indigo-600 hover:text-indigo-800"
                                    data-oid="017l9si"
                                >
                                    + Add Plant
                                </button>
                            </div>
                        )}

                        {formData.isSalable && (
                            <div className="space-y-4" data-oid="rmf7xzd">
                                <label
                                    className="block text-sm font-medium text-gray-700"
                                    data-oid="sdgjiyw"
                                >
                                    Sales Organizations
                                </label>
                                {formData.salesOrganizations.map((org, index) => (
                                    <div key={index} className="flex space-x-2" data-oid="n1.0i9f">
                                        <input
                                            type="text"
                                            inputMode="numeric"
                                            pattern="[0-9]{4}"
                                            maxLength={4}
                                            value={org}
                                            onChange={(e) =>
                                                handleSalesOrgChange(index, e.target.value)
                                            }
                                            className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                            placeholder="Enter 4-digit sales org number"
                                            data-oid="zp1m10y"
                                        />

                                        <button
                                            type="button"
                                            onClick={() => removeSalesOrg(index)}
                                            className="px-4 py-2 text-red-600 hover:text-red-800"
                                            data-oid="i-p-5nu"
                                        >
                                            ×
                                        </button>
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    onClick={addSalesOrg}
                                    className="px-4 py-2 text-sm text-indigo-600 hover:text-indigo-800"
                                    data-oid="wu_fmot"
                                >
                                    + Add Sales Organization
                                </button>
                            </div>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        data-oid="nt7.erk"
                    >
                        Create Product
                    </button>
                </form>
            </div>
        </div>
    );
}
