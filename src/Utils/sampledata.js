const roles = [
    {
        name : 'super-admin',
        count : 1,
        authority : 10,
        permissions : {
            quotes : {
                read : true,
                write : true,
                delete : true
            },
            contacts : {
                read : true,
                write : true,
                delete : true
            },
            invoice_orders : {
                read : true,
                write : true,
                delete : true
            },
            inventory : {
                read : true,
                write : true,
                delete : true
            }
        }
    },

    {
        name : 'admin',
        count : 2,
        authority : 8,
        permissions : {
            quotes : {
                read : true,
                write : true,
                delete : true
            },
            contacts : {
                read : true,
                write : true,
                delete : true
            },
            invoice_orders : {
                read : true,
                write : true,
                delete : true
            },
            inventory : {
                read : true,
                write : true,
                delete : true
            }
        }
    },

    {
        name : 'accountend',
        count : 5,
        authority : 5,
        permissions : {
            quotes : {
                read : false,
                write : false,
                delete : false
            },
            contacts : {
                read : true,
                write : false,
                delete : false
            },
            invoice_orders : {
                read : true,
                write : true,
                delete : true
            },
            inventory : {
                read : true,
                write : true,
                delete : true
            }
        }
    },

    {
        name : 'sales-engineer',
        count : 4,
        authority : 6,
        permissions : {
            quotes : {
                read : true,
                write : true,
                delete : false
            },
            contacts : {
                read : true,
                write : true,
                delete : true
            },
            invoice_orders : {
                read : true,
                write : false,
                delete : false
            },
            inventory : {
                read : true,
                write : false,
                delete : false
            }
        }
    },

    {
        name : 'inventory',
        count : 3,
        authority : 3,
        permissions : {
            quotes : {
                read : false,
                write : false,
                delete : false
            },
            contacts : {
                read : false,
                write : false,
                delete : false
            },
            invoice_orders : {
                read : true,
                write : true,
                delete : false
            },
            inventory : {
                read : true,
                write : true,
                delete : true
            }
        }
    },
    {
        name : 'super-admin',
        count : 1,
        authority : 1,
        permissions : {
            quotes : {
                read : true,
                write : true,
                delete : true
            },
            contacts : {
                read : true,
                write : true,
                delete : true
            },
            invoice_orders : {
                read : true,
                write : true,
                delete : true
            },
            inventory : {
                read : true,
                write : true,
                delete : true
            }
        }
    },

    {
        name : 'admin',
        count : 2,
        authority : 2.5,
        permissions : {
            quotes : {
                read : true,
                write : true,
                delete : true
            },
            contacts : {
                read : true,
                write : true,
                delete : true
            },
            invoice_orders : {
                read : true,
                write : true,
                delete : true
            },
            inventory : {
                read : true,
                write : true,
                delete : true
            }
        }
    },

    {
        name : 'accountend',
        count : 5,
        authority : 2,
        permissions : {
            quotes : {
                read : false,
                write : false,
                delete : false
            },
            contacts : {
                read : true,
                write : false,
                delete : false
            },
            invoice_orders : {
                read : true,
                write : true,
                delete : true
            },
            inventory : {
                read : true,
                write : true,
                delete : true
            }
        }
    },

    {
        name : 'sales-engineer',
        count : 4,
        authority : 7,
        permissions : {
            quotes : {
                read : true,
                write : true,
                delete : false
            },
            contacts : {
                read : true,
                write : true,
                delete : true
            },
            invoice_orders : {
                read : true,
                write : false,
                delete : false
            },
            inventory : {
                read : true,
                write : false,
                delete : false
            }
        }
    },
    {
        name : 'super-admin',
        count : 1,
        authority : 10,
        permissions : {
            quotes : {
                read : true,
                write : true,
                delete : true
            },
            contacts : {
                read : true,
                write : true,
                delete : true
            },
            invoice_orders : {
                read : true,
                write : true,
                delete : true
            },
            inventory : {
                read : true,
                write : true,
                delete : true
            }
        }
    },

    {
        name : 'admin',
        count : 2,
        authority : 8,
        permissions : {
            quotes : {
                read : true,
                write : true,
                delete : true
            },
            contacts : {
                read : true,
                write : true,
                delete : true
            },
            invoice_orders : {
                read : true,
                write : true,
                delete : true
            },
            inventory : {
                read : true,
                write : true,
                delete : true
            }
        }
    },
    
    
]

export default roles