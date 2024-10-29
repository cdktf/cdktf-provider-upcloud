# `managedDatabaseOpensearch` Submodule <a name="`managedDatabaseOpensearch` Submodule" id="@cdktf/provider-upcloud.managedDatabaseOpensearch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedDatabaseOpensearch <a name="ManagedDatabaseOpensearch" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch upcloud_managed_database_opensearch}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_opensearch.ManagedDatabaseOpensearch;

ManagedDatabaseOpensearch.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .plan(java.lang.String)
    .title(java.lang.String)
    .zone(java.lang.String)
//  .accessControl(java.lang.Boolean)
//  .accessControl(IResolvable)
//  .extendedAccessControl(java.lang.Boolean)
//  .extendedAccessControl(IResolvable)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .maintenanceWindowDow(java.lang.String)
//  .maintenanceWindowTime(java.lang.String)
//  .network(IResolvable)
//  .network(java.util.List<ManagedDatabaseOpensearchNetwork>)
//  .powered(java.lang.Boolean)
//  .powered(IResolvable)
//  .properties(ManagedDatabaseOpensearchProperties)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.plan">plan</a></code> | <code>java.lang.String</code> | Service plan to use. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.title">title</a></code> | <code>java.lang.String</code> | Title of a managed database instance. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.zone">zone</a></code> | <code>java.lang.String</code> | Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.accessControl">accessControl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enables users access control for OpenSearch service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.extendedAccessControl">extendedAccessControl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Grant access to top-level `_mget`, `_msearch` and `_bulk` APIs. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#id ManagedDatabaseOpensearch#id}. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User defined key-value pairs to classify the managed database. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.maintenanceWindowDow">maintenanceWindowDow</a></code> | <code>java.lang.String</code> | Maintenance window day of week. Lower case weekday name (monday, tuesday, ...). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.maintenanceWindowTime">maintenanceWindowTime</a></code> | <code>java.lang.String</code> | Maintenance window UTC time in hh:mm:ss format. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.network">network</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetwork">ManagedDatabaseOpensearchNetwork</a>></code> | network block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.powered">powered</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The administrative power state of the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.properties">properties</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties">ManagedDatabaseOpensearchProperties</a></code> | properties block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the service.

The name is used as a prefix for the logical hostname. Must be unique within an account

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#name ManagedDatabaseOpensearch#name}

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.plan"></a>

- *Type:* java.lang.String

Service plan to use.

This determines how much resources the instance will have. You can list available plans with `upctl database plans <type>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#plan ManagedDatabaseOpensearch#plan}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.title"></a>

- *Type:* java.lang.String

Title of a managed database instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#title ManagedDatabaseOpensearch#title}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.zone"></a>

- *Type:* java.lang.String

Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#zone ManagedDatabaseOpensearch#zone}

---

##### `accessControl`<sup>Optional</sup> <a name="accessControl" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.accessControl"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enables users access control for OpenSearch service.

User access control rules will only be enforced if this attribute is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#access_control ManagedDatabaseOpensearch#access_control}

---

##### `extendedAccessControl`<sup>Optional</sup> <a name="extendedAccessControl" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.extendedAccessControl"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Grant access to top-level `_mget`, `_msearch` and `_bulk` APIs.

Users are limited to perform operations on indices based on the user-specific access control rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#extended_access_control ManagedDatabaseOpensearch#extended_access_control}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#id ManagedDatabaseOpensearch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User defined key-value pairs to classify the managed database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#labels ManagedDatabaseOpensearch#labels}

---

##### `maintenanceWindowDow`<sup>Optional</sup> <a name="maintenanceWindowDow" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.maintenanceWindowDow"></a>

- *Type:* java.lang.String

Maintenance window day of week. Lower case weekday name (monday, tuesday, ...).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#maintenance_window_dow ManagedDatabaseOpensearch#maintenance_window_dow}

---

##### `maintenanceWindowTime`<sup>Optional</sup> <a name="maintenanceWindowTime" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.maintenanceWindowTime"></a>

- *Type:* java.lang.String

Maintenance window UTC time in hh:mm:ss format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#maintenance_window_time ManagedDatabaseOpensearch#maintenance_window_time}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.network"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetwork">ManagedDatabaseOpensearchNetwork</a>>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#network ManagedDatabaseOpensearch#network}

---

##### `powered`<sup>Optional</sup> <a name="powered" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.powered"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The administrative power state of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#powered ManagedDatabaseOpensearch#powered}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.properties"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties">ManagedDatabaseOpensearchProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#properties ManagedDatabaseOpensearch#properties}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.putNetwork">putNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.putProperties">putProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetAccessControl">resetAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetExtendedAccessControl">resetExtendedAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetMaintenanceWindowDow">resetMaintenanceWindowDow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetMaintenanceWindowTime">resetMaintenanceWindowTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetPowered">resetPowered</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetProperties">resetProperties</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNetwork` <a name="putNetwork" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.putNetwork"></a>

```java
public void putNetwork(IResolvable OR java.util.List<ManagedDatabaseOpensearchNetwork> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.putNetwork.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetwork">ManagedDatabaseOpensearchNetwork</a>>

---

##### `putProperties` <a name="putProperties" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.putProperties"></a>

```java
public void putProperties(ManagedDatabaseOpensearchProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties">ManagedDatabaseOpensearchProperties</a>

---

##### `resetAccessControl` <a name="resetAccessControl" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetAccessControl"></a>

```java
public void resetAccessControl()
```

##### `resetExtendedAccessControl` <a name="resetExtendedAccessControl" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetExtendedAccessControl"></a>

```java
public void resetExtendedAccessControl()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetMaintenanceWindowDow` <a name="resetMaintenanceWindowDow" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetMaintenanceWindowDow"></a>

```java
public void resetMaintenanceWindowDow()
```

##### `resetMaintenanceWindowTime` <a name="resetMaintenanceWindowTime" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetMaintenanceWindowTime"></a>

```java
public void resetMaintenanceWindowTime()
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetNetwork"></a>

```java
public void resetNetwork()
```

##### `resetPowered` <a name="resetPowered" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetPowered"></a>

```java
public void resetPowered()
```

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetProperties"></a>

```java
public void resetProperties()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ManagedDatabaseOpensearch resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_opensearch.ManagedDatabaseOpensearch;

ManagedDatabaseOpensearch.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_opensearch.ManagedDatabaseOpensearch;

ManagedDatabaseOpensearch.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_opensearch.ManagedDatabaseOpensearch;

ManagedDatabaseOpensearch.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_opensearch.ManagedDatabaseOpensearch;

ManagedDatabaseOpensearch.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ManagedDatabaseOpensearch.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ManagedDatabaseOpensearch resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ManagedDatabaseOpensearch to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ManagedDatabaseOpensearch that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ManagedDatabaseOpensearch to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.components">components</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList">ManagedDatabaseOpensearchComponentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.network">network</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList">ManagedDatabaseOpensearchNetworkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.nodeStates">nodeStates</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList">ManagedDatabaseOpensearchNodeStatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.primaryDatabase">primaryDatabase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference">ManagedDatabaseOpensearchPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.serviceHost">serviceHost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.servicePassword">servicePassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.servicePort">servicePort</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.serviceUri">serviceUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.serviceUsername">serviceUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.accessControlInput">accessControlInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.extendedAccessControlInput">extendedAccessControlInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.maintenanceWindowDowInput">maintenanceWindowDowInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.maintenanceWindowTimeInput">maintenanceWindowTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.networkInput">networkInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetwork">ManagedDatabaseOpensearchNetwork</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.planInput">planInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.poweredInput">poweredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.propertiesInput">propertiesInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties">ManagedDatabaseOpensearchProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.zoneInput">zoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.accessControl">accessControl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.extendedAccessControl">extendedAccessControl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.maintenanceWindowDow">maintenanceWindowDow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.maintenanceWindowTime">maintenanceWindowTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.plan">plan</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.powered">powered</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `components`<sup>Required</sup> <a name="components" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.components"></a>

```java
public ManagedDatabaseOpensearchComponentsList getComponents();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList">ManagedDatabaseOpensearchComponentsList</a>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.network"></a>

```java
public ManagedDatabaseOpensearchNetworkList getNetwork();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList">ManagedDatabaseOpensearchNetworkList</a>

---

##### `nodeStates`<sup>Required</sup> <a name="nodeStates" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.nodeStates"></a>

```java
public ManagedDatabaseOpensearchNodeStatesList getNodeStates();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList">ManagedDatabaseOpensearchNodeStatesList</a>

---

##### `primaryDatabase`<sup>Required</sup> <a name="primaryDatabase" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.primaryDatabase"></a>

```java
public java.lang.String getPrimaryDatabase();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.properties"></a>

```java
public ManagedDatabaseOpensearchPropertiesOutputReference getProperties();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference">ManagedDatabaseOpensearchPropertiesOutputReference</a>

---

##### `serviceHost`<sup>Required</sup> <a name="serviceHost" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.serviceHost"></a>

```java
public java.lang.String getServiceHost();
```

- *Type:* java.lang.String

---

##### `servicePassword`<sup>Required</sup> <a name="servicePassword" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.servicePassword"></a>

```java
public java.lang.String getServicePassword();
```

- *Type:* java.lang.String

---

##### `servicePort`<sup>Required</sup> <a name="servicePort" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.servicePort"></a>

```java
public java.lang.String getServicePort();
```

- *Type:* java.lang.String

---

##### `serviceUri`<sup>Required</sup> <a name="serviceUri" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.serviceUri"></a>

```java
public java.lang.String getServiceUri();
```

- *Type:* java.lang.String

---

##### `serviceUsername`<sup>Required</sup> <a name="serviceUsername" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.serviceUsername"></a>

```java
public java.lang.String getServiceUsername();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `accessControlInput`<sup>Optional</sup> <a name="accessControlInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.accessControlInput"></a>

```java
public java.lang.Object getAccessControlInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `extendedAccessControlInput`<sup>Optional</sup> <a name="extendedAccessControlInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.extendedAccessControlInput"></a>

```java
public java.lang.Object getExtendedAccessControlInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `maintenanceWindowDowInput`<sup>Optional</sup> <a name="maintenanceWindowDowInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.maintenanceWindowDowInput"></a>

```java
public java.lang.String getMaintenanceWindowDowInput();
```

- *Type:* java.lang.String

---

##### `maintenanceWindowTimeInput`<sup>Optional</sup> <a name="maintenanceWindowTimeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.maintenanceWindowTimeInput"></a>

```java
public java.lang.String getMaintenanceWindowTimeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.networkInput"></a>

```java
public java.lang.Object getNetworkInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetwork">ManagedDatabaseOpensearchNetwork</a>>

---

##### `planInput`<sup>Optional</sup> <a name="planInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.planInput"></a>

```java
public java.lang.String getPlanInput();
```

- *Type:* java.lang.String

---

##### `poweredInput`<sup>Optional</sup> <a name="poweredInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.poweredInput"></a>

```java
public java.lang.Object getPoweredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.propertiesInput"></a>

```java
public ManagedDatabaseOpensearchProperties getPropertiesInput();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties">ManagedDatabaseOpensearchProperties</a>

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.zoneInput"></a>

```java
public java.lang.String getZoneInput();
```

- *Type:* java.lang.String

---

##### `accessControl`<sup>Required</sup> <a name="accessControl" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.accessControl"></a>

```java
public java.lang.Object getAccessControl();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `extendedAccessControl`<sup>Required</sup> <a name="extendedAccessControl" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.extendedAccessControl"></a>

```java
public java.lang.Object getExtendedAccessControl();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `maintenanceWindowDow`<sup>Required</sup> <a name="maintenanceWindowDow" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.maintenanceWindowDow"></a>

```java
public java.lang.String getMaintenanceWindowDow();
```

- *Type:* java.lang.String

---

##### `maintenanceWindowTime`<sup>Required</sup> <a name="maintenanceWindowTime" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.maintenanceWindowTime"></a>

```java
public java.lang.String getMaintenanceWindowTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.plan"></a>

```java
public java.lang.String getPlan();
```

- *Type:* java.lang.String

---

##### `powered`<sup>Required</sup> <a name="powered" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.powered"></a>

```java
public java.lang.Object getPowered();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedDatabaseOpensearchComponents <a name="ManagedDatabaseOpensearchComponents" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponents.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_opensearch.ManagedDatabaseOpensearchComponents;

ManagedDatabaseOpensearchComponents.builder()
    .build();
```


### ManagedDatabaseOpensearchConfig <a name="ManagedDatabaseOpensearchConfig" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_opensearch.ManagedDatabaseOpensearchConfig;

ManagedDatabaseOpensearchConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .plan(java.lang.String)
    .title(java.lang.String)
    .zone(java.lang.String)
//  .accessControl(java.lang.Boolean)
//  .accessControl(IResolvable)
//  .extendedAccessControl(java.lang.Boolean)
//  .extendedAccessControl(IResolvable)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .maintenanceWindowDow(java.lang.String)
//  .maintenanceWindowTime(java.lang.String)
//  .network(IResolvable)
//  .network(java.util.List<ManagedDatabaseOpensearchNetwork>)
//  .powered(java.lang.Boolean)
//  .powered(IResolvable)
//  .properties(ManagedDatabaseOpensearchProperties)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.plan">plan</a></code> | <code>java.lang.String</code> | Service plan to use. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.title">title</a></code> | <code>java.lang.String</code> | Title of a managed database instance. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.zone">zone</a></code> | <code>java.lang.String</code> | Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.accessControl">accessControl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enables users access control for OpenSearch service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.extendedAccessControl">extendedAccessControl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Grant access to top-level `_mget`, `_msearch` and `_bulk` APIs. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#id ManagedDatabaseOpensearch#id}. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User defined key-value pairs to classify the managed database. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.maintenanceWindowDow">maintenanceWindowDow</a></code> | <code>java.lang.String</code> | Maintenance window day of week. Lower case weekday name (monday, tuesday, ...). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.maintenanceWindowTime">maintenanceWindowTime</a></code> | <code>java.lang.String</code> | Maintenance window UTC time in hh:mm:ss format. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.network">network</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetwork">ManagedDatabaseOpensearchNetwork</a>></code> | network block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.powered">powered</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The administrative power state of the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties">ManagedDatabaseOpensearchProperties</a></code> | properties block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the service.

The name is used as a prefix for the logical hostname. Must be unique within an account

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#name ManagedDatabaseOpensearch#name}

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.plan"></a>

```java
public java.lang.String getPlan();
```

- *Type:* java.lang.String

Service plan to use.

This determines how much resources the instance will have. You can list available plans with `upctl database plans <type>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#plan ManagedDatabaseOpensearch#plan}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Title of a managed database instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#title ManagedDatabaseOpensearch#title}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#zone ManagedDatabaseOpensearch#zone}

---

##### `accessControl`<sup>Optional</sup> <a name="accessControl" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.accessControl"></a>

```java
public java.lang.Object getAccessControl();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enables users access control for OpenSearch service.

User access control rules will only be enforced if this attribute is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#access_control ManagedDatabaseOpensearch#access_control}

---

##### `extendedAccessControl`<sup>Optional</sup> <a name="extendedAccessControl" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.extendedAccessControl"></a>

```java
public java.lang.Object getExtendedAccessControl();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Grant access to top-level `_mget`, `_msearch` and `_bulk` APIs.

Users are limited to perform operations on indices based on the user-specific access control rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#extended_access_control ManagedDatabaseOpensearch#extended_access_control}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#id ManagedDatabaseOpensearch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User defined key-value pairs to classify the managed database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#labels ManagedDatabaseOpensearch#labels}

---

##### `maintenanceWindowDow`<sup>Optional</sup> <a name="maintenanceWindowDow" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.maintenanceWindowDow"></a>

```java
public java.lang.String getMaintenanceWindowDow();
```

- *Type:* java.lang.String

Maintenance window day of week. Lower case weekday name (monday, tuesday, ...).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#maintenance_window_dow ManagedDatabaseOpensearch#maintenance_window_dow}

---

##### `maintenanceWindowTime`<sup>Optional</sup> <a name="maintenanceWindowTime" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.maintenanceWindowTime"></a>

```java
public java.lang.String getMaintenanceWindowTime();
```

- *Type:* java.lang.String

Maintenance window UTC time in hh:mm:ss format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#maintenance_window_time ManagedDatabaseOpensearch#maintenance_window_time}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.network"></a>

```java
public java.lang.Object getNetwork();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetwork">ManagedDatabaseOpensearchNetwork</a>>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#network ManagedDatabaseOpensearch#network}

---

##### `powered`<sup>Optional</sup> <a name="powered" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.powered"></a>

```java
public java.lang.Object getPowered();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The administrative power state of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#powered ManagedDatabaseOpensearch#powered}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.properties"></a>

```java
public ManagedDatabaseOpensearchProperties getProperties();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties">ManagedDatabaseOpensearchProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#properties ManagedDatabaseOpensearch#properties}

---

### ManagedDatabaseOpensearchNetwork <a name="ManagedDatabaseOpensearchNetwork" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetwork.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_opensearch.ManagedDatabaseOpensearchNetwork;

ManagedDatabaseOpensearchNetwork.builder()
    .family(java.lang.String)
    .name(java.lang.String)
    .type(java.lang.String)
    .uuid(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetwork.property.family">family</a></code> | <code>java.lang.String</code> | Network family. Currently only `IPv4` is supported. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetwork.property.name">name</a></code> | <code>java.lang.String</code> | The name of the network. Must be unique within the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetwork.property.type">type</a></code> | <code>java.lang.String</code> | The type of the network. Must be private. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetwork.property.uuid">uuid</a></code> | <code>java.lang.String</code> | Private network UUID. Must reside in the same zone as the database. |

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetwork.property.family"></a>

```java
public java.lang.String getFamily();
```

- *Type:* java.lang.String

Network family. Currently only `IPv4` is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#family ManagedDatabaseOpensearch#family}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetwork.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the network. Must be unique within the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#name ManagedDatabaseOpensearch#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetwork.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of the network. Must be private.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#type ManagedDatabaseOpensearch#type}

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetwork.property.uuid"></a>

```java
public java.lang.String getUuid();
```

- *Type:* java.lang.String

Private network UUID. Must reside in the same zone as the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#uuid ManagedDatabaseOpensearch#uuid}

---

### ManagedDatabaseOpensearchNodeStates <a name="ManagedDatabaseOpensearchNodeStates" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStates.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_opensearch.ManagedDatabaseOpensearchNodeStates;

ManagedDatabaseOpensearchNodeStates.builder()
    .build();
```


### ManagedDatabaseOpensearchProperties <a name="ManagedDatabaseOpensearchProperties" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_opensearch.ManagedDatabaseOpensearchProperties;

ManagedDatabaseOpensearchProperties.builder()
//  .actionAutoCreateIndexEnabled(java.lang.Boolean)
//  .actionAutoCreateIndexEnabled(IResolvable)
//  .actionDestructiveRequiresName(java.lang.Boolean)
//  .actionDestructiveRequiresName(IResolvable)
//  .authFailureListeners(ManagedDatabaseOpensearchPropertiesAuthFailureListeners)
//  .automaticUtilityNetworkIpFilter(java.lang.Boolean)
//  .automaticUtilityNetworkIpFilter(IResolvable)
//  .azureMigration(ManagedDatabaseOpensearchPropertiesAzureMigration)
//  .clusterMaxShardsPerNode(java.lang.Number)
//  .clusterRoutingAllocationNodeConcurrentRecoveries(java.lang.Number)
//  .customDomain(java.lang.String)
//  .emailSenderName(java.lang.String)
//  .emailSenderPassword(java.lang.String)
//  .emailSenderUsername(java.lang.String)
//  .enableSecurityAudit(java.lang.Boolean)
//  .enableSecurityAudit(IResolvable)
//  .gcsMigration(ManagedDatabaseOpensearchPropertiesGcsMigration)
//  .httpMaxContentLength(java.lang.Number)
//  .httpMaxHeaderSize(java.lang.Number)
//  .httpMaxInitialLineLength(java.lang.Number)
//  .indexPatterns(java.util.List<java.lang.String>)
//  .indexRollup(ManagedDatabaseOpensearchPropertiesIndexRollup)
//  .indexTemplate(ManagedDatabaseOpensearchPropertiesIndexTemplate)
//  .indicesFielddataCacheSize(java.lang.Number)
//  .indicesMemoryIndexBufferSize(java.lang.Number)
//  .indicesMemoryMaxIndexBufferSize(java.lang.Number)
//  .indicesMemoryMinIndexBufferSize(java.lang.Number)
//  .indicesQueriesCacheSize(java.lang.Number)
//  .indicesQueryBoolMaxClauseCount(java.lang.Number)
//  .indicesRecoveryMaxBytesPerSec(java.lang.Number)
//  .indicesRecoveryMaxConcurrentFileChunks(java.lang.Number)
//  .ipFilter(java.util.List<java.lang.String>)
//  .ismEnabled(java.lang.Boolean)
//  .ismEnabled(IResolvable)
//  .ismHistoryEnabled(java.lang.Boolean)
//  .ismHistoryEnabled(IResolvable)
//  .ismHistoryMaxAge(java.lang.Number)
//  .ismHistoryMaxDocs(java.lang.Number)
//  .ismHistoryRolloverCheckPeriod(java.lang.Number)
//  .ismHistoryRolloverRetentionPeriod(java.lang.Number)
//  .keepIndexRefreshInterval(java.lang.Boolean)
//  .keepIndexRefreshInterval(IResolvable)
//  .knnMemoryCircuitBreakerEnabled(java.lang.Boolean)
//  .knnMemoryCircuitBreakerEnabled(IResolvable)
//  .knnMemoryCircuitBreakerLimit(java.lang.Number)
//  .openid(ManagedDatabaseOpensearchPropertiesOpenid)
//  .opensearchDashboards(ManagedDatabaseOpensearchPropertiesOpensearchDashboards)
//  .overrideMainResponseVersion(java.lang.Boolean)
//  .overrideMainResponseVersion(IResolvable)
//  .pluginsAlertingFilterByBackendRoles(java.lang.Boolean)
//  .pluginsAlertingFilterByBackendRoles(IResolvable)
//  .publicAccess(java.lang.Boolean)
//  .publicAccess(IResolvable)
//  .reindexRemoteWhitelist(java.util.List<java.lang.String>)
//  .s3Migration(ManagedDatabaseOpensearchPropertiesS3Migration)
//  .saml(ManagedDatabaseOpensearchPropertiesSaml)
//  .scriptMaxCompilationsRate(java.lang.String)
//  .searchMaxBuckets(java.lang.Number)
//  .serviceLog(java.lang.Boolean)
//  .serviceLog(IResolvable)
//  .threadPoolAnalyzeQueueSize(java.lang.Number)
//  .threadPoolAnalyzeSize(java.lang.Number)
//  .threadPoolForceMergeSize(java.lang.Number)
//  .threadPoolGetQueueSize(java.lang.Number)
//  .threadPoolGetSize(java.lang.Number)
//  .threadPoolSearchQueueSize(java.lang.Number)
//  .threadPoolSearchSize(java.lang.Number)
//  .threadPoolSearchThrottledQueueSize(java.lang.Number)
//  .threadPoolSearchThrottledSize(java.lang.Number)
//  .threadPoolWriteQueueSize(java.lang.Number)
//  .threadPoolWriteSize(java.lang.Number)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.actionAutoCreateIndexEnabled">actionAutoCreateIndexEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | action.auto_create_index. Explicitly allow or block automatic creation of indices. Defaults to true. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.actionDestructiveRequiresName">actionDestructiveRequiresName</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Require explicit index names when deleting. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.authFailureListeners">authFailureListeners</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListeners">ManagedDatabaseOpensearchPropertiesAuthFailureListeners</a></code> | auth_failure_listeners block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.automaticUtilityNetworkIpFilter">automaticUtilityNetworkIpFilter</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Automatic utility network IP Filter. Automatically allow connections from servers in the utility network within the same zone. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.azureMigration">azureMigration</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigration">ManagedDatabaseOpensearchPropertiesAzureMigration</a></code> | azure_migration block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.clusterMaxShardsPerNode">clusterMaxShardsPerNode</a></code> | <code>java.lang.Number</code> | Controls the number of shards allowed in the cluster per data node. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.clusterRoutingAllocationNodeConcurrentRecoveries">clusterRoutingAllocationNodeConcurrentRecoveries</a></code> | <code>java.lang.Number</code> | Concurrent incoming/outgoing shard recoveries per node. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.customDomain">customDomain</a></code> | <code>java.lang.String</code> | Custom domain. Serve the web frontend using a custom CNAME pointing to the Aiven DNS name. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.emailSenderName">emailSenderName</a></code> | <code>java.lang.String</code> | Sender name placeholder to be used in Opensearch Dashboards and Opensearch keystore. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.emailSenderPassword">emailSenderPassword</a></code> | <code>java.lang.String</code> | Sender password for Opensearch alerts to authenticate with SMTP server. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.emailSenderUsername">emailSenderUsername</a></code> | <code>java.lang.String</code> | Sender username for Opensearch alerts. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.enableSecurityAudit">enableSecurityAudit</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable/Disable security audit. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.gcsMigration">gcsMigration</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigration">ManagedDatabaseOpensearchPropertiesGcsMigration</a></code> | gcs_migration block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.httpMaxContentLength">httpMaxContentLength</a></code> | <code>java.lang.Number</code> | Maximum content length for HTTP requests to the OpenSearch HTTP API, in bytes. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.httpMaxHeaderSize">httpMaxHeaderSize</a></code> | <code>java.lang.Number</code> | The max size of allowed headers, in bytes. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.httpMaxInitialLineLength">httpMaxInitialLineLength</a></code> | <code>java.lang.Number</code> | The max length of an HTTP URL, in bytes. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indexPatterns">indexPatterns</a></code> | <code>java.util.List<java.lang.String></code> | Index patterns. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indexRollup">indexRollup</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollup">ManagedDatabaseOpensearchPropertiesIndexRollup</a></code> | index_rollup block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indexTemplate">indexTemplate</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplate">ManagedDatabaseOpensearchPropertiesIndexTemplate</a></code> | index_template block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indicesFielddataCacheSize">indicesFielddataCacheSize</a></code> | <code>java.lang.Number</code> | Relative amount. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indicesMemoryIndexBufferSize">indicesMemoryIndexBufferSize</a></code> | <code>java.lang.Number</code> | Percentage value. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indicesMemoryMaxIndexBufferSize">indicesMemoryMaxIndexBufferSize</a></code> | <code>java.lang.Number</code> | Absolute value. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indicesMemoryMinIndexBufferSize">indicesMemoryMinIndexBufferSize</a></code> | <code>java.lang.Number</code> | Absolute value. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indicesQueriesCacheSize">indicesQueriesCacheSize</a></code> | <code>java.lang.Number</code> | Percentage value. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indicesQueryBoolMaxClauseCount">indicesQueryBoolMaxClauseCount</a></code> | <code>java.lang.Number</code> | Maximum number of clauses Lucene BooleanQuery can have. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indicesRecoveryMaxBytesPerSec">indicesRecoveryMaxBytesPerSec</a></code> | <code>java.lang.Number</code> | Limits total inbound and outbound recovery traffic for each node. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indicesRecoveryMaxConcurrentFileChunks">indicesRecoveryMaxConcurrentFileChunks</a></code> | <code>java.lang.Number</code> | Number of file chunks sent in parallel for each recovery. Defaults to 2. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.ipFilter">ipFilter</a></code> | <code>java.util.List<java.lang.String></code> | IP filter. Allow incoming connections from CIDR address block, e.g. '10.20.0.0/16'. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.ismEnabled">ismEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether ISM is enabled or not. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.ismHistoryEnabled">ismHistoryEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether audit history is enabled or not. The logs from ISM are automatically indexed to a logs document. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.ismHistoryMaxAge">ismHistoryMaxAge</a></code> | <code>java.lang.Number</code> | The maximum age before rolling over the audit history index in hours. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.ismHistoryMaxDocs">ismHistoryMaxDocs</a></code> | <code>java.lang.Number</code> | The maximum number of documents before rolling over the audit history index. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.ismHistoryRolloverCheckPeriod">ismHistoryRolloverCheckPeriod</a></code> | <code>java.lang.Number</code> | The time between rollover checks for the audit history index in hours. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.ismHistoryRolloverRetentionPeriod">ismHistoryRolloverRetentionPeriod</a></code> | <code>java.lang.Number</code> | How long audit history indices are kept in days. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.keepIndexRefreshInterval">keepIndexRefreshInterval</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Don't reset index.refresh_interval to the default value. Aiven automation resets index.refresh_interval to default value for every index to be sure that indices are always visible to search. If it doesn't fit your case, you can disable this by setting up this flag to true. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.knnMemoryCircuitBreakerEnabled">knnMemoryCircuitBreakerEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable or disable KNN memory circuit breaker. Defaults to true. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.knnMemoryCircuitBreakerLimit">knnMemoryCircuitBreakerLimit</a></code> | <code>java.lang.Number</code> | Maximum amount of memory that can be used for KNN index. Defaults to 50% of the JVM heap size. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.openid">openid</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid">ManagedDatabaseOpensearchPropertiesOpenid</a></code> | openid block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.opensearchDashboards">opensearchDashboards</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboards">ManagedDatabaseOpensearchPropertiesOpensearchDashboards</a></code> | opensearch_dashboards block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.overrideMainResponseVersion">overrideMainResponseVersion</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Compatibility mode sets OpenSearch to report its version as 7.10 so clients continue to work. Default is false. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.pluginsAlertingFilterByBackendRoles">pluginsAlertingFilterByBackendRoles</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable or disable filtering of alerting by backend roles. Requires Security plugin. Defaults to false. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.publicAccess">publicAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Public Access. Allow access to the service from the public Internet. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.reindexRemoteWhitelist">reindexRemoteWhitelist</a></code> | <code>java.util.List<java.lang.String></code> | Whitelisted addresses for reindexing. Changing this value will cause all OpenSearch instances to restart. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.s3Migration">s3Migration</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3Migration">ManagedDatabaseOpensearchPropertiesS3Migration</a></code> | s3_migration block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.saml">saml</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml">ManagedDatabaseOpensearchPropertiesSaml</a></code> | saml block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.scriptMaxCompilationsRate">scriptMaxCompilationsRate</a></code> | <code>java.lang.String</code> | Script max compilation rate - circuit breaker to prevent/minimize OOMs. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.searchMaxBuckets">searchMaxBuckets</a></code> | <code>java.lang.Number</code> | Maximum number of aggregation buckets allowed in a single response. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.serviceLog">serviceLog</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Service logging. Store logs for the service so that they are available in the HTTP API and console. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolAnalyzeQueueSize">threadPoolAnalyzeQueueSize</a></code> | <code>java.lang.Number</code> | analyze thread pool queue size. Size for the thread pool queue. See documentation for exact details. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolAnalyzeSize">threadPoolAnalyzeSize</a></code> | <code>java.lang.Number</code> | analyze thread pool size. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolForceMergeSize">threadPoolForceMergeSize</a></code> | <code>java.lang.Number</code> | force_merge thread pool size. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolGetQueueSize">threadPoolGetQueueSize</a></code> | <code>java.lang.Number</code> | get thread pool queue size. Size for the thread pool queue. See documentation for exact details. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolGetSize">threadPoolGetSize</a></code> | <code>java.lang.Number</code> | get thread pool size. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolSearchQueueSize">threadPoolSearchQueueSize</a></code> | <code>java.lang.Number</code> | search thread pool queue size. Size for the thread pool queue. See documentation for exact details. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolSearchSize">threadPoolSearchSize</a></code> | <code>java.lang.Number</code> | search thread pool size. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolSearchThrottledQueueSize">threadPoolSearchThrottledQueueSize</a></code> | <code>java.lang.Number</code> | search_throttled thread pool queue size. Size for the thread pool queue. See documentation for exact details. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolSearchThrottledSize">threadPoolSearchThrottledSize</a></code> | <code>java.lang.Number</code> | search_throttled thread pool size. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolWriteQueueSize">threadPoolWriteQueueSize</a></code> | <code>java.lang.Number</code> | write thread pool queue size. Size for the thread pool queue. See documentation for exact details. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolWriteSize">threadPoolWriteSize</a></code> | <code>java.lang.Number</code> | write thread pool size. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.version">version</a></code> | <code>java.lang.String</code> | OpenSearch major version. |

---

##### `actionAutoCreateIndexEnabled`<sup>Optional</sup> <a name="actionAutoCreateIndexEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.actionAutoCreateIndexEnabled"></a>

```java
public java.lang.Object getActionAutoCreateIndexEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

action.auto_create_index. Explicitly allow or block automatic creation of indices. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#action_auto_create_index_enabled ManagedDatabaseOpensearch#action_auto_create_index_enabled}

---

##### `actionDestructiveRequiresName`<sup>Optional</sup> <a name="actionDestructiveRequiresName" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.actionDestructiveRequiresName"></a>

```java
public java.lang.Object getActionDestructiveRequiresName();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Require explicit index names when deleting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#action_destructive_requires_name ManagedDatabaseOpensearch#action_destructive_requires_name}

---

##### `authFailureListeners`<sup>Optional</sup> <a name="authFailureListeners" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.authFailureListeners"></a>

```java
public ManagedDatabaseOpensearchPropertiesAuthFailureListeners getAuthFailureListeners();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListeners">ManagedDatabaseOpensearchPropertiesAuthFailureListeners</a>

auth_failure_listeners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#auth_failure_listeners ManagedDatabaseOpensearch#auth_failure_listeners}

---

##### `automaticUtilityNetworkIpFilter`<sup>Optional</sup> <a name="automaticUtilityNetworkIpFilter" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.automaticUtilityNetworkIpFilter"></a>

```java
public java.lang.Object getAutomaticUtilityNetworkIpFilter();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Automatic utility network IP Filter. Automatically allow connections from servers in the utility network within the same zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#automatic_utility_network_ip_filter ManagedDatabaseOpensearch#automatic_utility_network_ip_filter}

---

##### `azureMigration`<sup>Optional</sup> <a name="azureMigration" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.azureMigration"></a>

```java
public ManagedDatabaseOpensearchPropertiesAzureMigration getAzureMigration();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigration">ManagedDatabaseOpensearchPropertiesAzureMigration</a>

azure_migration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#azure_migration ManagedDatabaseOpensearch#azure_migration}

---

##### `clusterMaxShardsPerNode`<sup>Optional</sup> <a name="clusterMaxShardsPerNode" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.clusterMaxShardsPerNode"></a>

```java
public java.lang.Number getClusterMaxShardsPerNode();
```

- *Type:* java.lang.Number

Controls the number of shards allowed in the cluster per data node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#cluster_max_shards_per_node ManagedDatabaseOpensearch#cluster_max_shards_per_node}

---

##### `clusterRoutingAllocationNodeConcurrentRecoveries`<sup>Optional</sup> <a name="clusterRoutingAllocationNodeConcurrentRecoveries" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.clusterRoutingAllocationNodeConcurrentRecoveries"></a>

```java
public java.lang.Number getClusterRoutingAllocationNodeConcurrentRecoveries();
```

- *Type:* java.lang.Number

Concurrent incoming/outgoing shard recoveries per node.

How many concurrent incoming/outgoing shard recoveries (normally replicas) are allowed to happen on a node. Defaults to 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#cluster_routing_allocation_node_concurrent_recoveries ManagedDatabaseOpensearch#cluster_routing_allocation_node_concurrent_recoveries}

---

##### `customDomain`<sup>Optional</sup> <a name="customDomain" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.customDomain"></a>

```java
public java.lang.String getCustomDomain();
```

- *Type:* java.lang.String

Custom domain. Serve the web frontend using a custom CNAME pointing to the Aiven DNS name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#custom_domain ManagedDatabaseOpensearch#custom_domain}

---

##### `emailSenderName`<sup>Optional</sup> <a name="emailSenderName" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.emailSenderName"></a>

```java
public java.lang.String getEmailSenderName();
```

- *Type:* java.lang.String

Sender name placeholder to be used in Opensearch Dashboards and Opensearch keystore.

This should be identical to the Sender name defined in Opensearch dashboards.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#email_sender_name ManagedDatabaseOpensearch#email_sender_name}

---

##### `emailSenderPassword`<sup>Optional</sup> <a name="emailSenderPassword" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.emailSenderPassword"></a>

```java
public java.lang.String getEmailSenderPassword();
```

- *Type:* java.lang.String

Sender password for Opensearch alerts to authenticate with SMTP server.

Sender password for Opensearch alerts to authenticate with SMTP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#email_sender_password ManagedDatabaseOpensearch#email_sender_password}

---

##### `emailSenderUsername`<sup>Optional</sup> <a name="emailSenderUsername" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.emailSenderUsername"></a>

```java
public java.lang.String getEmailSenderUsername();
```

- *Type:* java.lang.String

Sender username for Opensearch alerts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#email_sender_username ManagedDatabaseOpensearch#email_sender_username}

---

##### `enableSecurityAudit`<sup>Optional</sup> <a name="enableSecurityAudit" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.enableSecurityAudit"></a>

```java
public java.lang.Object getEnableSecurityAudit();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable/Disable security audit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#enable_security_audit ManagedDatabaseOpensearch#enable_security_audit}

---

##### `gcsMigration`<sup>Optional</sup> <a name="gcsMigration" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.gcsMigration"></a>

```java
public ManagedDatabaseOpensearchPropertiesGcsMigration getGcsMigration();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigration">ManagedDatabaseOpensearchPropertiesGcsMigration</a>

gcs_migration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#gcs_migration ManagedDatabaseOpensearch#gcs_migration}

---

##### `httpMaxContentLength`<sup>Optional</sup> <a name="httpMaxContentLength" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.httpMaxContentLength"></a>

```java
public java.lang.Number getHttpMaxContentLength();
```

- *Type:* java.lang.Number

Maximum content length for HTTP requests to the OpenSearch HTTP API, in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#http_max_content_length ManagedDatabaseOpensearch#http_max_content_length}

---

##### `httpMaxHeaderSize`<sup>Optional</sup> <a name="httpMaxHeaderSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.httpMaxHeaderSize"></a>

```java
public java.lang.Number getHttpMaxHeaderSize();
```

- *Type:* java.lang.Number

The max size of allowed headers, in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#http_max_header_size ManagedDatabaseOpensearch#http_max_header_size}

---

##### `httpMaxInitialLineLength`<sup>Optional</sup> <a name="httpMaxInitialLineLength" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.httpMaxInitialLineLength"></a>

```java
public java.lang.Number getHttpMaxInitialLineLength();
```

- *Type:* java.lang.Number

The max length of an HTTP URL, in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#http_max_initial_line_length ManagedDatabaseOpensearch#http_max_initial_line_length}

---

##### `indexPatterns`<sup>Optional</sup> <a name="indexPatterns" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indexPatterns"></a>

```java
public java.util.List<java.lang.String> getIndexPatterns();
```

- *Type:* java.util.List<java.lang.String>

Index patterns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#index_patterns ManagedDatabaseOpensearch#index_patterns}

---

##### `indexRollup`<sup>Optional</sup> <a name="indexRollup" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indexRollup"></a>

```java
public ManagedDatabaseOpensearchPropertiesIndexRollup getIndexRollup();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollup">ManagedDatabaseOpensearchPropertiesIndexRollup</a>

index_rollup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#index_rollup ManagedDatabaseOpensearch#index_rollup}

---

##### `indexTemplate`<sup>Optional</sup> <a name="indexTemplate" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indexTemplate"></a>

```java
public ManagedDatabaseOpensearchPropertiesIndexTemplate getIndexTemplate();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplate">ManagedDatabaseOpensearchPropertiesIndexTemplate</a>

index_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#index_template ManagedDatabaseOpensearch#index_template}

---

##### `indicesFielddataCacheSize`<sup>Optional</sup> <a name="indicesFielddataCacheSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indicesFielddataCacheSize"></a>

```java
public java.lang.Number getIndicesFielddataCacheSize();
```

- *Type:* java.lang.Number

Relative amount.

Maximum amount of heap memory used for field data cache. This is an expert setting; decreasing the value too much will increase overhead of loading field data; too much memory used for field data cache will decrease amount of heap available for other operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#indices_fielddata_cache_size ManagedDatabaseOpensearch#indices_fielddata_cache_size}

---

##### `indicesMemoryIndexBufferSize`<sup>Optional</sup> <a name="indicesMemoryIndexBufferSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indicesMemoryIndexBufferSize"></a>

```java
public java.lang.Number getIndicesMemoryIndexBufferSize();
```

- *Type:* java.lang.Number

Percentage value.

Default is 10%. Total amount of heap used for indexing buffer, before writing segments to disk. This is an expert setting. Too low value will slow down indexing; too high value will increase indexing performance but causes performance issues for query performance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#indices_memory_index_buffer_size ManagedDatabaseOpensearch#indices_memory_index_buffer_size}

---

##### `indicesMemoryMaxIndexBufferSize`<sup>Optional</sup> <a name="indicesMemoryMaxIndexBufferSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indicesMemoryMaxIndexBufferSize"></a>

```java
public java.lang.Number getIndicesMemoryMaxIndexBufferSize();
```

- *Type:* java.lang.Number

Absolute value.

Default is unbound. Doesn't work without indices.memory.index_buffer_size. Maximum amount of heap used for query cache, an absolute indices.memory.index_buffer_size maximum hard limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#indices_memory_max_index_buffer_size ManagedDatabaseOpensearch#indices_memory_max_index_buffer_size}

---

##### `indicesMemoryMinIndexBufferSize`<sup>Optional</sup> <a name="indicesMemoryMinIndexBufferSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indicesMemoryMinIndexBufferSize"></a>

```java
public java.lang.Number getIndicesMemoryMinIndexBufferSize();
```

- *Type:* java.lang.Number

Absolute value.

Default is 48mb. Doesn't work without indices.memory.index_buffer_size. Minimum amount of heap used for query cache, an absolute indices.memory.index_buffer_size minimal hard limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#indices_memory_min_index_buffer_size ManagedDatabaseOpensearch#indices_memory_min_index_buffer_size}

---

##### `indicesQueriesCacheSize`<sup>Optional</sup> <a name="indicesQueriesCacheSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indicesQueriesCacheSize"></a>

```java
public java.lang.Number getIndicesQueriesCacheSize();
```

- *Type:* java.lang.Number

Percentage value.

Default is 10%. Maximum amount of heap used for query cache. This is an expert setting. Too low value will decrease query performance and increase performance for other operations; too high value will cause issues with other OpenSearch functionality.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#indices_queries_cache_size ManagedDatabaseOpensearch#indices_queries_cache_size}

---

##### `indicesQueryBoolMaxClauseCount`<sup>Optional</sup> <a name="indicesQueryBoolMaxClauseCount" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indicesQueryBoolMaxClauseCount"></a>

```java
public java.lang.Number getIndicesQueryBoolMaxClauseCount();
```

- *Type:* java.lang.Number

Maximum number of clauses Lucene BooleanQuery can have.

The default value (1024) is relatively high, and increasing it may cause performance issues. Investigate other approaches first before increasing this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#indices_query_bool_max_clause_count ManagedDatabaseOpensearch#indices_query_bool_max_clause_count}

---

##### `indicesRecoveryMaxBytesPerSec`<sup>Optional</sup> <a name="indicesRecoveryMaxBytesPerSec" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indicesRecoveryMaxBytesPerSec"></a>

```java
public java.lang.Number getIndicesRecoveryMaxBytesPerSec();
```

- *Type:* java.lang.Number

Limits total inbound and outbound recovery traffic for each node.

Applies to both peer recoveries as well as snapshot recoveries (i.e., restores from a snapshot). Defaults to 40mb.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#indices_recovery_max_bytes_per_sec ManagedDatabaseOpensearch#indices_recovery_max_bytes_per_sec}

---

##### `indicesRecoveryMaxConcurrentFileChunks`<sup>Optional</sup> <a name="indicesRecoveryMaxConcurrentFileChunks" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indicesRecoveryMaxConcurrentFileChunks"></a>

```java
public java.lang.Number getIndicesRecoveryMaxConcurrentFileChunks();
```

- *Type:* java.lang.Number

Number of file chunks sent in parallel for each recovery. Defaults to 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#indices_recovery_max_concurrent_file_chunks ManagedDatabaseOpensearch#indices_recovery_max_concurrent_file_chunks}

---

##### `ipFilter`<sup>Optional</sup> <a name="ipFilter" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.ipFilter"></a>

```java
public java.util.List<java.lang.String> getIpFilter();
```

- *Type:* java.util.List<java.lang.String>

IP filter. Allow incoming connections from CIDR address block, e.g. '10.20.0.0/16'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#ip_filter ManagedDatabaseOpensearch#ip_filter}

---

##### `ismEnabled`<sup>Optional</sup> <a name="ismEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.ismEnabled"></a>

```java
public java.lang.Object getIsmEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether ISM is enabled or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#ism_enabled ManagedDatabaseOpensearch#ism_enabled}

---

##### `ismHistoryEnabled`<sup>Optional</sup> <a name="ismHistoryEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.ismHistoryEnabled"></a>

```java
public java.lang.Object getIsmHistoryEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether audit history is enabled or not. The logs from ISM are automatically indexed to a logs document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#ism_history_enabled ManagedDatabaseOpensearch#ism_history_enabled}

---

##### `ismHistoryMaxAge`<sup>Optional</sup> <a name="ismHistoryMaxAge" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.ismHistoryMaxAge"></a>

```java
public java.lang.Number getIsmHistoryMaxAge();
```

- *Type:* java.lang.Number

The maximum age before rolling over the audit history index in hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#ism_history_max_age ManagedDatabaseOpensearch#ism_history_max_age}

---

##### `ismHistoryMaxDocs`<sup>Optional</sup> <a name="ismHistoryMaxDocs" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.ismHistoryMaxDocs"></a>

```java
public java.lang.Number getIsmHistoryMaxDocs();
```

- *Type:* java.lang.Number

The maximum number of documents before rolling over the audit history index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#ism_history_max_docs ManagedDatabaseOpensearch#ism_history_max_docs}

---

##### `ismHistoryRolloverCheckPeriod`<sup>Optional</sup> <a name="ismHistoryRolloverCheckPeriod" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.ismHistoryRolloverCheckPeriod"></a>

```java
public java.lang.Number getIsmHistoryRolloverCheckPeriod();
```

- *Type:* java.lang.Number

The time between rollover checks for the audit history index in hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#ism_history_rollover_check_period ManagedDatabaseOpensearch#ism_history_rollover_check_period}

---

##### `ismHistoryRolloverRetentionPeriod`<sup>Optional</sup> <a name="ismHistoryRolloverRetentionPeriod" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.ismHistoryRolloverRetentionPeriod"></a>

```java
public java.lang.Number getIsmHistoryRolloverRetentionPeriod();
```

- *Type:* java.lang.Number

How long audit history indices are kept in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#ism_history_rollover_retention_period ManagedDatabaseOpensearch#ism_history_rollover_retention_period}

---

##### `keepIndexRefreshInterval`<sup>Optional</sup> <a name="keepIndexRefreshInterval" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.keepIndexRefreshInterval"></a>

```java
public java.lang.Object getKeepIndexRefreshInterval();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Don't reset index.refresh_interval to the default value. Aiven automation resets index.refresh_interval to default value for every index to be sure that indices are always visible to search. If it doesn't fit your case, you can disable this by setting up this flag to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#keep_index_refresh_interval ManagedDatabaseOpensearch#keep_index_refresh_interval}

---

##### `knnMemoryCircuitBreakerEnabled`<sup>Optional</sup> <a name="knnMemoryCircuitBreakerEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.knnMemoryCircuitBreakerEnabled"></a>

```java
public java.lang.Object getKnnMemoryCircuitBreakerEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable or disable KNN memory circuit breaker. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#knn_memory_circuit_breaker_enabled ManagedDatabaseOpensearch#knn_memory_circuit_breaker_enabled}

---

##### `knnMemoryCircuitBreakerLimit`<sup>Optional</sup> <a name="knnMemoryCircuitBreakerLimit" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.knnMemoryCircuitBreakerLimit"></a>

```java
public java.lang.Number getKnnMemoryCircuitBreakerLimit();
```

- *Type:* java.lang.Number

Maximum amount of memory that can be used for KNN index. Defaults to 50% of the JVM heap size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#knn_memory_circuit_breaker_limit ManagedDatabaseOpensearch#knn_memory_circuit_breaker_limit}

---

##### `openid`<sup>Optional</sup> <a name="openid" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.openid"></a>

```java
public ManagedDatabaseOpensearchPropertiesOpenid getOpenid();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid">ManagedDatabaseOpensearchPropertiesOpenid</a>

openid block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#openid ManagedDatabaseOpensearch#openid}

---

##### `opensearchDashboards`<sup>Optional</sup> <a name="opensearchDashboards" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.opensearchDashboards"></a>

```java
public ManagedDatabaseOpensearchPropertiesOpensearchDashboards getOpensearchDashboards();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboards">ManagedDatabaseOpensearchPropertiesOpensearchDashboards</a>

opensearch_dashboards block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#opensearch_dashboards ManagedDatabaseOpensearch#opensearch_dashboards}

---

##### `overrideMainResponseVersion`<sup>Optional</sup> <a name="overrideMainResponseVersion" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.overrideMainResponseVersion"></a>

```java
public java.lang.Object getOverrideMainResponseVersion();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Compatibility mode sets OpenSearch to report its version as 7.10 so clients continue to work. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#override_main_response_version ManagedDatabaseOpensearch#override_main_response_version}

---

##### `pluginsAlertingFilterByBackendRoles`<sup>Optional</sup> <a name="pluginsAlertingFilterByBackendRoles" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.pluginsAlertingFilterByBackendRoles"></a>

```java
public java.lang.Object getPluginsAlertingFilterByBackendRoles();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable or disable filtering of alerting by backend roles. Requires Security plugin. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#plugins_alerting_filter_by_backend_roles ManagedDatabaseOpensearch#plugins_alerting_filter_by_backend_roles}

---

##### `publicAccess`<sup>Optional</sup> <a name="publicAccess" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.publicAccess"></a>

```java
public java.lang.Object getPublicAccess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Public Access. Allow access to the service from the public Internet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#public_access ManagedDatabaseOpensearch#public_access}

---

##### `reindexRemoteWhitelist`<sup>Optional</sup> <a name="reindexRemoteWhitelist" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.reindexRemoteWhitelist"></a>

```java
public java.util.List<java.lang.String> getReindexRemoteWhitelist();
```

- *Type:* java.util.List<java.lang.String>

Whitelisted addresses for reindexing. Changing this value will cause all OpenSearch instances to restart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#reindex_remote_whitelist ManagedDatabaseOpensearch#reindex_remote_whitelist}

---

##### `s3Migration`<sup>Optional</sup> <a name="s3Migration" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.s3Migration"></a>

```java
public ManagedDatabaseOpensearchPropertiesS3Migration getS3Migration();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3Migration">ManagedDatabaseOpensearchPropertiesS3Migration</a>

s3_migration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#s3_migration ManagedDatabaseOpensearch#s3_migration}

---

##### `saml`<sup>Optional</sup> <a name="saml" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.saml"></a>

```java
public ManagedDatabaseOpensearchPropertiesSaml getSaml();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml">ManagedDatabaseOpensearchPropertiesSaml</a>

saml block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#saml ManagedDatabaseOpensearch#saml}

---

##### `scriptMaxCompilationsRate`<sup>Optional</sup> <a name="scriptMaxCompilationsRate" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.scriptMaxCompilationsRate"></a>

```java
public java.lang.String getScriptMaxCompilationsRate();
```

- *Type:* java.lang.String

Script max compilation rate - circuit breaker to prevent/minimize OOMs.

Script compilation circuit breaker limits the number of inline script compilations within a period of time. Default is use-context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#script_max_compilations_rate ManagedDatabaseOpensearch#script_max_compilations_rate}

---

##### `searchMaxBuckets`<sup>Optional</sup> <a name="searchMaxBuckets" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.searchMaxBuckets"></a>

```java
public java.lang.Number getSearchMaxBuckets();
```

- *Type:* java.lang.Number

Maximum number of aggregation buckets allowed in a single response.

OpenSearch default value is used when this is not defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#search_max_buckets ManagedDatabaseOpensearch#search_max_buckets}

---

##### `serviceLog`<sup>Optional</sup> <a name="serviceLog" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.serviceLog"></a>

```java
public java.lang.Object getServiceLog();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Service logging. Store logs for the service so that they are available in the HTTP API and console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#service_log ManagedDatabaseOpensearch#service_log}

---

##### `threadPoolAnalyzeQueueSize`<sup>Optional</sup> <a name="threadPoolAnalyzeQueueSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolAnalyzeQueueSize"></a>

```java
public java.lang.Number getThreadPoolAnalyzeQueueSize();
```

- *Type:* java.lang.Number

analyze thread pool queue size. Size for the thread pool queue. See documentation for exact details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#thread_pool_analyze_queue_size ManagedDatabaseOpensearch#thread_pool_analyze_queue_size}

---

##### `threadPoolAnalyzeSize`<sup>Optional</sup> <a name="threadPoolAnalyzeSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolAnalyzeSize"></a>

```java
public java.lang.Number getThreadPoolAnalyzeSize();
```

- *Type:* java.lang.Number

analyze thread pool size.

Size for the thread pool. See documentation for exact details. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#thread_pool_analyze_size ManagedDatabaseOpensearch#thread_pool_analyze_size}

---

##### `threadPoolForceMergeSize`<sup>Optional</sup> <a name="threadPoolForceMergeSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolForceMergeSize"></a>

```java
public java.lang.Number getThreadPoolForceMergeSize();
```

- *Type:* java.lang.Number

force_merge thread pool size.

Size for the thread pool. See documentation for exact details. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#thread_pool_force_merge_size ManagedDatabaseOpensearch#thread_pool_force_merge_size}

---

##### `threadPoolGetQueueSize`<sup>Optional</sup> <a name="threadPoolGetQueueSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolGetQueueSize"></a>

```java
public java.lang.Number getThreadPoolGetQueueSize();
```

- *Type:* java.lang.Number

get thread pool queue size. Size for the thread pool queue. See documentation for exact details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#thread_pool_get_queue_size ManagedDatabaseOpensearch#thread_pool_get_queue_size}

---

##### `threadPoolGetSize`<sup>Optional</sup> <a name="threadPoolGetSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolGetSize"></a>

```java
public java.lang.Number getThreadPoolGetSize();
```

- *Type:* java.lang.Number

get thread pool size.

Size for the thread pool. See documentation for exact details. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#thread_pool_get_size ManagedDatabaseOpensearch#thread_pool_get_size}

---

##### `threadPoolSearchQueueSize`<sup>Optional</sup> <a name="threadPoolSearchQueueSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolSearchQueueSize"></a>

```java
public java.lang.Number getThreadPoolSearchQueueSize();
```

- *Type:* java.lang.Number

search thread pool queue size. Size for the thread pool queue. See documentation for exact details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#thread_pool_search_queue_size ManagedDatabaseOpensearch#thread_pool_search_queue_size}

---

##### `threadPoolSearchSize`<sup>Optional</sup> <a name="threadPoolSearchSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolSearchSize"></a>

```java
public java.lang.Number getThreadPoolSearchSize();
```

- *Type:* java.lang.Number

search thread pool size.

Size for the thread pool. See documentation for exact details. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#thread_pool_search_size ManagedDatabaseOpensearch#thread_pool_search_size}

---

##### `threadPoolSearchThrottledQueueSize`<sup>Optional</sup> <a name="threadPoolSearchThrottledQueueSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolSearchThrottledQueueSize"></a>

```java
public java.lang.Number getThreadPoolSearchThrottledQueueSize();
```

- *Type:* java.lang.Number

search_throttled thread pool queue size. Size for the thread pool queue. See documentation for exact details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#thread_pool_search_throttled_queue_size ManagedDatabaseOpensearch#thread_pool_search_throttled_queue_size}

---

##### `threadPoolSearchThrottledSize`<sup>Optional</sup> <a name="threadPoolSearchThrottledSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolSearchThrottledSize"></a>

```java
public java.lang.Number getThreadPoolSearchThrottledSize();
```

- *Type:* java.lang.Number

search_throttled thread pool size.

Size for the thread pool. See documentation for exact details. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#thread_pool_search_throttled_size ManagedDatabaseOpensearch#thread_pool_search_throttled_size}

---

##### `threadPoolWriteQueueSize`<sup>Optional</sup> <a name="threadPoolWriteQueueSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolWriteQueueSize"></a>

```java
public java.lang.Number getThreadPoolWriteQueueSize();
```

- *Type:* java.lang.Number

write thread pool queue size. Size for the thread pool queue. See documentation for exact details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#thread_pool_write_queue_size ManagedDatabaseOpensearch#thread_pool_write_queue_size}

---

##### `threadPoolWriteSize`<sup>Optional</sup> <a name="threadPoolWriteSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolWriteSize"></a>

```java
public java.lang.Number getThreadPoolWriteSize();
```

- *Type:* java.lang.Number

write thread pool size.

Size for the thread pool. See documentation for exact details. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#thread_pool_write_size ManagedDatabaseOpensearch#thread_pool_write_size}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

OpenSearch major version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#version ManagedDatabaseOpensearch#version}

---

### ManagedDatabaseOpensearchPropertiesAuthFailureListeners <a name="ManagedDatabaseOpensearchPropertiesAuthFailureListeners" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListeners"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListeners.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_opensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListeners;

ManagedDatabaseOpensearchPropertiesAuthFailureListeners.builder()
//  .internalAuthenticationBackendLimiting(ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting)
//  .ipRateLimiting(ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListeners.property.internalAuthenticationBackendLimiting">internalAuthenticationBackendLimiting</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting">ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting</a></code> | internal_authentication_backend_limiting block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListeners.property.ipRateLimiting">ipRateLimiting</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting">ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting</a></code> | ip_rate_limiting block. |

---

##### `internalAuthenticationBackendLimiting`<sup>Optional</sup> <a name="internalAuthenticationBackendLimiting" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListeners.property.internalAuthenticationBackendLimiting"></a>

```java
public ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting getInternalAuthenticationBackendLimiting();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting">ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting</a>

internal_authentication_backend_limiting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#internal_authentication_backend_limiting ManagedDatabaseOpensearch#internal_authentication_backend_limiting}

---

##### `ipRateLimiting`<sup>Optional</sup> <a name="ipRateLimiting" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListeners.property.ipRateLimiting"></a>

```java
public ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting getIpRateLimiting();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting">ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting</a>

ip_rate_limiting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#ip_rate_limiting ManagedDatabaseOpensearch#ip_rate_limiting}

---

### ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting <a name="ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_opensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting;

ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting.builder()
//  .allowedTries(java.lang.Number)
//  .authenticationBackend(java.lang.String)
//  .blockExpirySeconds(java.lang.Number)
//  .maxBlockedClients(java.lang.Number)
//  .maxTrackedClients(java.lang.Number)
//  .timeWindowSeconds(java.lang.Number)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting.property.allowedTries">allowedTries</a></code> | <code>java.lang.Number</code> | The number of login attempts allowed before login is blocked. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting.property.authenticationBackend">authenticationBackend</a></code> | <code>java.lang.String</code> | The internal backend. Enter `internal`. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting.property.blockExpirySeconds">blockExpirySeconds</a></code> | <code>java.lang.Number</code> | The duration of time that login remains blocked after a failed login. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting.property.maxBlockedClients">maxBlockedClients</a></code> | <code>java.lang.Number</code> | The maximum number of blocked IP addresses. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting.property.maxTrackedClients">maxTrackedClients</a></code> | <code>java.lang.Number</code> | The maximum number of tracked IP addresses that have failed login. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting.property.timeWindowSeconds">timeWindowSeconds</a></code> | <code>java.lang.Number</code> | The window of time in which the value for `allowed_tries` is enforced. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting.property.type">type</a></code> | <code>java.lang.String</code> | The type of rate limiting. |

---

##### `allowedTries`<sup>Optional</sup> <a name="allowedTries" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting.property.allowedTries"></a>

```java
public java.lang.Number getAllowedTries();
```

- *Type:* java.lang.Number

The number of login attempts allowed before login is blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#allowed_tries ManagedDatabaseOpensearch#allowed_tries}

---

##### `authenticationBackend`<sup>Optional</sup> <a name="authenticationBackend" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting.property.authenticationBackend"></a>

```java
public java.lang.String getAuthenticationBackend();
```

- *Type:* java.lang.String

The internal backend. Enter `internal`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#authentication_backend ManagedDatabaseOpensearch#authentication_backend}

---

##### `blockExpirySeconds`<sup>Optional</sup> <a name="blockExpirySeconds" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting.property.blockExpirySeconds"></a>

```java
public java.lang.Number getBlockExpirySeconds();
```

- *Type:* java.lang.Number

The duration of time that login remains blocked after a failed login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#block_expiry_seconds ManagedDatabaseOpensearch#block_expiry_seconds}

---

##### `maxBlockedClients`<sup>Optional</sup> <a name="maxBlockedClients" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting.property.maxBlockedClients"></a>

```java
public java.lang.Number getMaxBlockedClients();
```

- *Type:* java.lang.Number

The maximum number of blocked IP addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#max_blocked_clients ManagedDatabaseOpensearch#max_blocked_clients}

---

##### `maxTrackedClients`<sup>Optional</sup> <a name="maxTrackedClients" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting.property.maxTrackedClients"></a>

```java
public java.lang.Number getMaxTrackedClients();
```

- *Type:* java.lang.Number

The maximum number of tracked IP addresses that have failed login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#max_tracked_clients ManagedDatabaseOpensearch#max_tracked_clients}

---

##### `timeWindowSeconds`<sup>Optional</sup> <a name="timeWindowSeconds" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting.property.timeWindowSeconds"></a>

```java
public java.lang.Number getTimeWindowSeconds();
```

- *Type:* java.lang.Number

The window of time in which the value for `allowed_tries` is enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#time_window_seconds ManagedDatabaseOpensearch#time_window_seconds}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of rate limiting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#type ManagedDatabaseOpensearch#type}

---

### ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting <a name="ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_opensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting;

ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting.builder()
//  .allowedTries(java.lang.Number)
//  .blockExpirySeconds(java.lang.Number)
//  .maxBlockedClients(java.lang.Number)
//  .maxTrackedClients(java.lang.Number)
//  .timeWindowSeconds(java.lang.Number)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting.property.allowedTries">allowedTries</a></code> | <code>java.lang.Number</code> | The number of login attempts allowed before login is blocked. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting.property.blockExpirySeconds">blockExpirySeconds</a></code> | <code>java.lang.Number</code> | The duration of time that login remains blocked after a failed login. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting.property.maxBlockedClients">maxBlockedClients</a></code> | <code>java.lang.Number</code> | The maximum number of blocked IP addresses. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting.property.maxTrackedClients">maxTrackedClients</a></code> | <code>java.lang.Number</code> | The maximum number of tracked IP addresses that have failed login. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting.property.timeWindowSeconds">timeWindowSeconds</a></code> | <code>java.lang.Number</code> | The window of time in which the value for `allowed_tries` is enforced. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting.property.type">type</a></code> | <code>java.lang.String</code> | The type of rate limiting. |

---

##### `allowedTries`<sup>Optional</sup> <a name="allowedTries" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting.property.allowedTries"></a>

```java
public java.lang.Number getAllowedTries();
```

- *Type:* java.lang.Number

The number of login attempts allowed before login is blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#allowed_tries ManagedDatabaseOpensearch#allowed_tries}

---

##### `blockExpirySeconds`<sup>Optional</sup> <a name="blockExpirySeconds" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting.property.blockExpirySeconds"></a>

```java
public java.lang.Number getBlockExpirySeconds();
```

- *Type:* java.lang.Number

The duration of time that login remains blocked after a failed login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#block_expiry_seconds ManagedDatabaseOpensearch#block_expiry_seconds}

---

##### `maxBlockedClients`<sup>Optional</sup> <a name="maxBlockedClients" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting.property.maxBlockedClients"></a>

```java
public java.lang.Number getMaxBlockedClients();
```

- *Type:* java.lang.Number

The maximum number of blocked IP addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#max_blocked_clients ManagedDatabaseOpensearch#max_blocked_clients}

---

##### `maxTrackedClients`<sup>Optional</sup> <a name="maxTrackedClients" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting.property.maxTrackedClients"></a>

```java
public java.lang.Number getMaxTrackedClients();
```

- *Type:* java.lang.Number

The maximum number of tracked IP addresses that have failed login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#max_tracked_clients ManagedDatabaseOpensearch#max_tracked_clients}

---

##### `timeWindowSeconds`<sup>Optional</sup> <a name="timeWindowSeconds" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting.property.timeWindowSeconds"></a>

```java
public java.lang.Number getTimeWindowSeconds();
```

- *Type:* java.lang.Number

The window of time in which the value for `allowed_tries` is enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#time_window_seconds ManagedDatabaseOpensearch#time_window_seconds}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of rate limiting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#type ManagedDatabaseOpensearch#type}

---

### ManagedDatabaseOpensearchPropertiesAzureMigration <a name="ManagedDatabaseOpensearchPropertiesAzureMigration" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_opensearch.ManagedDatabaseOpensearchPropertiesAzureMigration;

ManagedDatabaseOpensearchPropertiesAzureMigration.builder()
//  .account(java.lang.String)
//  .basePath(java.lang.String)
//  .chunkSize(java.lang.String)
//  .compress(java.lang.Boolean)
//  .compress(IResolvable)
//  .container(java.lang.String)
//  .endpointSuffix(java.lang.String)
//  .key(java.lang.String)
//  .sasToken(java.lang.String)
//  .snapshotName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigration.property.account">account</a></code> | <code>java.lang.String</code> | Account name. Azure account name. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigration.property.basePath">basePath</a></code> | <code>java.lang.String</code> | The path to the repository data within its container. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigration.property.chunkSize">chunkSize</a></code> | <code>java.lang.String</code> | Chunk size. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigration.property.compress">compress</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Metadata files are stored in compressed format. when set to true metadata files are stored in compressed format. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigration.property.container">container</a></code> | <code>java.lang.String</code> | Azure container name. Azure container name. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigration.property.endpointSuffix">endpointSuffix</a></code> | <code>java.lang.String</code> | Endpoint suffix. Defines the DNS suffix for Azure Storage endpoints. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigration.property.key">key</a></code> | <code>java.lang.String</code> | Account secret key. Azure account secret key. One of key or sas_token should be specified. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigration.property.sasToken">sasToken</a></code> | <code>java.lang.String</code> | SAS token. A shared access signatures (SAS) token. One of key or sas_token should be specified. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigration.property.snapshotName">snapshotName</a></code> | <code>java.lang.String</code> | The snapshot name to restore from. The snapshot name to restore from. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigration.property.account"></a>

```java
public java.lang.String getAccount();
```

- *Type:* java.lang.String

Account name. Azure account name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#account ManagedDatabaseOpensearch#account}

---

##### `basePath`<sup>Optional</sup> <a name="basePath" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigration.property.basePath"></a>

```java
public java.lang.String getBasePath();
```

- *Type:* java.lang.String

The path to the repository data within its container.

The path to the repository data within its container. The value of this setting should not start or end with a /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#base_path ManagedDatabaseOpensearch#base_path}

---

##### `chunkSize`<sup>Optional</sup> <a name="chunkSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigration.property.chunkSize"></a>

```java
public java.lang.String getChunkSize();
```

- *Type:* java.lang.String

Chunk size.

Big files can be broken down into chunks during snapshotting if needed. Should be the same as for the 3rd party repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#chunk_size ManagedDatabaseOpensearch#chunk_size}

---

##### `compress`<sup>Optional</sup> <a name="compress" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigration.property.compress"></a>

```java
public java.lang.Object getCompress();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Metadata files are stored in compressed format. when set to true metadata files are stored in compressed format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#compress ManagedDatabaseOpensearch#compress}

---

##### `container`<sup>Optional</sup> <a name="container" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigration.property.container"></a>

```java
public java.lang.String getContainer();
```

- *Type:* java.lang.String

Azure container name. Azure container name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#container ManagedDatabaseOpensearch#container}

---

##### `endpointSuffix`<sup>Optional</sup> <a name="endpointSuffix" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigration.property.endpointSuffix"></a>

```java
public java.lang.String getEndpointSuffix();
```

- *Type:* java.lang.String

Endpoint suffix. Defines the DNS suffix for Azure Storage endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#endpoint_suffix ManagedDatabaseOpensearch#endpoint_suffix}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigration.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Account secret key. Azure account secret key. One of key or sas_token should be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#key ManagedDatabaseOpensearch#key}

---

##### `sasToken`<sup>Optional</sup> <a name="sasToken" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigration.property.sasToken"></a>

```java
public java.lang.String getSasToken();
```

- *Type:* java.lang.String

SAS token. A shared access signatures (SAS) token. One of key or sas_token should be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#sas_token ManagedDatabaseOpensearch#sas_token}

---

##### `snapshotName`<sup>Optional</sup> <a name="snapshotName" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigration.property.snapshotName"></a>

```java
public java.lang.String getSnapshotName();
```

- *Type:* java.lang.String

The snapshot name to restore from. The snapshot name to restore from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#snapshot_name ManagedDatabaseOpensearch#snapshot_name}

---

### ManagedDatabaseOpensearchPropertiesGcsMigration <a name="ManagedDatabaseOpensearchPropertiesGcsMigration" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_opensearch.ManagedDatabaseOpensearchPropertiesGcsMigration;

ManagedDatabaseOpensearchPropertiesGcsMigration.builder()
//  .basePath(java.lang.String)
//  .bucket(java.lang.String)
//  .chunkSize(java.lang.String)
//  .compress(java.lang.Boolean)
//  .compress(IResolvable)
//  .credentials(java.lang.String)
//  .snapshotName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigration.property.basePath">basePath</a></code> | <code>java.lang.String</code> | The path to the repository data within its container. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigration.property.bucket">bucket</a></code> | <code>java.lang.String</code> | The path to the repository data within its container. Google Cloud Storage bucket name. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigration.property.chunkSize">chunkSize</a></code> | <code>java.lang.String</code> | Chunk size. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigration.property.compress">compress</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Metadata files are stored in compressed format. when set to true metadata files are stored in compressed format. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigration.property.credentials">credentials</a></code> | <code>java.lang.String</code> | Credentials. Google Cloud Storage credentials file content. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigration.property.snapshotName">snapshotName</a></code> | <code>java.lang.String</code> | The snapshot name to restore from. The snapshot name to restore from. |

---

##### `basePath`<sup>Optional</sup> <a name="basePath" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigration.property.basePath"></a>

```java
public java.lang.String getBasePath();
```

- *Type:* java.lang.String

The path to the repository data within its container.

The path to the repository data within its container. The value of this setting should not start or end with a /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#base_path ManagedDatabaseOpensearch#base_path}

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigration.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

The path to the repository data within its container. Google Cloud Storage bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#bucket ManagedDatabaseOpensearch#bucket}

---

##### `chunkSize`<sup>Optional</sup> <a name="chunkSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigration.property.chunkSize"></a>

```java
public java.lang.String getChunkSize();
```

- *Type:* java.lang.String

Chunk size.

Big files can be broken down into chunks during snapshotting if needed. Should be the same as for the 3rd party repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#chunk_size ManagedDatabaseOpensearch#chunk_size}

---

##### `compress`<sup>Optional</sup> <a name="compress" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigration.property.compress"></a>

```java
public java.lang.Object getCompress();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Metadata files are stored in compressed format. when set to true metadata files are stored in compressed format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#compress ManagedDatabaseOpensearch#compress}

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigration.property.credentials"></a>

```java
public java.lang.String getCredentials();
```

- *Type:* java.lang.String

Credentials. Google Cloud Storage credentials file content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#credentials ManagedDatabaseOpensearch#credentials}

---

##### `snapshotName`<sup>Optional</sup> <a name="snapshotName" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigration.property.snapshotName"></a>

```java
public java.lang.String getSnapshotName();
```

- *Type:* java.lang.String

The snapshot name to restore from. The snapshot name to restore from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#snapshot_name ManagedDatabaseOpensearch#snapshot_name}

---

### ManagedDatabaseOpensearchPropertiesIndexRollup <a name="ManagedDatabaseOpensearchPropertiesIndexRollup" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_opensearch.ManagedDatabaseOpensearchPropertiesIndexRollup;

ManagedDatabaseOpensearchPropertiesIndexRollup.builder()
//  .rollupDashboardsEnabled(java.lang.Boolean)
//  .rollupDashboardsEnabled(IResolvable)
//  .rollupEnabled(java.lang.Boolean)
//  .rollupEnabled(IResolvable)
//  .rollupSearchBackoffCount(java.lang.Number)
//  .rollupSearchBackoffMillis(java.lang.Number)
//  .rollupSearchSearchAllJobs(java.lang.Boolean)
//  .rollupSearchSearchAllJobs(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollup.property.rollupDashboardsEnabled">rollupDashboardsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | plugins.rollup.dashboards.enabled. Whether rollups are enabled in OpenSearch Dashboards. Defaults to true. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollup.property.rollupEnabled">rollupEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | plugins.rollup.enabled. Whether the rollup plugin is enabled. Defaults to true. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollup.property.rollupSearchBackoffCount">rollupSearchBackoffCount</a></code> | <code>java.lang.Number</code> | plugins.rollup.search.backoff_count. How many retries the plugin should attempt for failed rollup jobs. Defaults to 5. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollup.property.rollupSearchBackoffMillis">rollupSearchBackoffMillis</a></code> | <code>java.lang.Number</code> | plugins.rollup.search.backoff_millis. The backoff time between retries for failed rollup jobs. Defaults to 1000ms. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollup.property.rollupSearchSearchAllJobs">rollupSearchSearchAllJobs</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | plugins.rollup.search.all_jobs. Whether OpenSearch should return all jobs that match all specified search terms. If disabled, OpenSearch returns just one, as opposed to all, of the jobs that matches the search terms. Defaults to false. |

---

##### `rollupDashboardsEnabled`<sup>Optional</sup> <a name="rollupDashboardsEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollup.property.rollupDashboardsEnabled"></a>

```java
public java.lang.Object getRollupDashboardsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

plugins.rollup.dashboards.enabled. Whether rollups are enabled in OpenSearch Dashboards. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#rollup_dashboards_enabled ManagedDatabaseOpensearch#rollup_dashboards_enabled}

---

##### `rollupEnabled`<sup>Optional</sup> <a name="rollupEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollup.property.rollupEnabled"></a>

```java
public java.lang.Object getRollupEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

plugins.rollup.enabled. Whether the rollup plugin is enabled. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#rollup_enabled ManagedDatabaseOpensearch#rollup_enabled}

---

##### `rollupSearchBackoffCount`<sup>Optional</sup> <a name="rollupSearchBackoffCount" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollup.property.rollupSearchBackoffCount"></a>

```java
public java.lang.Number getRollupSearchBackoffCount();
```

- *Type:* java.lang.Number

plugins.rollup.search.backoff_count. How many retries the plugin should attempt for failed rollup jobs. Defaults to 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#rollup_search_backoff_count ManagedDatabaseOpensearch#rollup_search_backoff_count}

---

##### `rollupSearchBackoffMillis`<sup>Optional</sup> <a name="rollupSearchBackoffMillis" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollup.property.rollupSearchBackoffMillis"></a>

```java
public java.lang.Number getRollupSearchBackoffMillis();
```

- *Type:* java.lang.Number

plugins.rollup.search.backoff_millis. The backoff time between retries for failed rollup jobs. Defaults to 1000ms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#rollup_search_backoff_millis ManagedDatabaseOpensearch#rollup_search_backoff_millis}

---

##### `rollupSearchSearchAllJobs`<sup>Optional</sup> <a name="rollupSearchSearchAllJobs" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollup.property.rollupSearchSearchAllJobs"></a>

```java
public java.lang.Object getRollupSearchSearchAllJobs();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

plugins.rollup.search.all_jobs. Whether OpenSearch should return all jobs that match all specified search terms. If disabled, OpenSearch returns just one, as opposed to all, of the jobs that matches the search terms. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#rollup_search_search_all_jobs ManagedDatabaseOpensearch#rollup_search_search_all_jobs}

---

### ManagedDatabaseOpensearchPropertiesIndexTemplate <a name="ManagedDatabaseOpensearchPropertiesIndexTemplate" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_opensearch.ManagedDatabaseOpensearchPropertiesIndexTemplate;

ManagedDatabaseOpensearchPropertiesIndexTemplate.builder()
//  .mappingNestedObjectsLimit(java.lang.Number)
//  .numberOfReplicas(java.lang.Number)
//  .numberOfShards(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplate.property.mappingNestedObjectsLimit">mappingNestedObjectsLimit</a></code> | <code>java.lang.Number</code> | index.mapping.nested_objects.limit. The maximum number of nested JSON objects that a single document can contain across all nested types. This limit helps to prevent out of memory errors when a document contains too many nested objects. Default is 10000. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplate.property.numberOfReplicas">numberOfReplicas</a></code> | <code>java.lang.Number</code> | The number of replicas each primary shard has. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplate.property.numberOfShards">numberOfShards</a></code> | <code>java.lang.Number</code> | The number of primary shards that an index should have. |

---

##### `mappingNestedObjectsLimit`<sup>Optional</sup> <a name="mappingNestedObjectsLimit" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplate.property.mappingNestedObjectsLimit"></a>

```java
public java.lang.Number getMappingNestedObjectsLimit();
```

- *Type:* java.lang.Number

index.mapping.nested_objects.limit. The maximum number of nested JSON objects that a single document can contain across all nested types. This limit helps to prevent out of memory errors when a document contains too many nested objects. Default is 10000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#mapping_nested_objects_limit ManagedDatabaseOpensearch#mapping_nested_objects_limit}

---

##### `numberOfReplicas`<sup>Optional</sup> <a name="numberOfReplicas" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplate.property.numberOfReplicas"></a>

```java
public java.lang.Number getNumberOfReplicas();
```

- *Type:* java.lang.Number

The number of replicas each primary shard has.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#number_of_replicas ManagedDatabaseOpensearch#number_of_replicas}

---

##### `numberOfShards`<sup>Optional</sup> <a name="numberOfShards" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplate.property.numberOfShards"></a>

```java
public java.lang.Number getNumberOfShards();
```

- *Type:* java.lang.Number

The number of primary shards that an index should have.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#number_of_shards ManagedDatabaseOpensearch#number_of_shards}

---

### ManagedDatabaseOpensearchPropertiesOpenid <a name="ManagedDatabaseOpensearchPropertiesOpenid" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_opensearch.ManagedDatabaseOpensearchPropertiesOpenid;

ManagedDatabaseOpensearchPropertiesOpenid.builder()
//  .clientId(java.lang.String)
//  .clientSecret(java.lang.String)
//  .connectUrl(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .header(java.lang.String)
//  .jwtHeader(java.lang.String)
//  .jwtUrlParameter(java.lang.String)
//  .refreshRateLimitCount(java.lang.Number)
//  .refreshRateLimitTimeWindowMs(java.lang.Number)
//  .rolesKey(java.lang.String)
//  .scope(java.lang.String)
//  .subjectKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.clientId">clientId</a></code> | <code>java.lang.String</code> | The ID of the OpenID Connect client. The ID of the OpenID Connect client configured in your IdP. Required. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | The client secret of the OpenID Connect. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.connectUrl">connectUrl</a></code> | <code>java.lang.String</code> | OpenID Connect metadata/configuration URL. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable or disable OpenSearch OpenID Connect authentication. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.header">header</a></code> | <code>java.lang.String</code> | HTTP header name of the JWT token. HTTP header name of the JWT token. Optional. Default is Authorization. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.jwtHeader">jwtHeader</a></code> | <code>java.lang.String</code> | The HTTP header that stores the token. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.jwtUrlParameter">jwtUrlParameter</a></code> | <code>java.lang.String</code> | URL JWT token. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.refreshRateLimitCount">refreshRateLimitCount</a></code> | <code>java.lang.Number</code> | The maximum number of unknown key IDs in the time frame. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.refreshRateLimitTimeWindowMs">refreshRateLimitTimeWindowMs</a></code> | <code>java.lang.Number</code> | The time frame to use when checking the maximum number of unknown key IDs, in milliseconds. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.rolesKey">rolesKey</a></code> | <code>java.lang.String</code> | The key in the JSON payload that stores the user’s roles. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.scope">scope</a></code> | <code>java.lang.String</code> | The scope of the identity token issued by the IdP. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.subjectKey">subjectKey</a></code> | <code>java.lang.String</code> | The key in the JSON payload that stores the user’s name. |

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

The ID of the OpenID Connect client. The ID of the OpenID Connect client configured in your IdP. Required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#client_id ManagedDatabaseOpensearch#client_id}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

The client secret of the OpenID Connect.

The client secret of the OpenID Connect client configured in your IdP. Required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#client_secret ManagedDatabaseOpensearch#client_secret}

---

##### `connectUrl`<sup>Optional</sup> <a name="connectUrl" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.connectUrl"></a>

```java
public java.lang.String getConnectUrl();
```

- *Type:* java.lang.String

OpenID Connect metadata/configuration URL.

The URL of your IdP where the Security plugin can find the OpenID Connect metadata/configuration settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#connect_url ManagedDatabaseOpensearch#connect_url}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable or disable OpenSearch OpenID Connect authentication.

Enables or disables OpenID Connect authentication for OpenSearch. When enabled, users can authenticate using OpenID Connect with an Identity Provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#enabled ManagedDatabaseOpensearch#enabled}

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.header"></a>

```java
public java.lang.String getHeader();
```

- *Type:* java.lang.String

HTTP header name of the JWT token. HTTP header name of the JWT token. Optional. Default is Authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#header ManagedDatabaseOpensearch#header}

---

##### `jwtHeader`<sup>Optional</sup> <a name="jwtHeader" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.jwtHeader"></a>

```java
public java.lang.String getJwtHeader();
```

- *Type:* java.lang.String

The HTTP header that stores the token.

The HTTP header that stores the token. Typically the Authorization header with the Bearer schema: Authorization: Bearer <token>. Optional. Default is Authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#jwt_header ManagedDatabaseOpensearch#jwt_header}

---

##### `jwtUrlParameter`<sup>Optional</sup> <a name="jwtUrlParameter" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.jwtUrlParameter"></a>

```java
public java.lang.String getJwtUrlParameter();
```

- *Type:* java.lang.String

URL JWT token.

If the token is not transmitted in the HTTP header, but as an URL parameter, define the name of the parameter here. Optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#jwt_url_parameter ManagedDatabaseOpensearch#jwt_url_parameter}

---

##### `refreshRateLimitCount`<sup>Optional</sup> <a name="refreshRateLimitCount" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.refreshRateLimitCount"></a>

```java
public java.lang.Number getRefreshRateLimitCount();
```

- *Type:* java.lang.Number

The maximum number of unknown key IDs in the time frame.

The maximum number of unknown key IDs in the time frame. Default is 10. Optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#refresh_rate_limit_count ManagedDatabaseOpensearch#refresh_rate_limit_count}

---

##### `refreshRateLimitTimeWindowMs`<sup>Optional</sup> <a name="refreshRateLimitTimeWindowMs" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.refreshRateLimitTimeWindowMs"></a>

```java
public java.lang.Number getRefreshRateLimitTimeWindowMs();
```

- *Type:* java.lang.Number

The time frame to use when checking the maximum number of unknown key IDs, in milliseconds.

The time frame to use when checking the maximum number of unknown key IDs, in milliseconds. Optional.Default is 10000 (10 seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#refresh_rate_limit_time_window_ms ManagedDatabaseOpensearch#refresh_rate_limit_time_window_ms}

---

##### `rolesKey`<sup>Optional</sup> <a name="rolesKey" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.rolesKey"></a>

```java
public java.lang.String getRolesKey();
```

- *Type:* java.lang.String

The key in the JSON payload that stores the user’s roles.

The key in the JSON payload that stores the user’s roles. The value of this key must be a comma-separated list of roles. Required only if you want to use roles in the JWT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#roles_key ManagedDatabaseOpensearch#roles_key}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

The scope of the identity token issued by the IdP.

The scope of the identity token issued by the IdP. Optional. Default is openid profile email address phone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#scope ManagedDatabaseOpensearch#scope}

---

##### `subjectKey`<sup>Optional</sup> <a name="subjectKey" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.subjectKey"></a>

```java
public java.lang.String getSubjectKey();
```

- *Type:* java.lang.String

The key in the JSON payload that stores the user’s name.

The key in the JSON payload that stores the user’s name. If not defined, the subject registered claim is used. Most IdP providers use the preferred_username claim. Optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#subject_key ManagedDatabaseOpensearch#subject_key}

---

### ManagedDatabaseOpensearchPropertiesOpensearchDashboards <a name="ManagedDatabaseOpensearchPropertiesOpensearchDashboards" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboards"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboards.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_opensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboards;

ManagedDatabaseOpensearchPropertiesOpensearchDashboards.builder()
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .maxOldSpaceSize(java.lang.Number)
//  .opensearchRequestTimeout(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboards.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable or disable OpenSearch Dashboards. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboards.property.maxOldSpaceSize">maxOldSpaceSize</a></code> | <code>java.lang.Number</code> | Limits the maximum amount of memory (in MiB) the OpenSearch Dashboards process can use. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboards.property.opensearchRequestTimeout">opensearchRequestTimeout</a></code> | <code>java.lang.Number</code> | Timeout in milliseconds for requests made by OpenSearch Dashboards towards OpenSearch. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboards.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable or disable OpenSearch Dashboards.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#enabled ManagedDatabaseOpensearch#enabled}

---

##### `maxOldSpaceSize`<sup>Optional</sup> <a name="maxOldSpaceSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboards.property.maxOldSpaceSize"></a>

```java
public java.lang.Number getMaxOldSpaceSize();
```

- *Type:* java.lang.Number

Limits the maximum amount of memory (in MiB) the OpenSearch Dashboards process can use.

This sets the max_old_space_size option of the nodejs running the OpenSearch Dashboards. Note: the memory reserved by OpenSearch Dashboards is not available for OpenSearch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#max_old_space_size ManagedDatabaseOpensearch#max_old_space_size}

---

##### `opensearchRequestTimeout`<sup>Optional</sup> <a name="opensearchRequestTimeout" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboards.property.opensearchRequestTimeout"></a>

```java
public java.lang.Number getOpensearchRequestTimeout();
```

- *Type:* java.lang.Number

Timeout in milliseconds for requests made by OpenSearch Dashboards towards OpenSearch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#opensearch_request_timeout ManagedDatabaseOpensearch#opensearch_request_timeout}

---

### ManagedDatabaseOpensearchPropertiesS3Migration <a name="ManagedDatabaseOpensearchPropertiesS3Migration" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3Migration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3Migration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_opensearch.ManagedDatabaseOpensearchPropertiesS3Migration;

ManagedDatabaseOpensearchPropertiesS3Migration.builder()
//  .accessKey(java.lang.String)
//  .basePath(java.lang.String)
//  .bucket(java.lang.String)
//  .chunkSize(java.lang.String)
//  .compress(java.lang.Boolean)
//  .compress(IResolvable)
//  .endpoint(java.lang.String)
//  .region(java.lang.String)
//  .secretKey(java.lang.String)
//  .serverSideEncryption(java.lang.Boolean)
//  .serverSideEncryption(IResolvable)
//  .snapshotName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3Migration.property.accessKey">accessKey</a></code> | <code>java.lang.String</code> | AWS Access key. AWS Access key. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3Migration.property.basePath">basePath</a></code> | <code>java.lang.String</code> | The path to the repository data within its container. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3Migration.property.bucket">bucket</a></code> | <code>java.lang.String</code> | S3 bucket name. S3 bucket name. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3Migration.property.chunkSize">chunkSize</a></code> | <code>java.lang.String</code> | Chunk size. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3Migration.property.compress">compress</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Metadata files are stored in compressed format. when set to true metadata files are stored in compressed format. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3Migration.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | The S3 service endpoint to connect. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3Migration.property.region">region</a></code> | <code>java.lang.String</code> | S3 region. S3 region. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3Migration.property.secretKey">secretKey</a></code> | <code>java.lang.String</code> | AWS secret key. AWS secret key. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3Migration.property.serverSideEncryption">serverSideEncryption</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Server side encryption. When set to true files are encrypted on server side. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3Migration.property.snapshotName">snapshotName</a></code> | <code>java.lang.String</code> | The snapshot name to restore from. The snapshot name to restore from. |

---

##### `accessKey`<sup>Optional</sup> <a name="accessKey" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3Migration.property.accessKey"></a>

```java
public java.lang.String getAccessKey();
```

- *Type:* java.lang.String

AWS Access key. AWS Access key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#access_key ManagedDatabaseOpensearch#access_key}

---

##### `basePath`<sup>Optional</sup> <a name="basePath" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3Migration.property.basePath"></a>

```java
public java.lang.String getBasePath();
```

- *Type:* java.lang.String

The path to the repository data within its container.

The path to the repository data within its container. The value of this setting should not start or end with a /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#base_path ManagedDatabaseOpensearch#base_path}

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3Migration.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

S3 bucket name. S3 bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#bucket ManagedDatabaseOpensearch#bucket}

---

##### `chunkSize`<sup>Optional</sup> <a name="chunkSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3Migration.property.chunkSize"></a>

```java
public java.lang.String getChunkSize();
```

- *Type:* java.lang.String

Chunk size.

Big files can be broken down into chunks during snapshotting if needed. Should be the same as for the 3rd party repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#chunk_size ManagedDatabaseOpensearch#chunk_size}

---

##### `compress`<sup>Optional</sup> <a name="compress" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3Migration.property.compress"></a>

```java
public java.lang.Object getCompress();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Metadata files are stored in compressed format. when set to true metadata files are stored in compressed format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#compress ManagedDatabaseOpensearch#compress}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3Migration.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

The S3 service endpoint to connect.

The S3 service endpoint to connect to. If you are using an S3-compatible service then you should set this to the service’s endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#endpoint ManagedDatabaseOpensearch#endpoint}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3Migration.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

S3 region. S3 region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#region ManagedDatabaseOpensearch#region}

---

##### `secretKey`<sup>Optional</sup> <a name="secretKey" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3Migration.property.secretKey"></a>

```java
public java.lang.String getSecretKey();
```

- *Type:* java.lang.String

AWS secret key. AWS secret key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#secret_key ManagedDatabaseOpensearch#secret_key}

---

##### `serverSideEncryption`<sup>Optional</sup> <a name="serverSideEncryption" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3Migration.property.serverSideEncryption"></a>

```java
public java.lang.Object getServerSideEncryption();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Server side encryption. When set to true files are encrypted on server side.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#server_side_encryption ManagedDatabaseOpensearch#server_side_encryption}

---

##### `snapshotName`<sup>Optional</sup> <a name="snapshotName" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3Migration.property.snapshotName"></a>

```java
public java.lang.String getSnapshotName();
```

- *Type:* java.lang.String

The snapshot name to restore from. The snapshot name to restore from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#snapshot_name ManagedDatabaseOpensearch#snapshot_name}

---

### ManagedDatabaseOpensearchPropertiesSaml <a name="ManagedDatabaseOpensearchPropertiesSaml" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_opensearch.ManagedDatabaseOpensearchPropertiesSaml;

ManagedDatabaseOpensearchPropertiesSaml.builder()
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .idpEntityId(java.lang.String)
//  .idpMetadataUrl(java.lang.String)
//  .idpPemtrustedcasContent(java.lang.String)
//  .rolesKey(java.lang.String)
//  .spEntityId(java.lang.String)
//  .subjectKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable or disable OpenSearch SAML authentication. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml.property.idpEntityId">idpEntityId</a></code> | <code>java.lang.String</code> | Identity Provider Entity ID. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml.property.idpMetadataUrl">idpMetadataUrl</a></code> | <code>java.lang.String</code> | Identity Provider (IdP) SAML metadata URL. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml.property.idpPemtrustedcasContent">idpPemtrustedcasContent</a></code> | <code>java.lang.String</code> | PEM-encoded root CA Content for SAML IdP server verification. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml.property.rolesKey">rolesKey</a></code> | <code>java.lang.String</code> | SAML response role attribute. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml.property.spEntityId">spEntityId</a></code> | <code>java.lang.String</code> | Service Provider Entity ID. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml.property.subjectKey">subjectKey</a></code> | <code>java.lang.String</code> | SAML response subject attribute. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable or disable OpenSearch SAML authentication.

Enables or disables SAML-based authentication for OpenSearch. When enabled, users can authenticate using SAML with an Identity Provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#enabled ManagedDatabaseOpensearch#enabled}

---

##### `idpEntityId`<sup>Optional</sup> <a name="idpEntityId" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml.property.idpEntityId"></a>

```java
public java.lang.String getIdpEntityId();
```

- *Type:* java.lang.String

Identity Provider Entity ID.

The unique identifier for the Identity Provider (IdP) entity that is used for SAML authentication. This value is typically provided by the IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#idp_entity_id ManagedDatabaseOpensearch#idp_entity_id}

---

##### `idpMetadataUrl`<sup>Optional</sup> <a name="idpMetadataUrl" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml.property.idpMetadataUrl"></a>

```java
public java.lang.String getIdpMetadataUrl();
```

- *Type:* java.lang.String

Identity Provider (IdP) SAML metadata URL.

The URL of the SAML metadata for the Identity Provider (IdP). This is used to configure SAML-based authentication with the IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#idp_metadata_url ManagedDatabaseOpensearch#idp_metadata_url}

---

##### `idpPemtrustedcasContent`<sup>Optional</sup> <a name="idpPemtrustedcasContent" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml.property.idpPemtrustedcasContent"></a>

```java
public java.lang.String getIdpPemtrustedcasContent();
```

- *Type:* java.lang.String

PEM-encoded root CA Content for SAML IdP server verification.

This parameter specifies the PEM-encoded root certificate authority (CA) content for the SAML identity provider (IdP) server verification. The root CA content is used to verify the SSL/TLS certificate presented by the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#idp_pemtrustedcas_content ManagedDatabaseOpensearch#idp_pemtrustedcas_content}

---

##### `rolesKey`<sup>Optional</sup> <a name="rolesKey" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml.property.rolesKey"></a>

```java
public java.lang.String getRolesKey();
```

- *Type:* java.lang.String

SAML response role attribute.

Optional. Specifies the attribute in the SAML response where role information is stored, if available. Role attributes are not required for SAML authentication, but can be included in SAML assertions by most Identity Providers (IdPs) to determine user access levels or permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#roles_key ManagedDatabaseOpensearch#roles_key}

---

##### `spEntityId`<sup>Optional</sup> <a name="spEntityId" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml.property.spEntityId"></a>

```java
public java.lang.String getSpEntityId();
```

- *Type:* java.lang.String

Service Provider Entity ID.

The unique identifier for the Service Provider (SP) entity that is used for SAML authentication. This value is typically provided by the SP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#sp_entity_id ManagedDatabaseOpensearch#sp_entity_id}

---

##### `subjectKey`<sup>Optional</sup> <a name="subjectKey" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml.property.subjectKey"></a>

```java
public java.lang.String getSubjectKey();
```

- *Type:* java.lang.String

SAML response subject attribute.

Optional. Specifies the attribute in the SAML response where the subject identifier is stored. If not configured, the NameID attribute is used by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.14.0/docs/resources/managed_database_opensearch#subject_key ManagedDatabaseOpensearch#subject_key}

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedDatabaseOpensearchComponentsList <a name="ManagedDatabaseOpensearchComponentsList" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_opensearch.ManagedDatabaseOpensearchComponentsList;

new ManagedDatabaseOpensearchComponentsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.get"></a>

```java
public ManagedDatabaseOpensearchComponentsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ManagedDatabaseOpensearchComponentsOutputReference <a name="ManagedDatabaseOpensearchComponentsOutputReference" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_opensearch.ManagedDatabaseOpensearchComponentsOutputReference;

new ManagedDatabaseOpensearchComponentsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.component">component</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.route">route</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.usage">usage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponents">ManagedDatabaseOpensearchComponents</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `component`<sup>Required</sup> <a name="component" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.component"></a>

```java
public java.lang.String getComponent();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `route`<sup>Required</sup> <a name="route" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.route"></a>

```java
public java.lang.String getRoute();
```

- *Type:* java.lang.String

---

##### `usage`<sup>Required</sup> <a name="usage" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.usage"></a>

```java
public java.lang.String getUsage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.internalValue"></a>

```java
public ManagedDatabaseOpensearchComponents getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponents">ManagedDatabaseOpensearchComponents</a>

---


### ManagedDatabaseOpensearchNetworkList <a name="ManagedDatabaseOpensearchNetworkList" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_opensearch.ManagedDatabaseOpensearchNetworkList;

new ManagedDatabaseOpensearchNetworkList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.get"></a>

```java
public ManagedDatabaseOpensearchNetworkOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetwork">ManagedDatabaseOpensearchNetwork</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetwork">ManagedDatabaseOpensearchNetwork</a>>

---


### ManagedDatabaseOpensearchNetworkOutputReference <a name="ManagedDatabaseOpensearchNetworkOutputReference" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_opensearch.ManagedDatabaseOpensearchNetworkOutputReference;

new ManagedDatabaseOpensearchNetworkOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.familyInput">familyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.uuidInput">uuidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.family">family</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.uuid">uuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetwork">ManagedDatabaseOpensearchNetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `familyInput`<sup>Optional</sup> <a name="familyInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.familyInput"></a>

```java
public java.lang.String getFamilyInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `uuidInput`<sup>Optional</sup> <a name="uuidInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.uuidInput"></a>

```java
public java.lang.String getUuidInput();
```

- *Type:* java.lang.String

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.family"></a>

```java
public java.lang.String getFamily();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.uuid"></a>

```java
public java.lang.String getUuid();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetwork">ManagedDatabaseOpensearchNetwork</a>

---


### ManagedDatabaseOpensearchNodeStatesList <a name="ManagedDatabaseOpensearchNodeStatesList" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_opensearch.ManagedDatabaseOpensearchNodeStatesList;

new ManagedDatabaseOpensearchNodeStatesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.get"></a>

```java
public ManagedDatabaseOpensearchNodeStatesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ManagedDatabaseOpensearchNodeStatesOutputReference <a name="ManagedDatabaseOpensearchNodeStatesOutputReference" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_opensearch.ManagedDatabaseOpensearchNodeStatesOutputReference;

new ManagedDatabaseOpensearchNodeStatesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStates">ManagedDatabaseOpensearchNodeStates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.property.internalValue"></a>

```java
public ManagedDatabaseOpensearchNodeStates getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStates">ManagedDatabaseOpensearchNodeStates</a>

---


### ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference <a name="ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_opensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference;

new ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.resetAllowedTries">resetAllowedTries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.resetAuthenticationBackend">resetAuthenticationBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.resetBlockExpirySeconds">resetBlockExpirySeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.resetMaxBlockedClients">resetMaxBlockedClients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.resetMaxTrackedClients">resetMaxTrackedClients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.resetTimeWindowSeconds">resetTimeWindowSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedTries` <a name="resetAllowedTries" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.resetAllowedTries"></a>

```java
public void resetAllowedTries()
```

##### `resetAuthenticationBackend` <a name="resetAuthenticationBackend" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.resetAuthenticationBackend"></a>

```java
public void resetAuthenticationBackend()
```

##### `resetBlockExpirySeconds` <a name="resetBlockExpirySeconds" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.resetBlockExpirySeconds"></a>

```java
public void resetBlockExpirySeconds()
```

##### `resetMaxBlockedClients` <a name="resetMaxBlockedClients" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.resetMaxBlockedClients"></a>

```java
public void resetMaxBlockedClients()
```

##### `resetMaxTrackedClients` <a name="resetMaxTrackedClients" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.resetMaxTrackedClients"></a>

```java
public void resetMaxTrackedClients()
```

##### `resetTimeWindowSeconds` <a name="resetTimeWindowSeconds" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.resetTimeWindowSeconds"></a>

```java
public void resetTimeWindowSeconds()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.allowedTriesInput">allowedTriesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.authenticationBackendInput">authenticationBackendInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.blockExpirySecondsInput">blockExpirySecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.maxBlockedClientsInput">maxBlockedClientsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.maxTrackedClientsInput">maxTrackedClientsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.timeWindowSecondsInput">timeWindowSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.allowedTries">allowedTries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.authenticationBackend">authenticationBackend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.blockExpirySeconds">blockExpirySeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.maxBlockedClients">maxBlockedClients</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.maxTrackedClients">maxTrackedClients</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.timeWindowSeconds">timeWindowSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting">ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedTriesInput`<sup>Optional</sup> <a name="allowedTriesInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.allowedTriesInput"></a>

```java
public java.lang.Number getAllowedTriesInput();
```

- *Type:* java.lang.Number

---

##### `authenticationBackendInput`<sup>Optional</sup> <a name="authenticationBackendInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.authenticationBackendInput"></a>

```java
public java.lang.String getAuthenticationBackendInput();
```

- *Type:* java.lang.String

---

##### `blockExpirySecondsInput`<sup>Optional</sup> <a name="blockExpirySecondsInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.blockExpirySecondsInput"></a>

```java
public java.lang.Number getBlockExpirySecondsInput();
```

- *Type:* java.lang.Number

---

##### `maxBlockedClientsInput`<sup>Optional</sup> <a name="maxBlockedClientsInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.maxBlockedClientsInput"></a>

```java
public java.lang.Number getMaxBlockedClientsInput();
```

- *Type:* java.lang.Number

---

##### `maxTrackedClientsInput`<sup>Optional</sup> <a name="maxTrackedClientsInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.maxTrackedClientsInput"></a>

```java
public java.lang.Number getMaxTrackedClientsInput();
```

- *Type:* java.lang.Number

---

##### `timeWindowSecondsInput`<sup>Optional</sup> <a name="timeWindowSecondsInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.timeWindowSecondsInput"></a>

```java
public java.lang.Number getTimeWindowSecondsInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `allowedTries`<sup>Required</sup> <a name="allowedTries" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.allowedTries"></a>

```java
public java.lang.Number getAllowedTries();
```

- *Type:* java.lang.Number

---

##### `authenticationBackend`<sup>Required</sup> <a name="authenticationBackend" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.authenticationBackend"></a>

```java
public java.lang.String getAuthenticationBackend();
```

- *Type:* java.lang.String

---

##### `blockExpirySeconds`<sup>Required</sup> <a name="blockExpirySeconds" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.blockExpirySeconds"></a>

```java
public java.lang.Number getBlockExpirySeconds();
```

- *Type:* java.lang.Number

---

##### `maxBlockedClients`<sup>Required</sup> <a name="maxBlockedClients" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.maxBlockedClients"></a>

```java
public java.lang.Number getMaxBlockedClients();
```

- *Type:* java.lang.Number

---

##### `maxTrackedClients`<sup>Required</sup> <a name="maxTrackedClients" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.maxTrackedClients"></a>

```java
public java.lang.Number getMaxTrackedClients();
```

- *Type:* java.lang.Number

---

##### `timeWindowSeconds`<sup>Required</sup> <a name="timeWindowSeconds" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.timeWindowSeconds"></a>

```java
public java.lang.Number getTimeWindowSeconds();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.internalValue"></a>

```java
public ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting">ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting</a>

---


### ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference <a name="ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_opensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference;

new ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.resetAllowedTries">resetAllowedTries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.resetBlockExpirySeconds">resetBlockExpirySeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.resetMaxBlockedClients">resetMaxBlockedClients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.resetMaxTrackedClients">resetMaxTrackedClients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.resetTimeWindowSeconds">resetTimeWindowSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedTries` <a name="resetAllowedTries" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.resetAllowedTries"></a>

```java
public void resetAllowedTries()
```

##### `resetBlockExpirySeconds` <a name="resetBlockExpirySeconds" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.resetBlockExpirySeconds"></a>

```java
public void resetBlockExpirySeconds()
```

##### `resetMaxBlockedClients` <a name="resetMaxBlockedClients" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.resetMaxBlockedClients"></a>

```java
public void resetMaxBlockedClients()
```

##### `resetMaxTrackedClients` <a name="resetMaxTrackedClients" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.resetMaxTrackedClients"></a>

```java
public void resetMaxTrackedClients()
```

##### `resetTimeWindowSeconds` <a name="resetTimeWindowSeconds" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.resetTimeWindowSeconds"></a>

```java
public void resetTimeWindowSeconds()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.allowedTriesInput">allowedTriesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.blockExpirySecondsInput">blockExpirySecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.maxBlockedClientsInput">maxBlockedClientsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.maxTrackedClientsInput">maxTrackedClientsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.timeWindowSecondsInput">timeWindowSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.allowedTries">allowedTries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.blockExpirySeconds">blockExpirySeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.maxBlockedClients">maxBlockedClients</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.maxTrackedClients">maxTrackedClients</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.timeWindowSeconds">timeWindowSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting">ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedTriesInput`<sup>Optional</sup> <a name="allowedTriesInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.allowedTriesInput"></a>

```java
public java.lang.Number getAllowedTriesInput();
```

- *Type:* java.lang.Number

---

##### `blockExpirySecondsInput`<sup>Optional</sup> <a name="blockExpirySecondsInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.blockExpirySecondsInput"></a>

```java
public java.lang.Number getBlockExpirySecondsInput();
```

- *Type:* java.lang.Number

---

##### `maxBlockedClientsInput`<sup>Optional</sup> <a name="maxBlockedClientsInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.maxBlockedClientsInput"></a>

```java
public java.lang.Number getMaxBlockedClientsInput();
```

- *Type:* java.lang.Number

---

##### `maxTrackedClientsInput`<sup>Optional</sup> <a name="maxTrackedClientsInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.maxTrackedClientsInput"></a>

```java
public java.lang.Number getMaxTrackedClientsInput();
```

- *Type:* java.lang.Number

---

##### `timeWindowSecondsInput`<sup>Optional</sup> <a name="timeWindowSecondsInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.timeWindowSecondsInput"></a>

```java
public java.lang.Number getTimeWindowSecondsInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `allowedTries`<sup>Required</sup> <a name="allowedTries" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.allowedTries"></a>

```java
public java.lang.Number getAllowedTries();
```

- *Type:* java.lang.Number

---

##### `blockExpirySeconds`<sup>Required</sup> <a name="blockExpirySeconds" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.blockExpirySeconds"></a>

```java
public java.lang.Number getBlockExpirySeconds();
```

- *Type:* java.lang.Number

---

##### `maxBlockedClients`<sup>Required</sup> <a name="maxBlockedClients" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.maxBlockedClients"></a>

```java
public java.lang.Number getMaxBlockedClients();
```

- *Type:* java.lang.Number

---

##### `maxTrackedClients`<sup>Required</sup> <a name="maxTrackedClients" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.maxTrackedClients"></a>

```java
public java.lang.Number getMaxTrackedClients();
```

- *Type:* java.lang.Number

---

##### `timeWindowSeconds`<sup>Required</sup> <a name="timeWindowSeconds" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.timeWindowSeconds"></a>

```java
public java.lang.Number getTimeWindowSeconds();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.internalValue"></a>

```java
public ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting">ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting</a>

---


### ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference <a name="ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_opensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference;

new ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.putInternalAuthenticationBackendLimiting">putInternalAuthenticationBackendLimiting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.putIpRateLimiting">putIpRateLimiting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.resetInternalAuthenticationBackendLimiting">resetInternalAuthenticationBackendLimiting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.resetIpRateLimiting">resetIpRateLimiting</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInternalAuthenticationBackendLimiting` <a name="putInternalAuthenticationBackendLimiting" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.putInternalAuthenticationBackendLimiting"></a>

```java
public void putInternalAuthenticationBackendLimiting(ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.putInternalAuthenticationBackendLimiting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting">ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting</a>

---

##### `putIpRateLimiting` <a name="putIpRateLimiting" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.putIpRateLimiting"></a>

```java
public void putIpRateLimiting(ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.putIpRateLimiting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting">ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting</a>

---

##### `resetInternalAuthenticationBackendLimiting` <a name="resetInternalAuthenticationBackendLimiting" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.resetInternalAuthenticationBackendLimiting"></a>

```java
public void resetInternalAuthenticationBackendLimiting()
```

##### `resetIpRateLimiting` <a name="resetIpRateLimiting" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.resetIpRateLimiting"></a>

```java
public void resetIpRateLimiting()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.property.internalAuthenticationBackendLimiting">internalAuthenticationBackendLimiting</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference">ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.property.ipRateLimiting">ipRateLimiting</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference">ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.property.internalAuthenticationBackendLimitingInput">internalAuthenticationBackendLimitingInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting">ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.property.ipRateLimitingInput">ipRateLimitingInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting">ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListeners">ManagedDatabaseOpensearchPropertiesAuthFailureListeners</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalAuthenticationBackendLimiting`<sup>Required</sup> <a name="internalAuthenticationBackendLimiting" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.property.internalAuthenticationBackendLimiting"></a>

```java
public ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference getInternalAuthenticationBackendLimiting();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference">ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference</a>

---

##### `ipRateLimiting`<sup>Required</sup> <a name="ipRateLimiting" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.property.ipRateLimiting"></a>

```java
public ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference getIpRateLimiting();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference">ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference</a>

---

##### `internalAuthenticationBackendLimitingInput`<sup>Optional</sup> <a name="internalAuthenticationBackendLimitingInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.property.internalAuthenticationBackendLimitingInput"></a>

```java
public ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting getInternalAuthenticationBackendLimitingInput();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting">ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting</a>

---

##### `ipRateLimitingInput`<sup>Optional</sup> <a name="ipRateLimitingInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.property.ipRateLimitingInput"></a>

```java
public ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting getIpRateLimitingInput();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting">ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.property.internalValue"></a>

```java
public ManagedDatabaseOpensearchPropertiesAuthFailureListeners getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListeners">ManagedDatabaseOpensearchPropertiesAuthFailureListeners</a>

---


### ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference <a name="ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_opensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference;

new ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.resetAccount">resetAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.resetBasePath">resetBasePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.resetChunkSize">resetChunkSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.resetCompress">resetCompress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.resetContainer">resetContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.resetEndpointSuffix">resetEndpointSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.resetSasToken">resetSasToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.resetSnapshotName">resetSnapshotName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccount` <a name="resetAccount" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.resetAccount"></a>

```java
public void resetAccount()
```

##### `resetBasePath` <a name="resetBasePath" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.resetBasePath"></a>

```java
public void resetBasePath()
```

##### `resetChunkSize` <a name="resetChunkSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.resetChunkSize"></a>

```java
public void resetChunkSize()
```

##### `resetCompress` <a name="resetCompress" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.resetCompress"></a>

```java
public void resetCompress()
```

##### `resetContainer` <a name="resetContainer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.resetContainer"></a>

```java
public void resetContainer()
```

##### `resetEndpointSuffix` <a name="resetEndpointSuffix" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.resetEndpointSuffix"></a>

```java
public void resetEndpointSuffix()
```

##### `resetKey` <a name="resetKey" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetSasToken` <a name="resetSasToken" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.resetSasToken"></a>

```java
public void resetSasToken()
```

##### `resetSnapshotName` <a name="resetSnapshotName" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.resetSnapshotName"></a>

```java
public void resetSnapshotName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.accountInput">accountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.basePathInput">basePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.chunkSizeInput">chunkSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.compressInput">compressInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.containerInput">containerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.endpointSuffixInput">endpointSuffixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.sasTokenInput">sasTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.snapshotNameInput">snapshotNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.account">account</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.basePath">basePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.chunkSize">chunkSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.compress">compress</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.container">container</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.endpointSuffix">endpointSuffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.sasToken">sasToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.snapshotName">snapshotName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigration">ManagedDatabaseOpensearchPropertiesAzureMigration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountInput`<sup>Optional</sup> <a name="accountInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.accountInput"></a>

```java
public java.lang.String getAccountInput();
```

- *Type:* java.lang.String

---

##### `basePathInput`<sup>Optional</sup> <a name="basePathInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.basePathInput"></a>

```java
public java.lang.String getBasePathInput();
```

- *Type:* java.lang.String

---

##### `chunkSizeInput`<sup>Optional</sup> <a name="chunkSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.chunkSizeInput"></a>

```java
public java.lang.String getChunkSizeInput();
```

- *Type:* java.lang.String

---

##### `compressInput`<sup>Optional</sup> <a name="compressInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.compressInput"></a>

```java
public java.lang.Object getCompressInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `containerInput`<sup>Optional</sup> <a name="containerInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.containerInput"></a>

```java
public java.lang.String getContainerInput();
```

- *Type:* java.lang.String

---

##### `endpointSuffixInput`<sup>Optional</sup> <a name="endpointSuffixInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.endpointSuffixInput"></a>

```java
public java.lang.String getEndpointSuffixInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `sasTokenInput`<sup>Optional</sup> <a name="sasTokenInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.sasTokenInput"></a>

```java
public java.lang.String getSasTokenInput();
```

- *Type:* java.lang.String

---

##### `snapshotNameInput`<sup>Optional</sup> <a name="snapshotNameInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.snapshotNameInput"></a>

```java
public java.lang.String getSnapshotNameInput();
```

- *Type:* java.lang.String

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.account"></a>

```java
public java.lang.String getAccount();
```

- *Type:* java.lang.String

---

##### `basePath`<sup>Required</sup> <a name="basePath" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.basePath"></a>

```java
public java.lang.String getBasePath();
```

- *Type:* java.lang.String

---

##### `chunkSize`<sup>Required</sup> <a name="chunkSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.chunkSize"></a>

```java
public java.lang.String getChunkSize();
```

- *Type:* java.lang.String

---

##### `compress`<sup>Required</sup> <a name="compress" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.compress"></a>

```java
public java.lang.Object getCompress();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.container"></a>

```java
public java.lang.String getContainer();
```

- *Type:* java.lang.String

---

##### `endpointSuffix`<sup>Required</sup> <a name="endpointSuffix" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.endpointSuffix"></a>

```java
public java.lang.String getEndpointSuffix();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `sasToken`<sup>Required</sup> <a name="sasToken" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.sasToken"></a>

```java
public java.lang.String getSasToken();
```

- *Type:* java.lang.String

---

##### `snapshotName`<sup>Required</sup> <a name="snapshotName" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.snapshotName"></a>

```java
public java.lang.String getSnapshotName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference.property.internalValue"></a>

```java
public ManagedDatabaseOpensearchPropertiesAzureMigration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigration">ManagedDatabaseOpensearchPropertiesAzureMigration</a>

---


### ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference <a name="ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_opensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference;

new ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.resetBasePath">resetBasePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.resetChunkSize">resetChunkSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.resetCompress">resetCompress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.resetCredentials">resetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.resetSnapshotName">resetSnapshotName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBasePath` <a name="resetBasePath" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.resetBasePath"></a>

```java
public void resetBasePath()
```

##### `resetBucket` <a name="resetBucket" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.resetBucket"></a>

```java
public void resetBucket()
```

##### `resetChunkSize` <a name="resetChunkSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.resetChunkSize"></a>

```java
public void resetChunkSize()
```

##### `resetCompress` <a name="resetCompress" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.resetCompress"></a>

```java
public void resetCompress()
```

##### `resetCredentials` <a name="resetCredentials" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.resetCredentials"></a>

```java
public void resetCredentials()
```

##### `resetSnapshotName` <a name="resetSnapshotName" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.resetSnapshotName"></a>

```java
public void resetSnapshotName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.property.basePathInput">basePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.property.chunkSizeInput">chunkSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.property.compressInput">compressInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.property.credentialsInput">credentialsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.property.snapshotNameInput">snapshotNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.property.basePath">basePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.property.chunkSize">chunkSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.property.compress">compress</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.property.credentials">credentials</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.property.snapshotName">snapshotName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigration">ManagedDatabaseOpensearchPropertiesGcsMigration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `basePathInput`<sup>Optional</sup> <a name="basePathInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.property.basePathInput"></a>

```java
public java.lang.String getBasePathInput();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `chunkSizeInput`<sup>Optional</sup> <a name="chunkSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.property.chunkSizeInput"></a>

```java
public java.lang.String getChunkSizeInput();
```

- *Type:* java.lang.String

---

##### `compressInput`<sup>Optional</sup> <a name="compressInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.property.compressInput"></a>

```java
public java.lang.Object getCompressInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `credentialsInput`<sup>Optional</sup> <a name="credentialsInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.property.credentialsInput"></a>

```java
public java.lang.String getCredentialsInput();
```

- *Type:* java.lang.String

---

##### `snapshotNameInput`<sup>Optional</sup> <a name="snapshotNameInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.property.snapshotNameInput"></a>

```java
public java.lang.String getSnapshotNameInput();
```

- *Type:* java.lang.String

---

##### `basePath`<sup>Required</sup> <a name="basePath" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.property.basePath"></a>

```java
public java.lang.String getBasePath();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `chunkSize`<sup>Required</sup> <a name="chunkSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.property.chunkSize"></a>

```java
public java.lang.String getChunkSize();
```

- *Type:* java.lang.String

---

##### `compress`<sup>Required</sup> <a name="compress" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.property.compress"></a>

```java
public java.lang.Object getCompress();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.property.credentials"></a>

```java
public java.lang.String getCredentials();
```

- *Type:* java.lang.String

---

##### `snapshotName`<sup>Required</sup> <a name="snapshotName" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.property.snapshotName"></a>

```java
public java.lang.String getSnapshotName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference.property.internalValue"></a>

```java
public ManagedDatabaseOpensearchPropertiesGcsMigration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigration">ManagedDatabaseOpensearchPropertiesGcsMigration</a>

---


### ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference <a name="ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_opensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference;

new ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.resetRollupDashboardsEnabled">resetRollupDashboardsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.resetRollupEnabled">resetRollupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.resetRollupSearchBackoffCount">resetRollupSearchBackoffCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.resetRollupSearchBackoffMillis">resetRollupSearchBackoffMillis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.resetRollupSearchSearchAllJobs">resetRollupSearchSearchAllJobs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRollupDashboardsEnabled` <a name="resetRollupDashboardsEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.resetRollupDashboardsEnabled"></a>

```java
public void resetRollupDashboardsEnabled()
```

##### `resetRollupEnabled` <a name="resetRollupEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.resetRollupEnabled"></a>

```java
public void resetRollupEnabled()
```

##### `resetRollupSearchBackoffCount` <a name="resetRollupSearchBackoffCount" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.resetRollupSearchBackoffCount"></a>

```java
public void resetRollupSearchBackoffCount()
```

##### `resetRollupSearchBackoffMillis` <a name="resetRollupSearchBackoffMillis" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.resetRollupSearchBackoffMillis"></a>

```java
public void resetRollupSearchBackoffMillis()
```

##### `resetRollupSearchSearchAllJobs` <a name="resetRollupSearchSearchAllJobs" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.resetRollupSearchSearchAllJobs"></a>

```java
public void resetRollupSearchSearchAllJobs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.rollupDashboardsEnabledInput">rollupDashboardsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.rollupEnabledInput">rollupEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.rollupSearchBackoffCountInput">rollupSearchBackoffCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.rollupSearchBackoffMillisInput">rollupSearchBackoffMillisInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.rollupSearchSearchAllJobsInput">rollupSearchSearchAllJobsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.rollupDashboardsEnabled">rollupDashboardsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.rollupEnabled">rollupEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.rollupSearchBackoffCount">rollupSearchBackoffCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.rollupSearchBackoffMillis">rollupSearchBackoffMillis</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.rollupSearchSearchAllJobs">rollupSearchSearchAllJobs</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollup">ManagedDatabaseOpensearchPropertiesIndexRollup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rollupDashboardsEnabledInput`<sup>Optional</sup> <a name="rollupDashboardsEnabledInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.rollupDashboardsEnabledInput"></a>

```java
public java.lang.Object getRollupDashboardsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `rollupEnabledInput`<sup>Optional</sup> <a name="rollupEnabledInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.rollupEnabledInput"></a>

```java
public java.lang.Object getRollupEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `rollupSearchBackoffCountInput`<sup>Optional</sup> <a name="rollupSearchBackoffCountInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.rollupSearchBackoffCountInput"></a>

```java
public java.lang.Number getRollupSearchBackoffCountInput();
```

- *Type:* java.lang.Number

---

##### `rollupSearchBackoffMillisInput`<sup>Optional</sup> <a name="rollupSearchBackoffMillisInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.rollupSearchBackoffMillisInput"></a>

```java
public java.lang.Number getRollupSearchBackoffMillisInput();
```

- *Type:* java.lang.Number

---

##### `rollupSearchSearchAllJobsInput`<sup>Optional</sup> <a name="rollupSearchSearchAllJobsInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.rollupSearchSearchAllJobsInput"></a>

```java
public java.lang.Object getRollupSearchSearchAllJobsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `rollupDashboardsEnabled`<sup>Required</sup> <a name="rollupDashboardsEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.rollupDashboardsEnabled"></a>

```java
public java.lang.Object getRollupDashboardsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `rollupEnabled`<sup>Required</sup> <a name="rollupEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.rollupEnabled"></a>

```java
public java.lang.Object getRollupEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `rollupSearchBackoffCount`<sup>Required</sup> <a name="rollupSearchBackoffCount" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.rollupSearchBackoffCount"></a>

```java
public java.lang.Number getRollupSearchBackoffCount();
```

- *Type:* java.lang.Number

---

##### `rollupSearchBackoffMillis`<sup>Required</sup> <a name="rollupSearchBackoffMillis" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.rollupSearchBackoffMillis"></a>

```java
public java.lang.Number getRollupSearchBackoffMillis();
```

- *Type:* java.lang.Number

---

##### `rollupSearchSearchAllJobs`<sup>Required</sup> <a name="rollupSearchSearchAllJobs" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.rollupSearchSearchAllJobs"></a>

```java
public java.lang.Object getRollupSearchSearchAllJobs();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.internalValue"></a>

```java
public ManagedDatabaseOpensearchPropertiesIndexRollup getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollup">ManagedDatabaseOpensearchPropertiesIndexRollup</a>

---


### ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference <a name="ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_opensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference;

new ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.resetMappingNestedObjectsLimit">resetMappingNestedObjectsLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.resetNumberOfReplicas">resetNumberOfReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.resetNumberOfShards">resetNumberOfShards</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMappingNestedObjectsLimit` <a name="resetMappingNestedObjectsLimit" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.resetMappingNestedObjectsLimit"></a>

```java
public void resetMappingNestedObjectsLimit()
```

##### `resetNumberOfReplicas` <a name="resetNumberOfReplicas" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.resetNumberOfReplicas"></a>

```java
public void resetNumberOfReplicas()
```

##### `resetNumberOfShards` <a name="resetNumberOfShards" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.resetNumberOfShards"></a>

```java
public void resetNumberOfShards()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.property.mappingNestedObjectsLimitInput">mappingNestedObjectsLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.property.numberOfReplicasInput">numberOfReplicasInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.property.numberOfShardsInput">numberOfShardsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.property.mappingNestedObjectsLimit">mappingNestedObjectsLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.property.numberOfReplicas">numberOfReplicas</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.property.numberOfShards">numberOfShards</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplate">ManagedDatabaseOpensearchPropertiesIndexTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mappingNestedObjectsLimitInput`<sup>Optional</sup> <a name="mappingNestedObjectsLimitInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.property.mappingNestedObjectsLimitInput"></a>

```java
public java.lang.Number getMappingNestedObjectsLimitInput();
```

- *Type:* java.lang.Number

---

##### `numberOfReplicasInput`<sup>Optional</sup> <a name="numberOfReplicasInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.property.numberOfReplicasInput"></a>

```java
public java.lang.Number getNumberOfReplicasInput();
```

- *Type:* java.lang.Number

---

##### `numberOfShardsInput`<sup>Optional</sup> <a name="numberOfShardsInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.property.numberOfShardsInput"></a>

```java
public java.lang.Number getNumberOfShardsInput();
```

- *Type:* java.lang.Number

---

##### `mappingNestedObjectsLimit`<sup>Required</sup> <a name="mappingNestedObjectsLimit" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.property.mappingNestedObjectsLimit"></a>

```java
public java.lang.Number getMappingNestedObjectsLimit();
```

- *Type:* java.lang.Number

---

##### `numberOfReplicas`<sup>Required</sup> <a name="numberOfReplicas" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.property.numberOfReplicas"></a>

```java
public java.lang.Number getNumberOfReplicas();
```

- *Type:* java.lang.Number

---

##### `numberOfShards`<sup>Required</sup> <a name="numberOfShards" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.property.numberOfShards"></a>

```java
public java.lang.Number getNumberOfShards();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.property.internalValue"></a>

```java
public ManagedDatabaseOpensearchPropertiesIndexTemplate getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplate">ManagedDatabaseOpensearchPropertiesIndexTemplate</a>

---


### ManagedDatabaseOpensearchPropertiesOpenidOutputReference <a name="ManagedDatabaseOpensearchPropertiesOpenidOutputReference" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_opensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference;

new ManagedDatabaseOpensearchPropertiesOpenidOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetConnectUrl">resetConnectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetJwtHeader">resetJwtHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetJwtUrlParameter">resetJwtUrlParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetRefreshRateLimitCount">resetRefreshRateLimitCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetRefreshRateLimitTimeWindowMs">resetRefreshRateLimitTimeWindowMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetRolesKey">resetRolesKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetSubjectKey">resetSubjectKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetClientId"></a>

```java
public void resetClientId()
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetClientSecret"></a>

```java
public void resetClientSecret()
```

##### `resetConnectUrl` <a name="resetConnectUrl" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetConnectUrl"></a>

```java
public void resetConnectUrl()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetHeader` <a name="resetHeader" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetHeader"></a>

```java
public void resetHeader()
```

##### `resetJwtHeader` <a name="resetJwtHeader" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetJwtHeader"></a>

```java
public void resetJwtHeader()
```

##### `resetJwtUrlParameter` <a name="resetJwtUrlParameter" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetJwtUrlParameter"></a>

```java
public void resetJwtUrlParameter()
```

##### `resetRefreshRateLimitCount` <a name="resetRefreshRateLimitCount" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetRefreshRateLimitCount"></a>

```java
public void resetRefreshRateLimitCount()
```

##### `resetRefreshRateLimitTimeWindowMs` <a name="resetRefreshRateLimitTimeWindowMs" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetRefreshRateLimitTimeWindowMs"></a>

```java
public void resetRefreshRateLimitTimeWindowMs()
```

##### `resetRolesKey` <a name="resetRolesKey" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetRolesKey"></a>

```java
public void resetRolesKey()
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetScope"></a>

```java
public void resetScope()
```

##### `resetSubjectKey` <a name="resetSubjectKey" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetSubjectKey"></a>

```java
public void resetSubjectKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.connectUrlInput">connectUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.headerInput">headerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.jwtHeaderInput">jwtHeaderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.jwtUrlParameterInput">jwtUrlParameterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.refreshRateLimitCountInput">refreshRateLimitCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.refreshRateLimitTimeWindowMsInput">refreshRateLimitTimeWindowMsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.rolesKeyInput">rolesKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.subjectKeyInput">subjectKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.connectUrl">connectUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.header">header</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.jwtHeader">jwtHeader</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.jwtUrlParameter">jwtUrlParameter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.refreshRateLimitCount">refreshRateLimitCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.refreshRateLimitTimeWindowMs">refreshRateLimitTimeWindowMs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.rolesKey">rolesKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.subjectKey">subjectKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid">ManagedDatabaseOpensearchPropertiesOpenid</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `connectUrlInput`<sup>Optional</sup> <a name="connectUrlInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.connectUrlInput"></a>

```java
public java.lang.String getConnectUrlInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.headerInput"></a>

```java
public java.lang.String getHeaderInput();
```

- *Type:* java.lang.String

---

##### `jwtHeaderInput`<sup>Optional</sup> <a name="jwtHeaderInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.jwtHeaderInput"></a>

```java
public java.lang.String getJwtHeaderInput();
```

- *Type:* java.lang.String

---

##### `jwtUrlParameterInput`<sup>Optional</sup> <a name="jwtUrlParameterInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.jwtUrlParameterInput"></a>

```java
public java.lang.String getJwtUrlParameterInput();
```

- *Type:* java.lang.String

---

##### `refreshRateLimitCountInput`<sup>Optional</sup> <a name="refreshRateLimitCountInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.refreshRateLimitCountInput"></a>

```java
public java.lang.Number getRefreshRateLimitCountInput();
```

- *Type:* java.lang.Number

---

##### `refreshRateLimitTimeWindowMsInput`<sup>Optional</sup> <a name="refreshRateLimitTimeWindowMsInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.refreshRateLimitTimeWindowMsInput"></a>

```java
public java.lang.Number getRefreshRateLimitTimeWindowMsInput();
```

- *Type:* java.lang.Number

---

##### `rolesKeyInput`<sup>Optional</sup> <a name="rolesKeyInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.rolesKeyInput"></a>

```java
public java.lang.String getRolesKeyInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `subjectKeyInput`<sup>Optional</sup> <a name="subjectKeyInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.subjectKeyInput"></a>

```java
public java.lang.String getSubjectKeyInput();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `connectUrl`<sup>Required</sup> <a name="connectUrl" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.connectUrl"></a>

```java
public java.lang.String getConnectUrl();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.header"></a>

```java
public java.lang.String getHeader();
```

- *Type:* java.lang.String

---

##### `jwtHeader`<sup>Required</sup> <a name="jwtHeader" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.jwtHeader"></a>

```java
public java.lang.String getJwtHeader();
```

- *Type:* java.lang.String

---

##### `jwtUrlParameter`<sup>Required</sup> <a name="jwtUrlParameter" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.jwtUrlParameter"></a>

```java
public java.lang.String getJwtUrlParameter();
```

- *Type:* java.lang.String

---

##### `refreshRateLimitCount`<sup>Required</sup> <a name="refreshRateLimitCount" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.refreshRateLimitCount"></a>

```java
public java.lang.Number getRefreshRateLimitCount();
```

- *Type:* java.lang.Number

---

##### `refreshRateLimitTimeWindowMs`<sup>Required</sup> <a name="refreshRateLimitTimeWindowMs" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.refreshRateLimitTimeWindowMs"></a>

```java
public java.lang.Number getRefreshRateLimitTimeWindowMs();
```

- *Type:* java.lang.Number

---

##### `rolesKey`<sup>Required</sup> <a name="rolesKey" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.rolesKey"></a>

```java
public java.lang.String getRolesKey();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `subjectKey`<sup>Required</sup> <a name="subjectKey" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.subjectKey"></a>

```java
public java.lang.String getSubjectKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.internalValue"></a>

```java
public ManagedDatabaseOpensearchPropertiesOpenid getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid">ManagedDatabaseOpensearchPropertiesOpenid</a>

---


### ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference <a name="ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_opensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference;

new ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.resetMaxOldSpaceSize">resetMaxOldSpaceSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.resetOpensearchRequestTimeout">resetOpensearchRequestTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetMaxOldSpaceSize` <a name="resetMaxOldSpaceSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.resetMaxOldSpaceSize"></a>

```java
public void resetMaxOldSpaceSize()
```

##### `resetOpensearchRequestTimeout` <a name="resetOpensearchRequestTimeout" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.resetOpensearchRequestTimeout"></a>

```java
public void resetOpensearchRequestTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.property.maxOldSpaceSizeInput">maxOldSpaceSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.property.opensearchRequestTimeoutInput">opensearchRequestTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.property.maxOldSpaceSize">maxOldSpaceSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.property.opensearchRequestTimeout">opensearchRequestTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboards">ManagedDatabaseOpensearchPropertiesOpensearchDashboards</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxOldSpaceSizeInput`<sup>Optional</sup> <a name="maxOldSpaceSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.property.maxOldSpaceSizeInput"></a>

```java
public java.lang.Number getMaxOldSpaceSizeInput();
```

- *Type:* java.lang.Number

---

##### `opensearchRequestTimeoutInput`<sup>Optional</sup> <a name="opensearchRequestTimeoutInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.property.opensearchRequestTimeoutInput"></a>

```java
public java.lang.Number getOpensearchRequestTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxOldSpaceSize`<sup>Required</sup> <a name="maxOldSpaceSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.property.maxOldSpaceSize"></a>

```java
public java.lang.Number getMaxOldSpaceSize();
```

- *Type:* java.lang.Number

---

##### `opensearchRequestTimeout`<sup>Required</sup> <a name="opensearchRequestTimeout" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.property.opensearchRequestTimeout"></a>

```java
public java.lang.Number getOpensearchRequestTimeout();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.property.internalValue"></a>

```java
public ManagedDatabaseOpensearchPropertiesOpensearchDashboards getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboards">ManagedDatabaseOpensearchPropertiesOpensearchDashboards</a>

---


### ManagedDatabaseOpensearchPropertiesOutputReference <a name="ManagedDatabaseOpensearchPropertiesOutputReference" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_opensearch.ManagedDatabaseOpensearchPropertiesOutputReference;

new ManagedDatabaseOpensearchPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putAuthFailureListeners">putAuthFailureListeners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putAzureMigration">putAzureMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putGcsMigration">putGcsMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putIndexRollup">putIndexRollup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putIndexTemplate">putIndexTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putOpenid">putOpenid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putOpensearchDashboards">putOpensearchDashboards</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putS3Migration">putS3Migration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putSaml">putSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetActionAutoCreateIndexEnabled">resetActionAutoCreateIndexEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetActionDestructiveRequiresName">resetActionDestructiveRequiresName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetAuthFailureListeners">resetAuthFailureListeners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetAutomaticUtilityNetworkIpFilter">resetAutomaticUtilityNetworkIpFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetAzureMigration">resetAzureMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetClusterMaxShardsPerNode">resetClusterMaxShardsPerNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetClusterRoutingAllocationNodeConcurrentRecoveries">resetClusterRoutingAllocationNodeConcurrentRecoveries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetCustomDomain">resetCustomDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetEmailSenderName">resetEmailSenderName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetEmailSenderPassword">resetEmailSenderPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetEmailSenderUsername">resetEmailSenderUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetEnableSecurityAudit">resetEnableSecurityAudit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetGcsMigration">resetGcsMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetHttpMaxContentLength">resetHttpMaxContentLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetHttpMaxHeaderSize">resetHttpMaxHeaderSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetHttpMaxInitialLineLength">resetHttpMaxInitialLineLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndexPatterns">resetIndexPatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndexRollup">resetIndexRollup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndexTemplate">resetIndexTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndicesFielddataCacheSize">resetIndicesFielddataCacheSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndicesMemoryIndexBufferSize">resetIndicesMemoryIndexBufferSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndicesMemoryMaxIndexBufferSize">resetIndicesMemoryMaxIndexBufferSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndicesMemoryMinIndexBufferSize">resetIndicesMemoryMinIndexBufferSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndicesQueriesCacheSize">resetIndicesQueriesCacheSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndicesQueryBoolMaxClauseCount">resetIndicesQueryBoolMaxClauseCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndicesRecoveryMaxBytesPerSec">resetIndicesRecoveryMaxBytesPerSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndicesRecoveryMaxConcurrentFileChunks">resetIndicesRecoveryMaxConcurrentFileChunks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIpFilter">resetIpFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIsmEnabled">resetIsmEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIsmHistoryEnabled">resetIsmHistoryEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIsmHistoryMaxAge">resetIsmHistoryMaxAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIsmHistoryMaxDocs">resetIsmHistoryMaxDocs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIsmHistoryRolloverCheckPeriod">resetIsmHistoryRolloverCheckPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIsmHistoryRolloverRetentionPeriod">resetIsmHistoryRolloverRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetKeepIndexRefreshInterval">resetKeepIndexRefreshInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetKnnMemoryCircuitBreakerEnabled">resetKnnMemoryCircuitBreakerEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetKnnMemoryCircuitBreakerLimit">resetKnnMemoryCircuitBreakerLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetOpenid">resetOpenid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetOpensearchDashboards">resetOpensearchDashboards</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetOverrideMainResponseVersion">resetOverrideMainResponseVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetPluginsAlertingFilterByBackendRoles">resetPluginsAlertingFilterByBackendRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetPublicAccess">resetPublicAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetReindexRemoteWhitelist">resetReindexRemoteWhitelist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetS3Migration">resetS3Migration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetSaml">resetSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetScriptMaxCompilationsRate">resetScriptMaxCompilationsRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetSearchMaxBuckets">resetSearchMaxBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetServiceLog">resetServiceLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolAnalyzeQueueSize">resetThreadPoolAnalyzeQueueSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolAnalyzeSize">resetThreadPoolAnalyzeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolForceMergeSize">resetThreadPoolForceMergeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolGetQueueSize">resetThreadPoolGetQueueSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolGetSize">resetThreadPoolGetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolSearchQueueSize">resetThreadPoolSearchQueueSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolSearchSize">resetThreadPoolSearchSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolSearchThrottledQueueSize">resetThreadPoolSearchThrottledQueueSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolSearchThrottledSize">resetThreadPoolSearchThrottledSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolWriteQueueSize">resetThreadPoolWriteQueueSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolWriteSize">resetThreadPoolWriteSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthFailureListeners` <a name="putAuthFailureListeners" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putAuthFailureListeners"></a>

```java
public void putAuthFailureListeners(ManagedDatabaseOpensearchPropertiesAuthFailureListeners value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putAuthFailureListeners.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListeners">ManagedDatabaseOpensearchPropertiesAuthFailureListeners</a>

---

##### `putAzureMigration` <a name="putAzureMigration" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putAzureMigration"></a>

```java
public void putAzureMigration(ManagedDatabaseOpensearchPropertiesAzureMigration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putAzureMigration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigration">ManagedDatabaseOpensearchPropertiesAzureMigration</a>

---

##### `putGcsMigration` <a name="putGcsMigration" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putGcsMigration"></a>

```java
public void putGcsMigration(ManagedDatabaseOpensearchPropertiesGcsMigration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putGcsMigration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigration">ManagedDatabaseOpensearchPropertiesGcsMigration</a>

---

##### `putIndexRollup` <a name="putIndexRollup" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putIndexRollup"></a>

```java
public void putIndexRollup(ManagedDatabaseOpensearchPropertiesIndexRollup value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putIndexRollup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollup">ManagedDatabaseOpensearchPropertiesIndexRollup</a>

---

##### `putIndexTemplate` <a name="putIndexTemplate" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putIndexTemplate"></a>

```java
public void putIndexTemplate(ManagedDatabaseOpensearchPropertiesIndexTemplate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putIndexTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplate">ManagedDatabaseOpensearchPropertiesIndexTemplate</a>

---

##### `putOpenid` <a name="putOpenid" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putOpenid"></a>

```java
public void putOpenid(ManagedDatabaseOpensearchPropertiesOpenid value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putOpenid.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid">ManagedDatabaseOpensearchPropertiesOpenid</a>

---

##### `putOpensearchDashboards` <a name="putOpensearchDashboards" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putOpensearchDashboards"></a>

```java
public void putOpensearchDashboards(ManagedDatabaseOpensearchPropertiesOpensearchDashboards value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putOpensearchDashboards.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboards">ManagedDatabaseOpensearchPropertiesOpensearchDashboards</a>

---

##### `putS3Migration` <a name="putS3Migration" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putS3Migration"></a>

```java
public void putS3Migration(ManagedDatabaseOpensearchPropertiesS3Migration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putS3Migration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3Migration">ManagedDatabaseOpensearchPropertiesS3Migration</a>

---

##### `putSaml` <a name="putSaml" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putSaml"></a>

```java
public void putSaml(ManagedDatabaseOpensearchPropertiesSaml value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putSaml.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml">ManagedDatabaseOpensearchPropertiesSaml</a>

---

##### `resetActionAutoCreateIndexEnabled` <a name="resetActionAutoCreateIndexEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetActionAutoCreateIndexEnabled"></a>

```java
public void resetActionAutoCreateIndexEnabled()
```

##### `resetActionDestructiveRequiresName` <a name="resetActionDestructiveRequiresName" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetActionDestructiveRequiresName"></a>

```java
public void resetActionDestructiveRequiresName()
```

##### `resetAuthFailureListeners` <a name="resetAuthFailureListeners" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetAuthFailureListeners"></a>

```java
public void resetAuthFailureListeners()
```

##### `resetAutomaticUtilityNetworkIpFilter` <a name="resetAutomaticUtilityNetworkIpFilter" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetAutomaticUtilityNetworkIpFilter"></a>

```java
public void resetAutomaticUtilityNetworkIpFilter()
```

##### `resetAzureMigration` <a name="resetAzureMigration" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetAzureMigration"></a>

```java
public void resetAzureMigration()
```

##### `resetClusterMaxShardsPerNode` <a name="resetClusterMaxShardsPerNode" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetClusterMaxShardsPerNode"></a>

```java
public void resetClusterMaxShardsPerNode()
```

##### `resetClusterRoutingAllocationNodeConcurrentRecoveries` <a name="resetClusterRoutingAllocationNodeConcurrentRecoveries" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetClusterRoutingAllocationNodeConcurrentRecoveries"></a>

```java
public void resetClusterRoutingAllocationNodeConcurrentRecoveries()
```

##### `resetCustomDomain` <a name="resetCustomDomain" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetCustomDomain"></a>

```java
public void resetCustomDomain()
```

##### `resetEmailSenderName` <a name="resetEmailSenderName" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetEmailSenderName"></a>

```java
public void resetEmailSenderName()
```

##### `resetEmailSenderPassword` <a name="resetEmailSenderPassword" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetEmailSenderPassword"></a>

```java
public void resetEmailSenderPassword()
```

##### `resetEmailSenderUsername` <a name="resetEmailSenderUsername" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetEmailSenderUsername"></a>

```java
public void resetEmailSenderUsername()
```

##### `resetEnableSecurityAudit` <a name="resetEnableSecurityAudit" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetEnableSecurityAudit"></a>

```java
public void resetEnableSecurityAudit()
```

##### `resetGcsMigration` <a name="resetGcsMigration" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetGcsMigration"></a>

```java
public void resetGcsMigration()
```

##### `resetHttpMaxContentLength` <a name="resetHttpMaxContentLength" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetHttpMaxContentLength"></a>

```java
public void resetHttpMaxContentLength()
```

##### `resetHttpMaxHeaderSize` <a name="resetHttpMaxHeaderSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetHttpMaxHeaderSize"></a>

```java
public void resetHttpMaxHeaderSize()
```

##### `resetHttpMaxInitialLineLength` <a name="resetHttpMaxInitialLineLength" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetHttpMaxInitialLineLength"></a>

```java
public void resetHttpMaxInitialLineLength()
```

##### `resetIndexPatterns` <a name="resetIndexPatterns" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndexPatterns"></a>

```java
public void resetIndexPatterns()
```

##### `resetIndexRollup` <a name="resetIndexRollup" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndexRollup"></a>

```java
public void resetIndexRollup()
```

##### `resetIndexTemplate` <a name="resetIndexTemplate" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndexTemplate"></a>

```java
public void resetIndexTemplate()
```

##### `resetIndicesFielddataCacheSize` <a name="resetIndicesFielddataCacheSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndicesFielddataCacheSize"></a>

```java
public void resetIndicesFielddataCacheSize()
```

##### `resetIndicesMemoryIndexBufferSize` <a name="resetIndicesMemoryIndexBufferSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndicesMemoryIndexBufferSize"></a>

```java
public void resetIndicesMemoryIndexBufferSize()
```

##### `resetIndicesMemoryMaxIndexBufferSize` <a name="resetIndicesMemoryMaxIndexBufferSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndicesMemoryMaxIndexBufferSize"></a>

```java
public void resetIndicesMemoryMaxIndexBufferSize()
```

##### `resetIndicesMemoryMinIndexBufferSize` <a name="resetIndicesMemoryMinIndexBufferSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndicesMemoryMinIndexBufferSize"></a>

```java
public void resetIndicesMemoryMinIndexBufferSize()
```

##### `resetIndicesQueriesCacheSize` <a name="resetIndicesQueriesCacheSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndicesQueriesCacheSize"></a>

```java
public void resetIndicesQueriesCacheSize()
```

##### `resetIndicesQueryBoolMaxClauseCount` <a name="resetIndicesQueryBoolMaxClauseCount" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndicesQueryBoolMaxClauseCount"></a>

```java
public void resetIndicesQueryBoolMaxClauseCount()
```

##### `resetIndicesRecoveryMaxBytesPerSec` <a name="resetIndicesRecoveryMaxBytesPerSec" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndicesRecoveryMaxBytesPerSec"></a>

```java
public void resetIndicesRecoveryMaxBytesPerSec()
```

##### `resetIndicesRecoveryMaxConcurrentFileChunks` <a name="resetIndicesRecoveryMaxConcurrentFileChunks" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndicesRecoveryMaxConcurrentFileChunks"></a>

```java
public void resetIndicesRecoveryMaxConcurrentFileChunks()
```

##### `resetIpFilter` <a name="resetIpFilter" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIpFilter"></a>

```java
public void resetIpFilter()
```

##### `resetIsmEnabled` <a name="resetIsmEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIsmEnabled"></a>

```java
public void resetIsmEnabled()
```

##### `resetIsmHistoryEnabled` <a name="resetIsmHistoryEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIsmHistoryEnabled"></a>

```java
public void resetIsmHistoryEnabled()
```

##### `resetIsmHistoryMaxAge` <a name="resetIsmHistoryMaxAge" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIsmHistoryMaxAge"></a>

```java
public void resetIsmHistoryMaxAge()
```

##### `resetIsmHistoryMaxDocs` <a name="resetIsmHistoryMaxDocs" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIsmHistoryMaxDocs"></a>

```java
public void resetIsmHistoryMaxDocs()
```

##### `resetIsmHistoryRolloverCheckPeriod` <a name="resetIsmHistoryRolloverCheckPeriod" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIsmHistoryRolloverCheckPeriod"></a>

```java
public void resetIsmHistoryRolloverCheckPeriod()
```

##### `resetIsmHistoryRolloverRetentionPeriod` <a name="resetIsmHistoryRolloverRetentionPeriod" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIsmHistoryRolloverRetentionPeriod"></a>

```java
public void resetIsmHistoryRolloverRetentionPeriod()
```

##### `resetKeepIndexRefreshInterval` <a name="resetKeepIndexRefreshInterval" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetKeepIndexRefreshInterval"></a>

```java
public void resetKeepIndexRefreshInterval()
```

##### `resetKnnMemoryCircuitBreakerEnabled` <a name="resetKnnMemoryCircuitBreakerEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetKnnMemoryCircuitBreakerEnabled"></a>

```java
public void resetKnnMemoryCircuitBreakerEnabled()
```

##### `resetKnnMemoryCircuitBreakerLimit` <a name="resetKnnMemoryCircuitBreakerLimit" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetKnnMemoryCircuitBreakerLimit"></a>

```java
public void resetKnnMemoryCircuitBreakerLimit()
```

##### `resetOpenid` <a name="resetOpenid" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetOpenid"></a>

```java
public void resetOpenid()
```

##### `resetOpensearchDashboards` <a name="resetOpensearchDashboards" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetOpensearchDashboards"></a>

```java
public void resetOpensearchDashboards()
```

##### `resetOverrideMainResponseVersion` <a name="resetOverrideMainResponseVersion" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetOverrideMainResponseVersion"></a>

```java
public void resetOverrideMainResponseVersion()
```

##### `resetPluginsAlertingFilterByBackendRoles` <a name="resetPluginsAlertingFilterByBackendRoles" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetPluginsAlertingFilterByBackendRoles"></a>

```java
public void resetPluginsAlertingFilterByBackendRoles()
```

##### `resetPublicAccess` <a name="resetPublicAccess" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetPublicAccess"></a>

```java
public void resetPublicAccess()
```

##### `resetReindexRemoteWhitelist` <a name="resetReindexRemoteWhitelist" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetReindexRemoteWhitelist"></a>

```java
public void resetReindexRemoteWhitelist()
```

##### `resetS3Migration` <a name="resetS3Migration" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetS3Migration"></a>

```java
public void resetS3Migration()
```

##### `resetSaml` <a name="resetSaml" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetSaml"></a>

```java
public void resetSaml()
```

##### `resetScriptMaxCompilationsRate` <a name="resetScriptMaxCompilationsRate" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetScriptMaxCompilationsRate"></a>

```java
public void resetScriptMaxCompilationsRate()
```

##### `resetSearchMaxBuckets` <a name="resetSearchMaxBuckets" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetSearchMaxBuckets"></a>

```java
public void resetSearchMaxBuckets()
```

##### `resetServiceLog` <a name="resetServiceLog" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetServiceLog"></a>

```java
public void resetServiceLog()
```

##### `resetThreadPoolAnalyzeQueueSize` <a name="resetThreadPoolAnalyzeQueueSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolAnalyzeQueueSize"></a>

```java
public void resetThreadPoolAnalyzeQueueSize()
```

##### `resetThreadPoolAnalyzeSize` <a name="resetThreadPoolAnalyzeSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolAnalyzeSize"></a>

```java
public void resetThreadPoolAnalyzeSize()
```

##### `resetThreadPoolForceMergeSize` <a name="resetThreadPoolForceMergeSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolForceMergeSize"></a>

```java
public void resetThreadPoolForceMergeSize()
```

##### `resetThreadPoolGetQueueSize` <a name="resetThreadPoolGetQueueSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolGetQueueSize"></a>

```java
public void resetThreadPoolGetQueueSize()
```

##### `resetThreadPoolGetSize` <a name="resetThreadPoolGetSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolGetSize"></a>

```java
public void resetThreadPoolGetSize()
```

##### `resetThreadPoolSearchQueueSize` <a name="resetThreadPoolSearchQueueSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolSearchQueueSize"></a>

```java
public void resetThreadPoolSearchQueueSize()
```

##### `resetThreadPoolSearchSize` <a name="resetThreadPoolSearchSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolSearchSize"></a>

```java
public void resetThreadPoolSearchSize()
```

##### `resetThreadPoolSearchThrottledQueueSize` <a name="resetThreadPoolSearchThrottledQueueSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolSearchThrottledQueueSize"></a>

```java
public void resetThreadPoolSearchThrottledQueueSize()
```

##### `resetThreadPoolSearchThrottledSize` <a name="resetThreadPoolSearchThrottledSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolSearchThrottledSize"></a>

```java
public void resetThreadPoolSearchThrottledSize()
```

##### `resetThreadPoolWriteQueueSize` <a name="resetThreadPoolWriteQueueSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolWriteQueueSize"></a>

```java
public void resetThreadPoolWriteQueueSize()
```

##### `resetThreadPoolWriteSize` <a name="resetThreadPoolWriteSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolWriteSize"></a>

```java
public void resetThreadPoolWriteSize()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.authFailureListeners">authFailureListeners</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference">ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.azureMigration">azureMigration</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference">ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.gcsMigration">gcsMigration</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference">ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indexRollup">indexRollup</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference">ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indexTemplate">indexTemplate</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference">ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.openid">openid</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference">ManagedDatabaseOpensearchPropertiesOpenidOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.opensearchDashboards">opensearchDashboards</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference">ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.s3Migration">s3Migration</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference">ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.saml">saml</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference">ManagedDatabaseOpensearchPropertiesSamlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.actionAutoCreateIndexEnabledInput">actionAutoCreateIndexEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.actionDestructiveRequiresNameInput">actionDestructiveRequiresNameInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.authFailureListenersInput">authFailureListenersInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListeners">ManagedDatabaseOpensearchPropertiesAuthFailureListeners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.automaticUtilityNetworkIpFilterInput">automaticUtilityNetworkIpFilterInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.azureMigrationInput">azureMigrationInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigration">ManagedDatabaseOpensearchPropertiesAzureMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.clusterMaxShardsPerNodeInput">clusterMaxShardsPerNodeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.clusterRoutingAllocationNodeConcurrentRecoveriesInput">clusterRoutingAllocationNodeConcurrentRecoveriesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.customDomainInput">customDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.emailSenderNameInput">emailSenderNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.emailSenderPasswordInput">emailSenderPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.emailSenderUsernameInput">emailSenderUsernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.enableSecurityAuditInput">enableSecurityAuditInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.gcsMigrationInput">gcsMigrationInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigration">ManagedDatabaseOpensearchPropertiesGcsMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.httpMaxContentLengthInput">httpMaxContentLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.httpMaxHeaderSizeInput">httpMaxHeaderSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.httpMaxInitialLineLengthInput">httpMaxInitialLineLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indexPatternsInput">indexPatternsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indexRollupInput">indexRollupInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollup">ManagedDatabaseOpensearchPropertiesIndexRollup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indexTemplateInput">indexTemplateInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplate">ManagedDatabaseOpensearchPropertiesIndexTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesFielddataCacheSizeInput">indicesFielddataCacheSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesMemoryIndexBufferSizeInput">indicesMemoryIndexBufferSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesMemoryMaxIndexBufferSizeInput">indicesMemoryMaxIndexBufferSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesMemoryMinIndexBufferSizeInput">indicesMemoryMinIndexBufferSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesQueriesCacheSizeInput">indicesQueriesCacheSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesQueryBoolMaxClauseCountInput">indicesQueryBoolMaxClauseCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesRecoveryMaxBytesPerSecInput">indicesRecoveryMaxBytesPerSecInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesRecoveryMaxConcurrentFileChunksInput">indicesRecoveryMaxConcurrentFileChunksInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ipFilterInput">ipFilterInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismEnabledInput">ismEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismHistoryEnabledInput">ismHistoryEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismHistoryMaxAgeInput">ismHistoryMaxAgeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismHistoryMaxDocsInput">ismHistoryMaxDocsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismHistoryRolloverCheckPeriodInput">ismHistoryRolloverCheckPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismHistoryRolloverRetentionPeriodInput">ismHistoryRolloverRetentionPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.keepIndexRefreshIntervalInput">keepIndexRefreshIntervalInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.knnMemoryCircuitBreakerEnabledInput">knnMemoryCircuitBreakerEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.knnMemoryCircuitBreakerLimitInput">knnMemoryCircuitBreakerLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.openidInput">openidInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid">ManagedDatabaseOpensearchPropertiesOpenid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.opensearchDashboardsInput">opensearchDashboardsInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboards">ManagedDatabaseOpensearchPropertiesOpensearchDashboards</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.overrideMainResponseVersionInput">overrideMainResponseVersionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.pluginsAlertingFilterByBackendRolesInput">pluginsAlertingFilterByBackendRolesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.publicAccessInput">publicAccessInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.reindexRemoteWhitelistInput">reindexRemoteWhitelistInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.s3MigrationInput">s3MigrationInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3Migration">ManagedDatabaseOpensearchPropertiesS3Migration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.samlInput">samlInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml">ManagedDatabaseOpensearchPropertiesSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.scriptMaxCompilationsRateInput">scriptMaxCompilationsRateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.searchMaxBucketsInput">searchMaxBucketsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.serviceLogInput">serviceLogInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolAnalyzeQueueSizeInput">threadPoolAnalyzeQueueSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolAnalyzeSizeInput">threadPoolAnalyzeSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolForceMergeSizeInput">threadPoolForceMergeSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolGetQueueSizeInput">threadPoolGetQueueSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolGetSizeInput">threadPoolGetSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolSearchQueueSizeInput">threadPoolSearchQueueSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolSearchSizeInput">threadPoolSearchSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolSearchThrottledQueueSizeInput">threadPoolSearchThrottledQueueSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolSearchThrottledSizeInput">threadPoolSearchThrottledSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolWriteQueueSizeInput">threadPoolWriteQueueSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolWriteSizeInput">threadPoolWriteSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.actionAutoCreateIndexEnabled">actionAutoCreateIndexEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.actionDestructiveRequiresName">actionDestructiveRequiresName</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.automaticUtilityNetworkIpFilter">automaticUtilityNetworkIpFilter</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.clusterMaxShardsPerNode">clusterMaxShardsPerNode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.clusterRoutingAllocationNodeConcurrentRecoveries">clusterRoutingAllocationNodeConcurrentRecoveries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.customDomain">customDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.emailSenderName">emailSenderName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.emailSenderPassword">emailSenderPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.emailSenderUsername">emailSenderUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.enableSecurityAudit">enableSecurityAudit</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.httpMaxContentLength">httpMaxContentLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.httpMaxHeaderSize">httpMaxHeaderSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.httpMaxInitialLineLength">httpMaxInitialLineLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indexPatterns">indexPatterns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesFielddataCacheSize">indicesFielddataCacheSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesMemoryIndexBufferSize">indicesMemoryIndexBufferSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesMemoryMaxIndexBufferSize">indicesMemoryMaxIndexBufferSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesMemoryMinIndexBufferSize">indicesMemoryMinIndexBufferSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesQueriesCacheSize">indicesQueriesCacheSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesQueryBoolMaxClauseCount">indicesQueryBoolMaxClauseCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesRecoveryMaxBytesPerSec">indicesRecoveryMaxBytesPerSec</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesRecoveryMaxConcurrentFileChunks">indicesRecoveryMaxConcurrentFileChunks</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ipFilter">ipFilter</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismEnabled">ismEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismHistoryEnabled">ismHistoryEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismHistoryMaxAge">ismHistoryMaxAge</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismHistoryMaxDocs">ismHistoryMaxDocs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismHistoryRolloverCheckPeriod">ismHistoryRolloverCheckPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismHistoryRolloverRetentionPeriod">ismHistoryRolloverRetentionPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.keepIndexRefreshInterval">keepIndexRefreshInterval</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.knnMemoryCircuitBreakerEnabled">knnMemoryCircuitBreakerEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.knnMemoryCircuitBreakerLimit">knnMemoryCircuitBreakerLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.overrideMainResponseVersion">overrideMainResponseVersion</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.pluginsAlertingFilterByBackendRoles">pluginsAlertingFilterByBackendRoles</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.publicAccess">publicAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.reindexRemoteWhitelist">reindexRemoteWhitelist</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.scriptMaxCompilationsRate">scriptMaxCompilationsRate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.searchMaxBuckets">searchMaxBuckets</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.serviceLog">serviceLog</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolAnalyzeQueueSize">threadPoolAnalyzeQueueSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolAnalyzeSize">threadPoolAnalyzeSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolForceMergeSize">threadPoolForceMergeSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolGetQueueSize">threadPoolGetQueueSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolGetSize">threadPoolGetSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolSearchQueueSize">threadPoolSearchQueueSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolSearchSize">threadPoolSearchSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolSearchThrottledQueueSize">threadPoolSearchThrottledQueueSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolSearchThrottledSize">threadPoolSearchThrottledSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolWriteQueueSize">threadPoolWriteQueueSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolWriteSize">threadPoolWriteSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties">ManagedDatabaseOpensearchProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authFailureListeners`<sup>Required</sup> <a name="authFailureListeners" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.authFailureListeners"></a>

```java
public ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference getAuthFailureListeners();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference">ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference</a>

---

##### `azureMigration`<sup>Required</sup> <a name="azureMigration" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.azureMigration"></a>

```java
public ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference getAzureMigration();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference">ManagedDatabaseOpensearchPropertiesAzureMigrationOutputReference</a>

---

##### `gcsMigration`<sup>Required</sup> <a name="gcsMigration" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.gcsMigration"></a>

```java
public ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference getGcsMigration();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference">ManagedDatabaseOpensearchPropertiesGcsMigrationOutputReference</a>

---

##### `indexRollup`<sup>Required</sup> <a name="indexRollup" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indexRollup"></a>

```java
public ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference getIndexRollup();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference">ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference</a>

---

##### `indexTemplate`<sup>Required</sup> <a name="indexTemplate" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indexTemplate"></a>

```java
public ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference getIndexTemplate();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference">ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference</a>

---

##### `openid`<sup>Required</sup> <a name="openid" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.openid"></a>

```java
public ManagedDatabaseOpensearchPropertiesOpenidOutputReference getOpenid();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference">ManagedDatabaseOpensearchPropertiesOpenidOutputReference</a>

---

##### `opensearchDashboards`<sup>Required</sup> <a name="opensearchDashboards" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.opensearchDashboards"></a>

```java
public ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference getOpensearchDashboards();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference">ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference</a>

---

##### `s3Migration`<sup>Required</sup> <a name="s3Migration" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.s3Migration"></a>

```java
public ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference getS3Migration();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference">ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference</a>

---

##### `saml`<sup>Required</sup> <a name="saml" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.saml"></a>

```java
public ManagedDatabaseOpensearchPropertiesSamlOutputReference getSaml();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference">ManagedDatabaseOpensearchPropertiesSamlOutputReference</a>

---

##### `actionAutoCreateIndexEnabledInput`<sup>Optional</sup> <a name="actionAutoCreateIndexEnabledInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.actionAutoCreateIndexEnabledInput"></a>

```java
public java.lang.Object getActionAutoCreateIndexEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `actionDestructiveRequiresNameInput`<sup>Optional</sup> <a name="actionDestructiveRequiresNameInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.actionDestructiveRequiresNameInput"></a>

```java
public java.lang.Object getActionDestructiveRequiresNameInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `authFailureListenersInput`<sup>Optional</sup> <a name="authFailureListenersInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.authFailureListenersInput"></a>

```java
public ManagedDatabaseOpensearchPropertiesAuthFailureListeners getAuthFailureListenersInput();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListeners">ManagedDatabaseOpensearchPropertiesAuthFailureListeners</a>

---

##### `automaticUtilityNetworkIpFilterInput`<sup>Optional</sup> <a name="automaticUtilityNetworkIpFilterInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.automaticUtilityNetworkIpFilterInput"></a>

```java
public java.lang.Object getAutomaticUtilityNetworkIpFilterInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `azureMigrationInput`<sup>Optional</sup> <a name="azureMigrationInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.azureMigrationInput"></a>

```java
public ManagedDatabaseOpensearchPropertiesAzureMigration getAzureMigrationInput();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAzureMigration">ManagedDatabaseOpensearchPropertiesAzureMigration</a>

---

##### `clusterMaxShardsPerNodeInput`<sup>Optional</sup> <a name="clusterMaxShardsPerNodeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.clusterMaxShardsPerNodeInput"></a>

```java
public java.lang.Number getClusterMaxShardsPerNodeInput();
```

- *Type:* java.lang.Number

---

##### `clusterRoutingAllocationNodeConcurrentRecoveriesInput`<sup>Optional</sup> <a name="clusterRoutingAllocationNodeConcurrentRecoveriesInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.clusterRoutingAllocationNodeConcurrentRecoveriesInput"></a>

```java
public java.lang.Number getClusterRoutingAllocationNodeConcurrentRecoveriesInput();
```

- *Type:* java.lang.Number

---

##### `customDomainInput`<sup>Optional</sup> <a name="customDomainInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.customDomainInput"></a>

```java
public java.lang.String getCustomDomainInput();
```

- *Type:* java.lang.String

---

##### `emailSenderNameInput`<sup>Optional</sup> <a name="emailSenderNameInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.emailSenderNameInput"></a>

```java
public java.lang.String getEmailSenderNameInput();
```

- *Type:* java.lang.String

---

##### `emailSenderPasswordInput`<sup>Optional</sup> <a name="emailSenderPasswordInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.emailSenderPasswordInput"></a>

```java
public java.lang.String getEmailSenderPasswordInput();
```

- *Type:* java.lang.String

---

##### `emailSenderUsernameInput`<sup>Optional</sup> <a name="emailSenderUsernameInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.emailSenderUsernameInput"></a>

```java
public java.lang.String getEmailSenderUsernameInput();
```

- *Type:* java.lang.String

---

##### `enableSecurityAuditInput`<sup>Optional</sup> <a name="enableSecurityAuditInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.enableSecurityAuditInput"></a>

```java
public java.lang.Object getEnableSecurityAuditInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `gcsMigrationInput`<sup>Optional</sup> <a name="gcsMigrationInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.gcsMigrationInput"></a>

```java
public ManagedDatabaseOpensearchPropertiesGcsMigration getGcsMigrationInput();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesGcsMigration">ManagedDatabaseOpensearchPropertiesGcsMigration</a>

---

##### `httpMaxContentLengthInput`<sup>Optional</sup> <a name="httpMaxContentLengthInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.httpMaxContentLengthInput"></a>

```java
public java.lang.Number getHttpMaxContentLengthInput();
```

- *Type:* java.lang.Number

---

##### `httpMaxHeaderSizeInput`<sup>Optional</sup> <a name="httpMaxHeaderSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.httpMaxHeaderSizeInput"></a>

```java
public java.lang.Number getHttpMaxHeaderSizeInput();
```

- *Type:* java.lang.Number

---

##### `httpMaxInitialLineLengthInput`<sup>Optional</sup> <a name="httpMaxInitialLineLengthInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.httpMaxInitialLineLengthInput"></a>

```java
public java.lang.Number getHttpMaxInitialLineLengthInput();
```

- *Type:* java.lang.Number

---

##### `indexPatternsInput`<sup>Optional</sup> <a name="indexPatternsInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indexPatternsInput"></a>

```java
public java.util.List<java.lang.String> getIndexPatternsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `indexRollupInput`<sup>Optional</sup> <a name="indexRollupInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indexRollupInput"></a>

```java
public ManagedDatabaseOpensearchPropertiesIndexRollup getIndexRollupInput();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollup">ManagedDatabaseOpensearchPropertiesIndexRollup</a>

---

##### `indexTemplateInput`<sup>Optional</sup> <a name="indexTemplateInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indexTemplateInput"></a>

```java
public ManagedDatabaseOpensearchPropertiesIndexTemplate getIndexTemplateInput();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplate">ManagedDatabaseOpensearchPropertiesIndexTemplate</a>

---

##### `indicesFielddataCacheSizeInput`<sup>Optional</sup> <a name="indicesFielddataCacheSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesFielddataCacheSizeInput"></a>

```java
public java.lang.Number getIndicesFielddataCacheSizeInput();
```

- *Type:* java.lang.Number

---

##### `indicesMemoryIndexBufferSizeInput`<sup>Optional</sup> <a name="indicesMemoryIndexBufferSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesMemoryIndexBufferSizeInput"></a>

```java
public java.lang.Number getIndicesMemoryIndexBufferSizeInput();
```

- *Type:* java.lang.Number

---

##### `indicesMemoryMaxIndexBufferSizeInput`<sup>Optional</sup> <a name="indicesMemoryMaxIndexBufferSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesMemoryMaxIndexBufferSizeInput"></a>

```java
public java.lang.Number getIndicesMemoryMaxIndexBufferSizeInput();
```

- *Type:* java.lang.Number

---

##### `indicesMemoryMinIndexBufferSizeInput`<sup>Optional</sup> <a name="indicesMemoryMinIndexBufferSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesMemoryMinIndexBufferSizeInput"></a>

```java
public java.lang.Number getIndicesMemoryMinIndexBufferSizeInput();
```

- *Type:* java.lang.Number

---

##### `indicesQueriesCacheSizeInput`<sup>Optional</sup> <a name="indicesQueriesCacheSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesQueriesCacheSizeInput"></a>

```java
public java.lang.Number getIndicesQueriesCacheSizeInput();
```

- *Type:* java.lang.Number

---

##### `indicesQueryBoolMaxClauseCountInput`<sup>Optional</sup> <a name="indicesQueryBoolMaxClauseCountInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesQueryBoolMaxClauseCountInput"></a>

```java
public java.lang.Number getIndicesQueryBoolMaxClauseCountInput();
```

- *Type:* java.lang.Number

---

##### `indicesRecoveryMaxBytesPerSecInput`<sup>Optional</sup> <a name="indicesRecoveryMaxBytesPerSecInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesRecoveryMaxBytesPerSecInput"></a>

```java
public java.lang.Number getIndicesRecoveryMaxBytesPerSecInput();
```

- *Type:* java.lang.Number

---

##### `indicesRecoveryMaxConcurrentFileChunksInput`<sup>Optional</sup> <a name="indicesRecoveryMaxConcurrentFileChunksInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesRecoveryMaxConcurrentFileChunksInput"></a>

```java
public java.lang.Number getIndicesRecoveryMaxConcurrentFileChunksInput();
```

- *Type:* java.lang.Number

---

##### `ipFilterInput`<sup>Optional</sup> <a name="ipFilterInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ipFilterInput"></a>

```java
public java.util.List<java.lang.String> getIpFilterInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ismEnabledInput`<sup>Optional</sup> <a name="ismEnabledInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismEnabledInput"></a>

```java
public java.lang.Object getIsmEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ismHistoryEnabledInput`<sup>Optional</sup> <a name="ismHistoryEnabledInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismHistoryEnabledInput"></a>

```java
public java.lang.Object getIsmHistoryEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ismHistoryMaxAgeInput`<sup>Optional</sup> <a name="ismHistoryMaxAgeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismHistoryMaxAgeInput"></a>

```java
public java.lang.Number getIsmHistoryMaxAgeInput();
```

- *Type:* java.lang.Number

---

##### `ismHistoryMaxDocsInput`<sup>Optional</sup> <a name="ismHistoryMaxDocsInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismHistoryMaxDocsInput"></a>

```java
public java.lang.Number getIsmHistoryMaxDocsInput();
```

- *Type:* java.lang.Number

---

##### `ismHistoryRolloverCheckPeriodInput`<sup>Optional</sup> <a name="ismHistoryRolloverCheckPeriodInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismHistoryRolloverCheckPeriodInput"></a>

```java
public java.lang.Number getIsmHistoryRolloverCheckPeriodInput();
```

- *Type:* java.lang.Number

---

##### `ismHistoryRolloverRetentionPeriodInput`<sup>Optional</sup> <a name="ismHistoryRolloverRetentionPeriodInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismHistoryRolloverRetentionPeriodInput"></a>

```java
public java.lang.Number getIsmHistoryRolloverRetentionPeriodInput();
```

- *Type:* java.lang.Number

---

##### `keepIndexRefreshIntervalInput`<sup>Optional</sup> <a name="keepIndexRefreshIntervalInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.keepIndexRefreshIntervalInput"></a>

```java
public java.lang.Object getKeepIndexRefreshIntervalInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `knnMemoryCircuitBreakerEnabledInput`<sup>Optional</sup> <a name="knnMemoryCircuitBreakerEnabledInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.knnMemoryCircuitBreakerEnabledInput"></a>

```java
public java.lang.Object getKnnMemoryCircuitBreakerEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `knnMemoryCircuitBreakerLimitInput`<sup>Optional</sup> <a name="knnMemoryCircuitBreakerLimitInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.knnMemoryCircuitBreakerLimitInput"></a>

```java
public java.lang.Number getKnnMemoryCircuitBreakerLimitInput();
```

- *Type:* java.lang.Number

---

##### `openidInput`<sup>Optional</sup> <a name="openidInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.openidInput"></a>

```java
public ManagedDatabaseOpensearchPropertiesOpenid getOpenidInput();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid">ManagedDatabaseOpensearchPropertiesOpenid</a>

---

##### `opensearchDashboardsInput`<sup>Optional</sup> <a name="opensearchDashboardsInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.opensearchDashboardsInput"></a>

```java
public ManagedDatabaseOpensearchPropertiesOpensearchDashboards getOpensearchDashboardsInput();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboards">ManagedDatabaseOpensearchPropertiesOpensearchDashboards</a>

---

##### `overrideMainResponseVersionInput`<sup>Optional</sup> <a name="overrideMainResponseVersionInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.overrideMainResponseVersionInput"></a>

```java
public java.lang.Object getOverrideMainResponseVersionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pluginsAlertingFilterByBackendRolesInput`<sup>Optional</sup> <a name="pluginsAlertingFilterByBackendRolesInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.pluginsAlertingFilterByBackendRolesInput"></a>

```java
public java.lang.Object getPluginsAlertingFilterByBackendRolesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `publicAccessInput`<sup>Optional</sup> <a name="publicAccessInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.publicAccessInput"></a>

```java
public java.lang.Object getPublicAccessInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `reindexRemoteWhitelistInput`<sup>Optional</sup> <a name="reindexRemoteWhitelistInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.reindexRemoteWhitelistInput"></a>

```java
public java.util.List<java.lang.String> getReindexRemoteWhitelistInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `s3MigrationInput`<sup>Optional</sup> <a name="s3MigrationInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.s3MigrationInput"></a>

```java
public ManagedDatabaseOpensearchPropertiesS3Migration getS3MigrationInput();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3Migration">ManagedDatabaseOpensearchPropertiesS3Migration</a>

---

##### `samlInput`<sup>Optional</sup> <a name="samlInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.samlInput"></a>

```java
public ManagedDatabaseOpensearchPropertiesSaml getSamlInput();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml">ManagedDatabaseOpensearchPropertiesSaml</a>

---

##### `scriptMaxCompilationsRateInput`<sup>Optional</sup> <a name="scriptMaxCompilationsRateInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.scriptMaxCompilationsRateInput"></a>

```java
public java.lang.String getScriptMaxCompilationsRateInput();
```

- *Type:* java.lang.String

---

##### `searchMaxBucketsInput`<sup>Optional</sup> <a name="searchMaxBucketsInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.searchMaxBucketsInput"></a>

```java
public java.lang.Number getSearchMaxBucketsInput();
```

- *Type:* java.lang.Number

---

##### `serviceLogInput`<sup>Optional</sup> <a name="serviceLogInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.serviceLogInput"></a>

```java
public java.lang.Object getServiceLogInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `threadPoolAnalyzeQueueSizeInput`<sup>Optional</sup> <a name="threadPoolAnalyzeQueueSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolAnalyzeQueueSizeInput"></a>

```java
public java.lang.Number getThreadPoolAnalyzeQueueSizeInput();
```

- *Type:* java.lang.Number

---

##### `threadPoolAnalyzeSizeInput`<sup>Optional</sup> <a name="threadPoolAnalyzeSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolAnalyzeSizeInput"></a>

```java
public java.lang.Number getThreadPoolAnalyzeSizeInput();
```

- *Type:* java.lang.Number

---

##### `threadPoolForceMergeSizeInput`<sup>Optional</sup> <a name="threadPoolForceMergeSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolForceMergeSizeInput"></a>

```java
public java.lang.Number getThreadPoolForceMergeSizeInput();
```

- *Type:* java.lang.Number

---

##### `threadPoolGetQueueSizeInput`<sup>Optional</sup> <a name="threadPoolGetQueueSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolGetQueueSizeInput"></a>

```java
public java.lang.Number getThreadPoolGetQueueSizeInput();
```

- *Type:* java.lang.Number

---

##### `threadPoolGetSizeInput`<sup>Optional</sup> <a name="threadPoolGetSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolGetSizeInput"></a>

```java
public java.lang.Number getThreadPoolGetSizeInput();
```

- *Type:* java.lang.Number

---

##### `threadPoolSearchQueueSizeInput`<sup>Optional</sup> <a name="threadPoolSearchQueueSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolSearchQueueSizeInput"></a>

```java
public java.lang.Number getThreadPoolSearchQueueSizeInput();
```

- *Type:* java.lang.Number

---

##### `threadPoolSearchSizeInput`<sup>Optional</sup> <a name="threadPoolSearchSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolSearchSizeInput"></a>

```java
public java.lang.Number getThreadPoolSearchSizeInput();
```

- *Type:* java.lang.Number

---

##### `threadPoolSearchThrottledQueueSizeInput`<sup>Optional</sup> <a name="threadPoolSearchThrottledQueueSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolSearchThrottledQueueSizeInput"></a>

```java
public java.lang.Number getThreadPoolSearchThrottledQueueSizeInput();
```

- *Type:* java.lang.Number

---

##### `threadPoolSearchThrottledSizeInput`<sup>Optional</sup> <a name="threadPoolSearchThrottledSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolSearchThrottledSizeInput"></a>

```java
public java.lang.Number getThreadPoolSearchThrottledSizeInput();
```

- *Type:* java.lang.Number

---

##### `threadPoolWriteQueueSizeInput`<sup>Optional</sup> <a name="threadPoolWriteQueueSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolWriteQueueSizeInput"></a>

```java
public java.lang.Number getThreadPoolWriteQueueSizeInput();
```

- *Type:* java.lang.Number

---

##### `threadPoolWriteSizeInput`<sup>Optional</sup> <a name="threadPoolWriteSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolWriteSizeInput"></a>

```java
public java.lang.Number getThreadPoolWriteSizeInput();
```

- *Type:* java.lang.Number

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `actionAutoCreateIndexEnabled`<sup>Required</sup> <a name="actionAutoCreateIndexEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.actionAutoCreateIndexEnabled"></a>

```java
public java.lang.Object getActionAutoCreateIndexEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `actionDestructiveRequiresName`<sup>Required</sup> <a name="actionDestructiveRequiresName" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.actionDestructiveRequiresName"></a>

```java
public java.lang.Object getActionDestructiveRequiresName();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `automaticUtilityNetworkIpFilter`<sup>Required</sup> <a name="automaticUtilityNetworkIpFilter" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.automaticUtilityNetworkIpFilter"></a>

```java
public java.lang.Object getAutomaticUtilityNetworkIpFilter();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clusterMaxShardsPerNode`<sup>Required</sup> <a name="clusterMaxShardsPerNode" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.clusterMaxShardsPerNode"></a>

```java
public java.lang.Number getClusterMaxShardsPerNode();
```

- *Type:* java.lang.Number

---

##### `clusterRoutingAllocationNodeConcurrentRecoveries`<sup>Required</sup> <a name="clusterRoutingAllocationNodeConcurrentRecoveries" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.clusterRoutingAllocationNodeConcurrentRecoveries"></a>

```java
public java.lang.Number getClusterRoutingAllocationNodeConcurrentRecoveries();
```

- *Type:* java.lang.Number

---

##### `customDomain`<sup>Required</sup> <a name="customDomain" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.customDomain"></a>

```java
public java.lang.String getCustomDomain();
```

- *Type:* java.lang.String

---

##### `emailSenderName`<sup>Required</sup> <a name="emailSenderName" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.emailSenderName"></a>

```java
public java.lang.String getEmailSenderName();
```

- *Type:* java.lang.String

---

##### `emailSenderPassword`<sup>Required</sup> <a name="emailSenderPassword" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.emailSenderPassword"></a>

```java
public java.lang.String getEmailSenderPassword();
```

- *Type:* java.lang.String

---

##### `emailSenderUsername`<sup>Required</sup> <a name="emailSenderUsername" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.emailSenderUsername"></a>

```java
public java.lang.String getEmailSenderUsername();
```

- *Type:* java.lang.String

---

##### `enableSecurityAudit`<sup>Required</sup> <a name="enableSecurityAudit" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.enableSecurityAudit"></a>

```java
public java.lang.Object getEnableSecurityAudit();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `httpMaxContentLength`<sup>Required</sup> <a name="httpMaxContentLength" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.httpMaxContentLength"></a>

```java
public java.lang.Number getHttpMaxContentLength();
```

- *Type:* java.lang.Number

---

##### `httpMaxHeaderSize`<sup>Required</sup> <a name="httpMaxHeaderSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.httpMaxHeaderSize"></a>

```java
public java.lang.Number getHttpMaxHeaderSize();
```

- *Type:* java.lang.Number

---

##### `httpMaxInitialLineLength`<sup>Required</sup> <a name="httpMaxInitialLineLength" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.httpMaxInitialLineLength"></a>

```java
public java.lang.Number getHttpMaxInitialLineLength();
```

- *Type:* java.lang.Number

---

##### `indexPatterns`<sup>Required</sup> <a name="indexPatterns" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indexPatterns"></a>

```java
public java.util.List<java.lang.String> getIndexPatterns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `indicesFielddataCacheSize`<sup>Required</sup> <a name="indicesFielddataCacheSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesFielddataCacheSize"></a>

```java
public java.lang.Number getIndicesFielddataCacheSize();
```

- *Type:* java.lang.Number

---

##### `indicesMemoryIndexBufferSize`<sup>Required</sup> <a name="indicesMemoryIndexBufferSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesMemoryIndexBufferSize"></a>

```java
public java.lang.Number getIndicesMemoryIndexBufferSize();
```

- *Type:* java.lang.Number

---

##### `indicesMemoryMaxIndexBufferSize`<sup>Required</sup> <a name="indicesMemoryMaxIndexBufferSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesMemoryMaxIndexBufferSize"></a>

```java
public java.lang.Number getIndicesMemoryMaxIndexBufferSize();
```

- *Type:* java.lang.Number

---

##### `indicesMemoryMinIndexBufferSize`<sup>Required</sup> <a name="indicesMemoryMinIndexBufferSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesMemoryMinIndexBufferSize"></a>

```java
public java.lang.Number getIndicesMemoryMinIndexBufferSize();
```

- *Type:* java.lang.Number

---

##### `indicesQueriesCacheSize`<sup>Required</sup> <a name="indicesQueriesCacheSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesQueriesCacheSize"></a>

```java
public java.lang.Number getIndicesQueriesCacheSize();
```

- *Type:* java.lang.Number

---

##### `indicesQueryBoolMaxClauseCount`<sup>Required</sup> <a name="indicesQueryBoolMaxClauseCount" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesQueryBoolMaxClauseCount"></a>

```java
public java.lang.Number getIndicesQueryBoolMaxClauseCount();
```

- *Type:* java.lang.Number

---

##### `indicesRecoveryMaxBytesPerSec`<sup>Required</sup> <a name="indicesRecoveryMaxBytesPerSec" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesRecoveryMaxBytesPerSec"></a>

```java
public java.lang.Number getIndicesRecoveryMaxBytesPerSec();
```

- *Type:* java.lang.Number

---

##### `indicesRecoveryMaxConcurrentFileChunks`<sup>Required</sup> <a name="indicesRecoveryMaxConcurrentFileChunks" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesRecoveryMaxConcurrentFileChunks"></a>

```java
public java.lang.Number getIndicesRecoveryMaxConcurrentFileChunks();
```

- *Type:* java.lang.Number

---

##### `ipFilter`<sup>Required</sup> <a name="ipFilter" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ipFilter"></a>

```java
public java.util.List<java.lang.String> getIpFilter();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ismEnabled`<sup>Required</sup> <a name="ismEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismEnabled"></a>

```java
public java.lang.Object getIsmEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ismHistoryEnabled`<sup>Required</sup> <a name="ismHistoryEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismHistoryEnabled"></a>

```java
public java.lang.Object getIsmHistoryEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ismHistoryMaxAge`<sup>Required</sup> <a name="ismHistoryMaxAge" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismHistoryMaxAge"></a>

```java
public java.lang.Number getIsmHistoryMaxAge();
```

- *Type:* java.lang.Number

---

##### `ismHistoryMaxDocs`<sup>Required</sup> <a name="ismHistoryMaxDocs" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismHistoryMaxDocs"></a>

```java
public java.lang.Number getIsmHistoryMaxDocs();
```

- *Type:* java.lang.Number

---

##### `ismHistoryRolloverCheckPeriod`<sup>Required</sup> <a name="ismHistoryRolloverCheckPeriod" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismHistoryRolloverCheckPeriod"></a>

```java
public java.lang.Number getIsmHistoryRolloverCheckPeriod();
```

- *Type:* java.lang.Number

---

##### `ismHistoryRolloverRetentionPeriod`<sup>Required</sup> <a name="ismHistoryRolloverRetentionPeriod" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismHistoryRolloverRetentionPeriod"></a>

```java
public java.lang.Number getIsmHistoryRolloverRetentionPeriod();
```

- *Type:* java.lang.Number

---

##### `keepIndexRefreshInterval`<sup>Required</sup> <a name="keepIndexRefreshInterval" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.keepIndexRefreshInterval"></a>

```java
public java.lang.Object getKeepIndexRefreshInterval();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `knnMemoryCircuitBreakerEnabled`<sup>Required</sup> <a name="knnMemoryCircuitBreakerEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.knnMemoryCircuitBreakerEnabled"></a>

```java
public java.lang.Object getKnnMemoryCircuitBreakerEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `knnMemoryCircuitBreakerLimit`<sup>Required</sup> <a name="knnMemoryCircuitBreakerLimit" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.knnMemoryCircuitBreakerLimit"></a>

```java
public java.lang.Number getKnnMemoryCircuitBreakerLimit();
```

- *Type:* java.lang.Number

---

##### `overrideMainResponseVersion`<sup>Required</sup> <a name="overrideMainResponseVersion" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.overrideMainResponseVersion"></a>

```java
public java.lang.Object getOverrideMainResponseVersion();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pluginsAlertingFilterByBackendRoles`<sup>Required</sup> <a name="pluginsAlertingFilterByBackendRoles" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.pluginsAlertingFilterByBackendRoles"></a>

```java
public java.lang.Object getPluginsAlertingFilterByBackendRoles();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `publicAccess`<sup>Required</sup> <a name="publicAccess" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.publicAccess"></a>

```java
public java.lang.Object getPublicAccess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `reindexRemoteWhitelist`<sup>Required</sup> <a name="reindexRemoteWhitelist" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.reindexRemoteWhitelist"></a>

```java
public java.util.List<java.lang.String> getReindexRemoteWhitelist();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scriptMaxCompilationsRate`<sup>Required</sup> <a name="scriptMaxCompilationsRate" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.scriptMaxCompilationsRate"></a>

```java
public java.lang.String getScriptMaxCompilationsRate();
```

- *Type:* java.lang.String

---

##### `searchMaxBuckets`<sup>Required</sup> <a name="searchMaxBuckets" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.searchMaxBuckets"></a>

```java
public java.lang.Number getSearchMaxBuckets();
```

- *Type:* java.lang.Number

---

##### `serviceLog`<sup>Required</sup> <a name="serviceLog" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.serviceLog"></a>

```java
public java.lang.Object getServiceLog();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `threadPoolAnalyzeQueueSize`<sup>Required</sup> <a name="threadPoolAnalyzeQueueSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolAnalyzeQueueSize"></a>

```java
public java.lang.Number getThreadPoolAnalyzeQueueSize();
```

- *Type:* java.lang.Number

---

##### `threadPoolAnalyzeSize`<sup>Required</sup> <a name="threadPoolAnalyzeSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolAnalyzeSize"></a>

```java
public java.lang.Number getThreadPoolAnalyzeSize();
```

- *Type:* java.lang.Number

---

##### `threadPoolForceMergeSize`<sup>Required</sup> <a name="threadPoolForceMergeSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolForceMergeSize"></a>

```java
public java.lang.Number getThreadPoolForceMergeSize();
```

- *Type:* java.lang.Number

---

##### `threadPoolGetQueueSize`<sup>Required</sup> <a name="threadPoolGetQueueSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolGetQueueSize"></a>

```java
public java.lang.Number getThreadPoolGetQueueSize();
```

- *Type:* java.lang.Number

---

##### `threadPoolGetSize`<sup>Required</sup> <a name="threadPoolGetSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolGetSize"></a>

```java
public java.lang.Number getThreadPoolGetSize();
```

- *Type:* java.lang.Number

---

##### `threadPoolSearchQueueSize`<sup>Required</sup> <a name="threadPoolSearchQueueSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolSearchQueueSize"></a>

```java
public java.lang.Number getThreadPoolSearchQueueSize();
```

- *Type:* java.lang.Number

---

##### `threadPoolSearchSize`<sup>Required</sup> <a name="threadPoolSearchSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolSearchSize"></a>

```java
public java.lang.Number getThreadPoolSearchSize();
```

- *Type:* java.lang.Number

---

##### `threadPoolSearchThrottledQueueSize`<sup>Required</sup> <a name="threadPoolSearchThrottledQueueSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolSearchThrottledQueueSize"></a>

```java
public java.lang.Number getThreadPoolSearchThrottledQueueSize();
```

- *Type:* java.lang.Number

---

##### `threadPoolSearchThrottledSize`<sup>Required</sup> <a name="threadPoolSearchThrottledSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolSearchThrottledSize"></a>

```java
public java.lang.Number getThreadPoolSearchThrottledSize();
```

- *Type:* java.lang.Number

---

##### `threadPoolWriteQueueSize`<sup>Required</sup> <a name="threadPoolWriteQueueSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolWriteQueueSize"></a>

```java
public java.lang.Number getThreadPoolWriteQueueSize();
```

- *Type:* java.lang.Number

---

##### `threadPoolWriteSize`<sup>Required</sup> <a name="threadPoolWriteSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolWriteSize"></a>

```java
public java.lang.Number getThreadPoolWriteSize();
```

- *Type:* java.lang.Number

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.internalValue"></a>

```java
public ManagedDatabaseOpensearchProperties getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties">ManagedDatabaseOpensearchProperties</a>

---


### ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference <a name="ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_opensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference;

new ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.resetAccessKey">resetAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.resetBasePath">resetBasePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.resetChunkSize">resetChunkSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.resetCompress">resetCompress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.resetEndpoint">resetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.resetSecretKey">resetSecretKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.resetServerSideEncryption">resetServerSideEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.resetSnapshotName">resetSnapshotName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessKey` <a name="resetAccessKey" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.resetAccessKey"></a>

```java
public void resetAccessKey()
```

##### `resetBasePath` <a name="resetBasePath" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.resetBasePath"></a>

```java
public void resetBasePath()
```

##### `resetBucket` <a name="resetBucket" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.resetBucket"></a>

```java
public void resetBucket()
```

##### `resetChunkSize` <a name="resetChunkSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.resetChunkSize"></a>

```java
public void resetChunkSize()
```

##### `resetCompress` <a name="resetCompress" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.resetCompress"></a>

```java
public void resetCompress()
```

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.resetEndpoint"></a>

```java
public void resetEndpoint()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetSecretKey` <a name="resetSecretKey" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.resetSecretKey"></a>

```java
public void resetSecretKey()
```

##### `resetServerSideEncryption` <a name="resetServerSideEncryption" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.resetServerSideEncryption"></a>

```java
public void resetServerSideEncryption()
```

##### `resetSnapshotName` <a name="resetSnapshotName" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.resetSnapshotName"></a>

```java
public void resetSnapshotName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.accessKeyInput">accessKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.basePathInput">basePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.chunkSizeInput">chunkSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.compressInput">compressInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.endpointInput">endpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.secretKeyInput">secretKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.serverSideEncryptionInput">serverSideEncryptionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.snapshotNameInput">snapshotNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.accessKey">accessKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.basePath">basePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.chunkSize">chunkSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.compress">compress</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.secretKey">secretKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.serverSideEncryption">serverSideEncryption</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.snapshotName">snapshotName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3Migration">ManagedDatabaseOpensearchPropertiesS3Migration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessKeyInput`<sup>Optional</sup> <a name="accessKeyInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.accessKeyInput"></a>

```java
public java.lang.String getAccessKeyInput();
```

- *Type:* java.lang.String

---

##### `basePathInput`<sup>Optional</sup> <a name="basePathInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.basePathInput"></a>

```java
public java.lang.String getBasePathInput();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `chunkSizeInput`<sup>Optional</sup> <a name="chunkSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.chunkSizeInput"></a>

```java
public java.lang.String getChunkSizeInput();
```

- *Type:* java.lang.String

---

##### `compressInput`<sup>Optional</sup> <a name="compressInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.compressInput"></a>

```java
public java.lang.Object getCompressInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.endpointInput"></a>

```java
public java.lang.String getEndpointInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `secretKeyInput`<sup>Optional</sup> <a name="secretKeyInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.secretKeyInput"></a>

```java
public java.lang.String getSecretKeyInput();
```

- *Type:* java.lang.String

---

##### `serverSideEncryptionInput`<sup>Optional</sup> <a name="serverSideEncryptionInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.serverSideEncryptionInput"></a>

```java
public java.lang.Object getServerSideEncryptionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `snapshotNameInput`<sup>Optional</sup> <a name="snapshotNameInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.snapshotNameInput"></a>

```java
public java.lang.String getSnapshotNameInput();
```

- *Type:* java.lang.String

---

##### `accessKey`<sup>Required</sup> <a name="accessKey" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.accessKey"></a>

```java
public java.lang.String getAccessKey();
```

- *Type:* java.lang.String

---

##### `basePath`<sup>Required</sup> <a name="basePath" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.basePath"></a>

```java
public java.lang.String getBasePath();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `chunkSize`<sup>Required</sup> <a name="chunkSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.chunkSize"></a>

```java
public java.lang.String getChunkSize();
```

- *Type:* java.lang.String

---

##### `compress`<sup>Required</sup> <a name="compress" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.compress"></a>

```java
public java.lang.Object getCompress();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `secretKey`<sup>Required</sup> <a name="secretKey" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.secretKey"></a>

```java
public java.lang.String getSecretKey();
```

- *Type:* java.lang.String

---

##### `serverSideEncryption`<sup>Required</sup> <a name="serverSideEncryption" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.serverSideEncryption"></a>

```java
public java.lang.Object getServerSideEncryption();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `snapshotName`<sup>Required</sup> <a name="snapshotName" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.snapshotName"></a>

```java
public java.lang.String getSnapshotName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3MigrationOutputReference.property.internalValue"></a>

```java
public ManagedDatabaseOpensearchPropertiesS3Migration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesS3Migration">ManagedDatabaseOpensearchPropertiesS3Migration</a>

---


### ManagedDatabaseOpensearchPropertiesSamlOutputReference <a name="ManagedDatabaseOpensearchPropertiesSamlOutputReference" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_database_opensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference;

new ManagedDatabaseOpensearchPropertiesSamlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.resetIdpEntityId">resetIdpEntityId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.resetIdpMetadataUrl">resetIdpMetadataUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.resetIdpPemtrustedcasContent">resetIdpPemtrustedcasContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.resetRolesKey">resetRolesKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.resetSpEntityId">resetSpEntityId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.resetSubjectKey">resetSubjectKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetIdpEntityId` <a name="resetIdpEntityId" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.resetIdpEntityId"></a>

```java
public void resetIdpEntityId()
```

##### `resetIdpMetadataUrl` <a name="resetIdpMetadataUrl" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.resetIdpMetadataUrl"></a>

```java
public void resetIdpMetadataUrl()
```

##### `resetIdpPemtrustedcasContent` <a name="resetIdpPemtrustedcasContent" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.resetIdpPemtrustedcasContent"></a>

```java
public void resetIdpPemtrustedcasContent()
```

##### `resetRolesKey` <a name="resetRolesKey" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.resetRolesKey"></a>

```java
public void resetRolesKey()
```

##### `resetSpEntityId` <a name="resetSpEntityId" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.resetSpEntityId"></a>

```java
public void resetSpEntityId()
```

##### `resetSubjectKey` <a name="resetSubjectKey" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.resetSubjectKey"></a>

```java
public void resetSubjectKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.idpEntityIdInput">idpEntityIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.idpMetadataUrlInput">idpMetadataUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.idpPemtrustedcasContentInput">idpPemtrustedcasContentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.rolesKeyInput">rolesKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.spEntityIdInput">spEntityIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.subjectKeyInput">subjectKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.idpEntityId">idpEntityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.idpMetadataUrl">idpMetadataUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.idpPemtrustedcasContent">idpPemtrustedcasContent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.rolesKey">rolesKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.spEntityId">spEntityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.subjectKey">subjectKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml">ManagedDatabaseOpensearchPropertiesSaml</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idpEntityIdInput`<sup>Optional</sup> <a name="idpEntityIdInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.idpEntityIdInput"></a>

```java
public java.lang.String getIdpEntityIdInput();
```

- *Type:* java.lang.String

---

##### `idpMetadataUrlInput`<sup>Optional</sup> <a name="idpMetadataUrlInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.idpMetadataUrlInput"></a>

```java
public java.lang.String getIdpMetadataUrlInput();
```

- *Type:* java.lang.String

---

##### `idpPemtrustedcasContentInput`<sup>Optional</sup> <a name="idpPemtrustedcasContentInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.idpPemtrustedcasContentInput"></a>

```java
public java.lang.String getIdpPemtrustedcasContentInput();
```

- *Type:* java.lang.String

---

##### `rolesKeyInput`<sup>Optional</sup> <a name="rolesKeyInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.rolesKeyInput"></a>

```java
public java.lang.String getRolesKeyInput();
```

- *Type:* java.lang.String

---

##### `spEntityIdInput`<sup>Optional</sup> <a name="spEntityIdInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.spEntityIdInput"></a>

```java
public java.lang.String getSpEntityIdInput();
```

- *Type:* java.lang.String

---

##### `subjectKeyInput`<sup>Optional</sup> <a name="subjectKeyInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.subjectKeyInput"></a>

```java
public java.lang.String getSubjectKeyInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idpEntityId`<sup>Required</sup> <a name="idpEntityId" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.idpEntityId"></a>

```java
public java.lang.String getIdpEntityId();
```

- *Type:* java.lang.String

---

##### `idpMetadataUrl`<sup>Required</sup> <a name="idpMetadataUrl" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.idpMetadataUrl"></a>

```java
public java.lang.String getIdpMetadataUrl();
```

- *Type:* java.lang.String

---

##### `idpPemtrustedcasContent`<sup>Required</sup> <a name="idpPemtrustedcasContent" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.idpPemtrustedcasContent"></a>

```java
public java.lang.String getIdpPemtrustedcasContent();
```

- *Type:* java.lang.String

---

##### `rolesKey`<sup>Required</sup> <a name="rolesKey" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.rolesKey"></a>

```java
public java.lang.String getRolesKey();
```

- *Type:* java.lang.String

---

##### `spEntityId`<sup>Required</sup> <a name="spEntityId" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.spEntityId"></a>

```java
public java.lang.String getSpEntityId();
```

- *Type:* java.lang.String

---

##### `subjectKey`<sup>Required</sup> <a name="subjectKey" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.subjectKey"></a>

```java
public java.lang.String getSubjectKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.internalValue"></a>

```java
public ManagedDatabaseOpensearchPropertiesSaml getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml">ManagedDatabaseOpensearchPropertiesSaml</a>

---



