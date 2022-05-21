
export const AppMenus = {
    
	navbarTopRightItems: [],
	navbarTopLeftItems: [],
	navbarSideLeftItems: [
  {
    "path": "/home",
    "label": "Home",
    "icon": "extension",
    "iconcolor": "",
    "target": "",
    "submenu": []
  },
  {
    "path": "/manager",
    "label": "Manager",
    "icon": "extension",
    "iconcolor": "",
    "target": "",
    "submenu": []
  },
  {
    "path": "/Customer",
    "label": "Customer",
    "icon": "extension",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }
],
	CustomerTableHeaderItems: [
  {
    "label": "Customer Name",
    "align": "left",
    "sortable": false,
    "name": "customer_name",
    "field": "customer_name"
  },
  {
    "label": "Customer Phone Number",
    "align": "left",
    "sortable": false,
    "name": "customer_phone_number",
    "field": "customer_phone_number"
  },
  {
    "label": "Customer Email",
    "align": "left",
    "sortable": false,
    "name": "customer_email",
    "field": "customer_email"
  },
  {
    "label": "Action",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }
],
	ManagerTableHeaderItems: [
  {
    "label": "Manager Id",
    "align": "left",
    "sortable": false,
    "name": "manager_id",
    "field": "manager_id"
  },
  {
    "label": "Name",
    "align": "left",
    "sortable": false,
    "name": "name",
    "field": "name"
  },
  {
    "label": "Username",
    "align": "left",
    "sortable": false,
    "name": "username",
    "field": "username"
  },
  {
    "label": "Email",
    "align": "left",
    "sortable": false,
    "name": "email",
    "field": "email"
  },
  {
    "label": "Business Name",
    "align": "left",
    "sortable": false,
    "name": "business_name",
    "field": "business_name"
  },
  {
    "label": "Business Phone Number",
    "align": "left",
    "sortable": false,
    "name": "business_phone_number",
    "field": "business_phone_number"
  },
  {
    "label": "Business Address",
    "align": "left",
    "sortable": false,
    "name": "business_address",
    "field": "business_address"
  },
  {
    "label": "Credit",
    "align": "left",
    "sortable": false,
    "name": "credit",
    "field": "credit"
  },
  {
    "label": "Action",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }
],

    exportFormats: {
        print: {
			label: 'Print',
			color: 'blue',
            icon: 'print',
            id: 'print',
            ext: '',
        },
        pdf: {
			label: 'Pdf',
			color: 'red',
            icon: 'picture_as_pdf',
            id: 'pdf',
            ext: 'pdf',
        },
        excel: {
			label: 'Excel',
			color: 'green',
            icon: 'grid_on',
            id: 'excel',
            ext: 'xlsx',
        },
        csv: {
			label: 'Csv',
			color: 'teal',
            icon: 'grid_on',
            id: 'csv',
            ext: 'csv',
        },
    },
    
}